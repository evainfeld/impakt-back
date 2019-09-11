const AWS = require('aws-sdk');

const CHANGE_AGENT_DYNAMO = process.env.STORAGE_CHANGEAGENTDYNAMO_NAME;

const decorateParamsWithTableName = (params, tableName) => ({
  ...params,
  TableName: tableName,
});

const queryDocument = async (phoneNumber, tableName) => {
  const params = {
    KeyConditionExpression: 'phone=:phone',
    ExpressionAttributeValues: {
      ':phone': phoneNumber,
    },
  };
  const documentClient = new AWS.DynamoDB.DocumentClient({});
  const doc = await documentClient.query(decorateParamsWithTableName(params, tableName)).promise();
  return doc;
};

exports.handler = async event => {
  let type = 'NOT_SET';
  try {
    const { Items } = await queryDocument(
      event.request.userAttributes.phone_number,
      CHANGE_AGENT_DYNAMO,
    );
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
