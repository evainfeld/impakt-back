const Log = require('@dazn/lambda-powertools-logger');
const { queryForPhoneNumberDocumentType, phoneTypes } = require('change-agent-services/dbService');

const CHANGE_AGENT_DYNAMO = process.env.STORAGE_CHANGEAGENTDYNAMO_NAME;

exports.handler = async event => {
  Log.debug(`Starting Pre signup for number: ${event.request.userAttributes.phone_number}`);
  let type = 'NOT_SET';
  try {
    type = await queryForPhoneNumberDocumentType(
      event.request.userAttributes.phone_number,
      CHANGE_AGENT_DYNAMO,
    );
  } catch (error) {
    Log.warn('Unable to retrive data from PhoneNumber DynamoDB table', {
      errorMessage: error.message,
      errorStack: error.stack,
    });
  }

  if (type === phoneTypes.blacklisted)
    throw new Error(
      `${event.request.userAttributes.phone_number} is blacklisted. Please contact administrator.`,
    );

  const eventResponse = event;
  eventResponse.response.autoConfirmUser = true;
  eventResponse.response.autoVerifyPhone = true;
  Log.debug(`Pre signup successfully finished.`);
  return eventResponse;
};
