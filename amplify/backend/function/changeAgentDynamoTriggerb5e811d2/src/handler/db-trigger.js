// eslint-disable
const aws = require('aws-sdk');

const authChangeAgentUserPoolId = process.env.AUTH_CHANGEAGENT95205ED895205ED8_USERPOOLID;

const phoneTypes = {
  admin: 'ADMIN',
  member: 'MEMBER',
  blacklisted: 'BLACKLISTED',
};

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
  console.log(Users);
  if (Array.isArray(Users) && Users.length) return Users[0].Username;

  throw new Error(`No user for phone ${phone}`);
};

const deleteUser = async (cisp, phone) => {
  let user;
  try {
    user = await getUsername(cisp, phone);
  } catch (error) {
    console.log('Error', error.stack);
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
// eslint-disable-line
// eslint-disable-next-line no-unused-vars
const updeteUserGroupIfExists = async (cisp, user, group) => {};

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
// eslint-disable-line
// eslint-disable-next-line no-unused-vars
const processRemove = async (cisp, record) => {};

exports.handler = async event => {
  // eslint-disable-line
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

      // record.eventName = REMOVE
      // record.dynamodb.Keys.phone.S
      // blacklist - nothing
      // other -> downgrade to Users

      // record.eventName = MODIFY
      // blacklist -> delete
      // other move to new group
    }),
  );
  return 'Successfully processed DB events'; //  SUCCESS with message
};
