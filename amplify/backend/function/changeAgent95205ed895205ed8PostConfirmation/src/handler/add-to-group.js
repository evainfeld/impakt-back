const aws = require('aws-sdk');
const { queryForPhoneNumberDocumentType, phoneTypes } = require('change-agent-services/dbService');

const CHANGE_AGENT_DYNAMO = process.env.STORAGE_CHANGEAGENTDYNAMO_NAME;

exports.handler = async event => {
  let group;
  try {
    const type = await queryForPhoneNumberDocumentType(
      event.request.userAttributes.phone_number,
      CHANGE_AGENT_DYNAMO,
    );
    switch (type) {
      case phoneTypes.admin:
        group = 'Admins';
        break;
      case phoneTypes.member:
        group = 'Members';
        break;
      default:
        group = 'Users';
        break;
    }
  } catch (error) {
    group = typeof process.env.GROUP === 'undefined' ? 'Users' : process.env.GROUP;
  }

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
