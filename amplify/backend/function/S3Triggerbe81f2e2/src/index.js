/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiChangeAgentApiGraphQLAPIIdOutput = process.env.API_CHANGEAGENTAPI_GRAPHQLAPIIDOUTPUT
var apiChangeAgentApiGraphQLAPIEndpointOutput = process.env.API_CHANGEAGENTAPI_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */
const AWS = require('aws-sdk');

/* idzie zmontować nazwe tabeli
"-",
                                [
                                    "Announcement",
                                    {
                                        "Ref": "GetAttGraphQLAPIApiId"
                                    },
                                    {
                                        "Ref": "env"
                                    }
                                ]
*/

const apiChangeAgentApiGraphQLAPIIdOutput = process.env.API_CHANGEAGENTAPI_GRAPHQLAPIIDOUTPUT;
const env = process.env.ENV;

const decorateParamsWithTableName = (params, tableName) => ({
  ...params,
  TableName: tableName,
});

const putDocument = async (record, tableName) => {
  const documentClient = new AWS.DynamoDB.DocumentClient({});
  const params = {
    Item: {
      ...record,
    },
  };

  await documentClient.put(decorateParamsWithTableName(params, tableName)).promise();
};

exports.handler = async function(event, context) {
  //eslint-disable-line
  console.log('Received S3 event:', JSON.stringify(event, null, 2));
  // Get the object from the event and show its content type
  event.Records.forEach(async s3 => {
    const { bucket, key } = s3.bucket;
    const data = new AWS.S3().getObject({ Bucket: bucket, Key: key }).promise();
    const { tableName, docs } = JSON.parse(data.Body.toString('utf-8'));
    docs.forEach(async doc => {
      await putDocument(doc, `${tableName}-${apiChangeAgentApiGraphQLAPIIdOutput}-${env}`);
    });
  });
  context.done(null, 'Successfully processed S3 event'); // SUCCESS with message
};
