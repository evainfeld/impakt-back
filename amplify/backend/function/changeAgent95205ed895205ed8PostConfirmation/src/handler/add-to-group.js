const aws = require('aws-sdk');
// eslint-disable-next-line no-unused-vars
const { queryDocument } = require('change-agent-services/dbService');

exports.handler = async event => {
  // Amplify sometimes fails to copy envs between envs during merging.
  let group = typeof process.env.GROUP === 'undefined' ? 'Users' : process.env.GROUP;

  // should be dynamodb query
  group = event.request.userAttributes.phone_number === '+48000' ? 'Admins' : group;

  // end of block
  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
    apiVersion: '2016-04-18',
  });

  const addUserParams = {
    GroupName: group,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };
  await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
  return event;
};
