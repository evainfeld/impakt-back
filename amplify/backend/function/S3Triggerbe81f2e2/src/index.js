/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiChangeAgentApiGraphQLAPIIdOutput = process.env.API_CHANGEAGENTAPI_GRAPHQLAPIIDOUTPUT
var apiChangeAgentApiGraphQLAPIEndpointOutput = process.env.API_CHANGEAGENTAPI_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */
exports.handler = function(event, context) {
  //eslint-disable-line
  console.log('Received S3 event:', JSON.stringify(event, null, 2));
  // Get the object from the event and show its content type
  const bucket = event.Records[0].s3.bucket.name; //eslint-disable-line
  const key = event.Records[0].s3.object.key; //eslint-disable-line
  console.log(`Bucket: ${bucket}`, `Key: ${key}`);
  context.done(null, 'Successfully processed S3 event'); // SUCCESS with message
};
