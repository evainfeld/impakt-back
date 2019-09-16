const aws = require('aws-sdk');
const { phoneTypes } = require('change-agent-services/dbService');

const authChangeAgentUserPoolId = process.env.AUTH_CHANGEAGENT95205ED895205ED8_USERPOOLID;

const operationTypes = {
  insert: 'INSERT',
  remove: 'REMOVE',
  modify: 'MODIFY',
};

const getUsername = async (cips, phone) => {
  const params = {
    AttributesToGet: ['username'],
    Filter: `phone_number = "${phone}"`,
    UserPoolId: authChangeAgentUserPoolId,
  };
  const { Users } = await cips.listUsers(params).promise();
  if (Array.isArray(Users) && Users.length) return Users[0].Username;

  throw new Error(`No user for phone ${phone}`);
};

const getFirstGroup = async (cips, username) => {
  const params = {
    Username: username,
    UserPoolId: authChangeAgentUserPoolId,
  };
  const { Groups } = await cips.adminListGroupsForUser(params).promise();
  if (Array.isArray(Groups) && Groups.length) return Groups[0].GroupName;

  throw new Error(`No group for user ${username}`);
};

const removeUserFromGroup = async (cips, username, group) => {
  const params = {
    GroupName: group,
    UserPoolId: authChangeAgentUserPoolId,
    Username: username,
  };
  await cips.dminRemoveUserFromGroup(params).promise();
};

const addUserToGroup = async (cips, username, group) => {
  const addUserParams = {
    GroupName: group,
    UserPoolId: authChangeAgentUserPoolId,
    Username: username,
  };
  await cips.adminAddUserToGroup(addUserParams).promise();
};

const deleteUser = async (cisp, phone) => {
  let user;
  try {
    user = await getUsername(cisp, phone);
  } catch (error) {
    console.log('Warn', error.stack);
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
  let username;
  try {
    username = await getUsername(cisp, phone);
  } catch (error) {
    console.log('Warn', error.stack);
    return 'Username does not exist';
  }

  let currentGroup;
  try {
    currentGroup = await getFirstGroup(cisp, username);
  } catch (error) {
    console.log('Warn', error.stack);
    currentGroup = null;
  }

  if (currentGroup !== null) {
    await removeUserFromGroup(cisp, username, currentGroup);
  }

  await addUserToGroup(cisp, username, group);
  return `Username ${username} added to group ${group}`;
};

const processInsertOrModify = async (cisp, record) => {
  switch (record.dynamodb.NewImage.type.S) {
    case phoneTypes.admin:
      await updeteUserGroupIfExists(cisp, record.dynamodb.NewImage.phone.S, 'Admins');
      break;
    case phoneTypes.member:
      await updeteUserGroupIfExists(cisp, record.dynamodb.NewImage.phone.S, 'Members');
      break;
    case phoneTypes.blacklisted:
      await deleteUser(cisp, record.dynamodb.NewImage.phone.S);
      break;
    default:
      throw new Error(`Operation type ${record.dynamodb.NewImage.type.S} not supported`);
  }
};

const processRemove = async (cisp, record) => {
  // downgrade to normal USER or ignore if removed from blacklist (no username in Cognito)
  await updeteUserGroupIfExists(cisp, record.dynamodb.Keys.phone.S, 'Users');
};

exports.handler = async event => {
  console.log(JSON.stringify(event, null, 2));

  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
    apiVersion: '2016-04-18',
  });

  await Promise.all(
    event.Records.map(async record => {
      console.log(record.eventID);
      console.log(record.eventName);
      console.log('DynamoDB Record: %j', record.dynamodb);

      switch (record.eventName) {
        case operationTypes.insert:
          await processInsertOrModify(cognitoidentityserviceprovider, record);
          break;
        case operationTypes.remove:
          await processRemove(cognitoidentityserviceprovider, record);
          break;
        case operationTypes.modify:
          await processInsertOrModify(cognitoidentityserviceprovider, record);
          break;
        default:
          break;
      }
    }),
  );
  return 'Successfully processed DB events'; //  SUCCESS with message
};
