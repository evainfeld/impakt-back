const aws = require('aws-sdk');
const Log = require('@dazn/lambda-powertools-logger');
const { phoneTypes } = require('change-agent-services/dbService');

const authChangeAgentUserPoolId = process.env.AUTH_CHANGEAGENT95205ED895205ED8_USERPOOLID;

const operationTypes = {
  insert: 'INSERT',
  remove: 'REMOVE',
  modify: 'MODIFY',
};

const getUsername = async (cisp, phone) => {
  const params = {
    AttributesToGet: ['username'],
    Filter: `phone_number = "${phone}"`,
    UserPoolId: authChangeAgentUserPoolId,
  };
  const { Users } = await cisp.listUsers(params).promise();
  if (Array.isArray(Users) && Users.length) return Users[0].Username;

  throw new Error(`No user for phone ${phone}`);
};

const getFirstGroup = async (cisp, username) => {
  const params = {
    Username: username,
    UserPoolId: authChangeAgentUserPoolId,
  };
  const { Groups } = await cisp.adminListGroupsForUser(params).promise();
  if (Array.isArray(Groups) && Groups.length) return Groups[0].GroupName;

  throw new Error(`No group for user ${username}`);
};

const removeUserFromGroup = async (cisp, username, group) => {
  const params = {
    GroupName: group,
    UserPoolId: authChangeAgentUserPoolId,
    Username: username,
  };
  await cisp.adminRemoveUserFromGroup(params).promise();
};

const addUserToGroup = async (cisp, username, group) => {
  const addUserParams = {
    GroupName: group,
    UserPoolId: authChangeAgentUserPoolId,
    Username: username,
  };
  await cisp.adminAddUserToGroup(addUserParams).promise();
};

const deleteUser = async (cisp, phone) => {
  let user;
  try {
    user = await getUsername(cisp, phone);
  } catch (error) {
    Log.warn('getUsername thrown error for deleteUser', { errorMessage: error.message });
    return 'Username does not exist';
  }
  const params = {
    Username: user,
    UserPoolId: authChangeAgentUserPoolId,
  };
  await cisp.adminDeleteUser(params).promise();
  return 'Username deleted';
};

/**
 *
 * @param {*} cisp
 * @param {*} user
 * @param {*} group -> change-agent/amplify/backend/api/changeAgentApi/stacks/CustomResources.json
 */
const updeteUserGroupIfExists = async (cisp, phone, group) => {
  let username = null;
  try {
    username = await getUsername(cisp, phone);
  } catch (error) {
    Log.warn('getUsername thrown error for updeteUserGroupIfExists', {
      errorMessage: error.message,
    });
    return 'Username does not exist';
  }

  let currentGroup;
  try {
    currentGroup = await getFirstGroup(cisp, username);
  } catch (error) {
    Log.warn("getFirstGroup thrown error - supposing there's no group", {
      errorMessage: error.message,
    });
    currentGroup = null;
  }

  if (currentGroup !== null) {
    await removeUserFromGroup(cisp, username, currentGroup);
  }

  await addUserToGroup(cisp, username, group);
  return `Username ${username} added to group ${group}`;
};

const processInsertOrModify = async (cisp, record) => {
  let result;
  switch (record.dynamodb.NewImage.type.S) {
    case phoneTypes.admin:
      result = await updeteUserGroupIfExists(cisp, record.dynamodb.NewImage.phone.S, 'Admins');
      break;
    case phoneTypes.member:
      result = await updeteUserGroupIfExists(cisp, record.dynamodb.NewImage.phone.S, 'Members');
      break;
    case phoneTypes.blacklisted:
      result = await deleteUser(cisp, record.dynamodb.NewImage.phone.S);
      break;
    default:
      throw new Error(`Operation type ${record.dynamodb.NewImage.type.S} not supported`);
  }
  return result;
};

const processRemove = async (cisp, record) => {
  // downgrade to normal USER or ignore if removed from blacklist (no username in Cognito)
  const result = await updeteUserGroupIfExists(cisp, record.dynamodb.Keys.phone.S, 'Users');
  return result;
};

exports.handler = async event => {
  Log.debug(`Starting DB Trigger for events: [${event.Records.map(record => record.eventName)}]`);
  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
    apiVersion: '2016-04-18',
  });

  const result = await Promise.all(
    event.Records.map(async record => {
      let opResult = 'Skipping execution';
      switch (record.eventName) {
        case operationTypes.insert:
          opResult = await processInsertOrModify(cognitoidentityserviceprovider, record);
          break;
        case operationTypes.remove:
          opResult = await processRemove(cognitoidentityserviceprovider, record);
          break;
        case operationTypes.modify:
          opResult = await processInsertOrModify(cognitoidentityserviceprovider, record);
          break;
        default:
          break;
      }
      return opResult;
    }),
  );
  Log.debug(`DB Trigger successfully finishing`);
  return result; //  SUCCESS with message
};
