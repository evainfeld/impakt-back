const AWS = require('aws-sdk');
const { putDocument } = require('change-agent-services/dbService');

const apiChangeAgentApiGraphQLAPIIdOutput = process.env.API_CHANGEAGENTAPI_GRAPHQLAPIIDOUTPUT;
const env = process.env.ENV;

const putAllDocuments = async (docs, tableName) => {
  await Promise.all(
    docs.map(async doc => {
      await putDocument(doc, `${tableName}-${apiChangeAgentApiGraphQLAPIIdOutput}-${env}`);
    }),
  );
};

exports.handler = async event => {
  await Promise.all(
    event.Records.map(async record => {
      const params = {
        Bucket: record.s3.bucket.name,
        Key: record.s3.object.key,
      };

      const data = await new AWS.S3().getObject(params).promise();
      const { docs, tableName } = JSON.parse(data.Body.toString('utf-8'));
      await putAllDocuments(docs, tableName);
      await await new AWS.S3().deleteObject(params).promise();
    }),
  );
  return 'Successfully processed S3 events'; // SUCCESS with message
};
