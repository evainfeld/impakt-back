const AWS = require('aws-sdk');

const decorateParamsWithTableName = (params, tableName) => ({
  ...params,
  TableName: tableName,
});

exports.phoneTypes = {
  admin: 'ADMIN',
  member: 'MEMBER',
  blacklisted: 'BLACKLISTED',
};

exports.queryDocument = async (params, tableName) => {
  const documentClient = new AWS.DynamoDB.DocumentClient({});
  const doc = await documentClient.query(decorateParamsWithTableName(params, tableName)).promise();
  return doc;
};

exports.queryForPhoneNumberDocumentType = async (phoneNummber, tableName) => {
  let type = 'NOT_SET';
  try {
    const params = {
      KeyConditionExpression: 'phone=:phone',
      ExpressionAttributeValues: {
        ':phone': phoneNummber,
      },
    };
    const { Items } = await this.queryDocument(params, tableName);
    type = Array.isArray(Items) && Items.length ? Items[0].type : 'NOT_EXIST';
  } catch (error) {
    throw Error(`Failed to query for phone number.`);
  }
  return type;
};

exports.putDocument = async (record, tableName) => {
  const documentClient = new AWS.DynamoDB.DocumentClient({});
  const params = {
    Item: {
      ...record,
    },
  };

  await documentClient.put(decorateParamsWithTableName(params, tableName)).promise();
};
