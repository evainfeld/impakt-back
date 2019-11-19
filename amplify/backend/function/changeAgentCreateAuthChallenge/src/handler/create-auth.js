const cryptoSec = require('crypto-secure-random-digit');
const AWS = require('aws-sdk');
const { queryForPhoneNumberDocumentType, phoneTypes } = require('change-agent-services/dbService');

const CHANGE_AGENT_DYNAMO = process.env.STORAGE_CHANGEAGENTDYNAMO_NAME;

async function sendSMSviaSNS(phoneNumber, secretLoginCode, isDev) {
  if (isDev) return;
  const params = {
    Message: `Change Agent: ${secretLoginCode}`,
    PhoneNumber: phoneNumber,
  };
  // Create a new SNS object.
  try {
    await new AWS.SNS().publish(params).promise();
  } catch (error) {
    console.log('Error', error.stack);
    throw new Error(`Unable to send message. Please contact administrator or try later`);
  }
}

async function queryForUser(phoneNumber) {
  let type = 'NOT_SET';
  try {
    type = await queryForPhoneNumberDocumentType(phoneNumber, CHANGE_AGENT_DYNAMO);
  } catch (error) {
    console.log('Warn', error.stack);
  }
  return type;
}

async function generateSecretAndSendSMS(phoneNumber, digits, isDev) {
  const secretLoginCode = isDev ? '111111' : cryptoSec.randomDigits(digits).join('');
  await sendSMSviaSNS(phoneNumber, secretLoginCode, isDev); // use SNS for sending SMS
  return secretLoginCode;
}

async function generateSecretForAdmin(ssmParamName, phoneNumber, digits, isDev) {
  let secret;
  try {
    const req = {
      Names: [ssmParamName],
      WithDecryption: true,
    };
    const resp = await new AWS.SSM().getParameters(req).promise();
    secret = resp.Parameters[0].Value;
  } catch (error) {
    console.log('Warn', error.stack);
    // falling back trying to generate secret and sendSMS
    secret = await generateSecretAndSendSMS(phoneNumber, 6, isDev);
  }
  return secret;
}

// Main handler
exports.handler = async event => {
  let secretLoginCode;
  const isDev = typeof process.env.envType !== 'undefined' && process.env.envType === 'dev';

  const type = await queryForUser(event.request.userAttributes.phone_number);
  const phoneNumber = event.request.userAttributes.phone_number;

  if (type === phoneTypes.admin) {
    secretLoginCode = await generateSecretForAdmin(
      'change-agent-admin-pass',
      phoneNumber,
      6,
      isDev,
    );
  } else if (!event.request.session || !event.request.session.length) {
    // This is a new auth session
    // Generate a new secret login code and text it to the user
    secretLoginCode = await generateSecretAndSendSMS(phoneNumber, 6, isDev);
  } else {
    // There's an existing session. Don't generate new digits but
    // re-use the code from the current session. This allows the user to
    // make a mistake when keying in the code and to then retry, rather
    // the needing to e-mail the user an all new code again.
    const previousChallenge = event.request.session.slice(-1)[0];
    const secret = previousChallenge.challengeMetadata.match(/CODE-(\d*)/)[1];
    secretLoginCode = secret;
  }
  const eventResponse = event;
  // This is sent back to the client app
  eventResponse.response.publicChallengeParameters = {
    phone: event.request.userAttributes.phone_number,
  };
  // Add the secret login code to the private challenge parameters
  // so it can be verified by the "Verify Auth Challenge Response" trigger
  eventResponse.response.privateChallengeParameters = { secretLoginCode };
  // Add the secret login code to the session so it is available
  // in a next invocation of the "Create Auth Challenge" trigger
  eventResponse.response.challengeMetadata = `CODE-${secretLoginCode}`;
  return eventResponse;
};
