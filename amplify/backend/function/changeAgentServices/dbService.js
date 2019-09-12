const AWS = require('aws-sdk');

const decorateParamsWithTableName = (params, tableName) => ({
  ...params,
  TableName: tableName,
});

exports.queryDocument = async (params, tableName) => {
  const documentClient = new AWS.DynamoDB.DocumentClient({});
  const doc = await documentClient.query(decorateParamsWithTableName(params, tableName)).promise();
  return doc;
};

exports.putDocument = async (params, tableName) => {
  const documentClient = new AWS.DynamoDB.DocumentClient({});
  const doc = await documentClient.query(decorateParamsWithTableName(params, tableName)).promise();
  return doc;
};
