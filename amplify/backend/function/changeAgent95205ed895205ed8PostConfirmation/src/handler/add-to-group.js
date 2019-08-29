const aws = require('aws-sdk');

exports.handler = async event => {
  // Amplify sometimes fails to copy envs between envs during merging.
  if (typeof process.env.GROUP === 'undefined' || process.env.GROUP === null) {
    process.env.GROUP = 'Users';
  }

  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
    apiVersion: '2016-04-18',
  });

  const addUserParams = {
    GroupName: process.env.GROUP,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };

  await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
  return event;
};
