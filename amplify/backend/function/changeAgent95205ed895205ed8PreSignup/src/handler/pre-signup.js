const { queryForPhoneNumberDocumentType, phoneTypes } = require('change-agent-services/dbService');

const CHANGE_AGENT_DYNAMO = process.env.STORAGE_CHANGEAGENTDYNAMO_NAME;

exports.handler = async event => {
  const type = await queryForPhoneNumberDocumentType(
    event.request.userAttributes.phone_number,
    CHANGE_AGENT_DYNAMO,
  );
  if (type === phoneTypes.blacklisted)
    throw new Error(
      `${event.request.userAttributes.phone_number} is blacklisted. Please contact administrator.`,
    );

  const eventResponse = event;
  eventResponse.response.autoConfirmUser = true;
  eventResponse.response.autoVerifyPhone = true;
  return eventResponse;
};
