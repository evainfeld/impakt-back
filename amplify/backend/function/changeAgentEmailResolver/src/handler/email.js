/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

const resolvers = {
  Mutation: {
    notifyCoordinator: async ctx => {
      console.log(`ctx in resolver: ${ctx}`);
      // here we'd call some SES email sending
      return 'SUCCESS';
    },
  },
};

exports.handler = async event => {
  console.log(`event = ${JSON.stringify(event)}`);
  const resolver = resolvers[event.typeName][event.fieldName];
  if (resolver) {
    const result = await resolver(event);
    return result;
  }
  throw new Error('Resolver not found.');
};
