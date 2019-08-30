const aws = require('aws-sdk');

exports.handler = async event => {
  // Amplify sometimes fails to copy envs between envs during merging.
  const group = typeof process.env.GROUP === 'undefined' ? 'Users' : process.env.GROUP;

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
