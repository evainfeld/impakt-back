const cryptoSec = require('crypto-secure-random-digit');
const AWS = require('aws-sdk');

// Get Pinpoint Project ID from environment variable
// var poinpointProjectID = process.env.PINPOINT_PROJECT_ID;

// Send secret code over SMS via Amazon Simple Notification Service (SNS)
// Requirements: Permission for this function to publish to SNS
async function sendSMSviaSNS(phoneNumber, secretLoginCode) {
  const params = {
    Message: `Change Agent: ${secretLoginCode}`,
    PhoneNumber: phoneNumber,
  };
  if (typeof process.env.envType !== 'undefined' && process.env.envType === 'dev') {
    return;
  }
  // Create a new Pinpoint object.
  await new AWS.SNS().publish(params).promise();
}

function generateSecret(digits) {
  if (typeof process.env.envType !== 'undefined' && process.env.envType === 'dev') {
    return '111111';
  }
  return cryptoSec.randomDigits(digits).join('');
}

// Main handler
exports.handler = async event => {
  let secretLoginCode;
  if (!event.request.session || !event.request.session.length) {
    const phoneNumber = event.request.userAttributes.phone_number;
    // This is a new auth session
    // Generate a new secret login code and text it to the user
    secretLoginCode = generateSecret(6);
    await sendSMSviaSNS(phoneNumber, secretLoginCode); // use SNS for sending SMS
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
