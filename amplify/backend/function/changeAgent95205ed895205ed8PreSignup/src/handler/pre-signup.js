const { queryDocument } = require('change-agent-services/dbService');

const CHANGE_AGENT_DYNAMO = process.env.STORAGE_CHANGEAGENTDYNAMO_NAME;

exports.handler = async event => {
  let type = 'NOT_SET';

  try {
    const params = {
      KeyConditionExpression: 'phone=:phone',
      ExpressionAttributeValues: {
        ':phone': event.request.userAttributes.phone_number,
      },
    };
    const { Items } = await queryDocument(params, CHANGE_AGENT_DYNAMO);
    type = Array.isArray(Items) && Items.length ? Items[0].type : 'NOT_EXIST';
  } catch (error) {
    console.log('Warn', error.stack);
  }

  if (type === 'BLACKLISTED')
    throw new Error(
      `${event.request.userAttributes.phone_number} is blacklisted. Please contact administrator.`,
    );

  const eventResponse = event;
  eventResponse.response.autoConfirmUser = true;
  eventResponse.response.autoVerifyPhone = true;
  return eventResponse;
};
