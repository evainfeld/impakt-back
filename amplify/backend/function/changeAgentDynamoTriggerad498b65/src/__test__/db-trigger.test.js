/* eslint-disable import/no-extraneous-dependencies */
const { mock, restore } = require('aws-sdk-mock');
const sinon = require('sinon');
const dbTrigger = require('../handler/db-trigger.js');
const events = require('./events.js');

describe('db-trigger.test.js', () => {
  /*
    Default spies
  */
  const defaultUsername = '111111-2222222-3333333-444444';
  const defaultGroup = 'Users';
  const defaultErrorMessage = 'Some AWS Error';
  const emptyUserListSpy = sinon.spy((_params, callback) => {
    callback(undefined, { Users: [] });
  });
  const listUsersSpy = sinon.spy((_params, callback) => {
    callback(undefined, { Users: [{ Username: defaultUsername }] });
  });
  const emptyGroupListSpy = sinon.spy((_params, callback) => {
    callback(undefined, { Groups: [] });
  });
  const adminListGroupsForUserSpy = sinon.spy((_params, callback) => {
    callback(undefined, { Groups: [{ GroupName: defaultGroup }] });
  });
  const adminInListGroups = sinon.spy((_params, callback) => {
    callback(undefined, { Groups: [{ GroupName: 'Admins' }] });
  });
  const emptyBodyRespSpy = sinon.spy((_params, callback) => {
    callback(undefined, {});
  });
  const defaultErrorSpy = sinon.spy((_params, callback) => {
    callback(new Error(defaultErrorMessage), undefined);
  });
  const adminRemoveUserFromGroupSpy = emptyBodyRespSpy;
  const adminAddUserToGroupSpy = emptyBodyRespSpy;
  const adminDeleteUserSpy = emptyBodyRespSpy;

  beforeAll(() => {});

  afterAll(() => {});

  beforeEach(() => {
    mock('CognitoIdentityServiceProvider', 'listUsers', listUsersSpy);
    mock('CognitoIdentityServiceProvider', 'adminListGroupsForUser', adminListGroupsForUserSpy);
    mock('CognitoIdentityServiceProvider', 'adminRemoveUserFromGroup', adminRemoveUserFromGroupSpy);
    mock('CognitoIdentityServiceProvider', 'adminAddUserToGroup', adminAddUserToGroupSpy);
    mock('CognitoIdentityServiceProvider', 'adminDeleteUser', adminDeleteUserSpy);
  });

  afterEach(() => {
    listUsersSpy.resetHistory();
    emptyUserListSpy.resetHistory();
    adminListGroupsForUserSpy.resetHistory();
    adminRemoveUserFromGroupSpy.resetHistory();
    adminAddUserToGroupSpy.resetHistory();
    adminDeleteUserSpy.resetHistory();
    adminInListGroups.resetHistory();
    defaultErrorSpy.resetHistory();
    restore('CognitoIdentityServiceProvider', 'listUsers');
    restore('CognitoIdentityServiceProvider', 'adminListGroupsForUser');
    restore('CognitoIdentityServiceProvider', 'adminRemoveUserFromGroup');
    restore('CognitoIdentityServiceProvider', 'adminAddUserToGroup');
    restore('CognitoIdentityServiceProvider', 'adminDeleteUser');
  });

  describe('global tests', () => {
    it('it has env variables set', async () => {
      expect(process.env.AUTH_CHANGEAGENT95205ED895205ED8_USERPOOLID).toBeDefined();
    });
  });

  describe('INSERT event processing', () => {
    it("it processes BLACKLISTED if user doesn't exist in Cognito ", async () => {
      restore('CognitoIdentityServiceProvider', 'listUsers');
      mock('CognitoIdentityServiceProvider', 'listUsers', emptyUserListSpy);
      const rspEvent = await dbTrigger.handler(events.eventInsertBlackListed);
      expect(rspEvent).toMatchObject(['Username does not exist']);
    });

    it('it processes BLACKLISTED if user exists in Cognito ', async () => {
      const rspEvent = await dbTrigger.handler(events.eventInsertBlackListed);
      expect(rspEvent).toMatchObject(['Username deleted']);
    });

    it("it processes MEMBER if user doesn't exist in Cognito ", async () => {
      restore('CognitoIdentityServiceProvider', 'listUsers');
      mock('CognitoIdentityServiceProvider', 'listUsers', emptyUserListSpy);
      const rspEvent = await dbTrigger.handler(events.eventInsertMember);
      expect(rspEvent).toMatchObject(['Username does not exist']);
    });

    it("it processes MEMBER if user exists in Cognito and deesn't have group set", async () => {
      restore('CognitoIdentityServiceProvider', 'adminListGroupsForUser');
      mock('CognitoIdentityServiceProvider', 'adminListGroupsForUser', emptyGroupListSpy);
      const rspEvent = await dbTrigger.handler(events.eventInsertMember);
      const resultStr = `Username ${defaultUsername} added to group Members`;
      expect(rspEvent).toMatchObject([resultStr]);
    });

    it('it throws exception if db was filled with wrong category name', async () => {
      try {
        await await dbTrigger.handler(events.eventInsertOther);
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
      } catch (e) {
        expect(e.message).toBe('Operation type OTHER not supported');
      }
    });

    it('it processes ADMIN if user exists in Cognito ', async () => {
      const rspEvent = await dbTrigger.handler(events.eventInsertAdmin);
      const resultStr = `Username ${defaultUsername} added to group Admins`;
      expect(rspEvent).toMatchObject([resultStr]);
    });

    it('it processes multiple BLACKLISTED operations in one event', async () => {
      const rspEvent = await dbTrigger.handler(events.eventInsertMultipleBlackListed);
      expect(rspEvent).toMatchObject(['Username deleted', 'Username deleted']);
    });
  });

  describe('MODIFY event processing', () => {
    it('it processes ADMIN if user exists in Cognito', async () => {
      const rspEvent = await dbTrigger.handler(events.eventModifyAdmin);
      const resultStr = `Username ${defaultUsername} added to group Admins`;
      expect(rspEvent).toMatchObject([resultStr]);
    });
    it('it processes BLACKLISTED if user exists in Cognito', async () => {
      const rspEvent = await dbTrigger.handler(events.eventInsertBlackListed);
      expect(rspEvent).toMatchObject(['Username deleted']);
    });
    it("it processes ADMIN if user doesn't exist in Cognito", async () => {
      restore('CognitoIdentityServiceProvider', 'listUsers');
      mock('CognitoIdentityServiceProvider', 'listUsers', emptyUserListSpy);
      const rspEvent = await dbTrigger.handler(events.eventModifyAdmin);
      expect(rspEvent).toMatchObject(['Username does not exist']);
    });
  });

  describe('REMOVE event processing', () => {
    it('it downgrades ADMIN to USER', async () => {
      restore('CognitoIdentityServiceProvider', 'adminListGroupsForUser');
      mock('CognitoIdentityServiceProvider', 'adminListGroupsForUser', adminInListGroups);
      const rspEvent = await dbTrigger.handler(events.eventRemove);
      const resultStr = `Username ${defaultUsername} added to group Users`;
      expect(rspEvent).toMatchObject([resultStr]);
    });
    it("it ignores if user doesn't exist (was on Blacklist)", async () => {
      restore('CognitoIdentityServiceProvider', 'listUsers');
      mock('CognitoIdentityServiceProvider', 'listUsers', emptyUserListSpy);
      const rspEvent = await dbTrigger.handler(events.eventRemove);
      expect(rspEvent).toMatchObject(['Username does not exist']);
    });
  });

  describe('Unexpected situations handling', () => {
    it('it throws error for broken event', async () => {
      try {
        await dbTrigger.handler(events.eventWrong);
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
      } catch (e) {
        expect(e.name).toBe('TypeError');
      }
    });

    it('it does nothing for any operation except IMR', async () => {
      const rspEvent = await dbTrigger.handler(events.eventOther);
      expect(rspEvent).toMatchObject(['Skipping execution']);
    });

    it('it throws error if adminAddUserToGroup fails', async () => {
      restore('CognitoIdentityServiceProvider', 'adminAddUserToGroup');
      mock('CognitoIdentityServiceProvider', 'adminAddUserToGroup', defaultErrorSpy);
      try {
        await dbTrigger.handler(events.eventInsertAdmin);
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
      } catch (e) {
        expect(e.message).toBe(defaultErrorMessage);
      }
    });

    it('it throws error if adminDeleteUser fails', async () => {
      restore('CognitoIdentityServiceProvider', 'adminDeleteUser');
      mock('CognitoIdentityServiceProvider', 'adminDeleteUser', defaultErrorSpy);
      try {
        await dbTrigger.handler(events.eventInsertBlackListed);
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
      } catch (e) {
        expect(e.message).toBe(defaultErrorMessage);
      }
    });
  });
});
