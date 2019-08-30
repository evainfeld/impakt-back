/* eslint-disable import/no-extraneous-dependencies */
const { mock, restore } = require('aws-sdk-mock');
const sinon = require('sinon');
const addToGroup = require('../handler/add-to-group.js');
const event = require('../handler/event.json');

describe('add-to-group.test.js', () => {
  const cispSpyFunc = sinon.spy((params, callback) => {
    callback(undefined, params);
  });
  mock('CognitoIdentityServiceProvider', 'adminAddUserToGroup', cispSpyFunc);

  afterAll(() => {
    restore('CognitoIdentityServiceProvider', 'adminAddUserToGroup');
  });

  it('it sets default group to Users if missing in env ', async () => {
    const params = {
      GroupName: 'Users',
      UserPoolId: event.userPoolId,
      Username: event.userName,
    };
    const rspEvent = await addToGroup.handler(event);

    expect(rspEvent).toBe(event);
    expect(cispSpyFunc.calledWith(params)).toBe(true);
  });

  it('it calls adminAddUserToGroup and forwards event', async () => {
    process.env.GROUP = 'Users';
    const params = {
      GroupName: process.env.GROUP,
      UserPoolId: event.userPoolId,
      Username: event.userName,
    };
    const rspEvent = await addToGroup.handler(event);

    expect(rspEvent).toBe(event);
    expect(cispSpyFunc.calledWith(params)).toBe(true);
  });
});
