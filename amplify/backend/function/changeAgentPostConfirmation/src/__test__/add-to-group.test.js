/* eslint-disable import/no-extraneous-dependencies */
const { mock, restore } = require('aws-sdk-mock');
const sinon = require('sinon');
const addToGroup = require('../handler/add-to-group.js');
const event = require('../handler/event.json');

describe('add-to-group.test.js', () => {
  /*
    Default spies
  */
  const defaultErrorMessage = 'Some AWS Error';
  const cispSpyFunc = sinon.spy((params, callback) => {
    callback(undefined, params);
  });
  const queryThrowsErrorSpy = sinon.spy((params, callback) => {
    callback(new Error(defaultErrorMessage), undefined);
  });
  const queryReturnsValueSpy = dbValue => {
    return sinon.spy((params, callback) => {
      callback(undefined, {
        Items: [{ type: dbValue }],
      });
    });
  };

  beforeEach(() => {
    mock('DynamoDB.DocumentClient', 'query', queryThrowsErrorSpy);
    mock('CognitoIdentityServiceProvider', 'adminAddUserToGroup', cispSpyFunc);
  });

  afterEach(() => {
    cispSpyFunc.resetHistory();
    restore('DynamoDB.DocumentClient');
    restore('CognitoIdentityServiceProvider', 'adminAddUserToGroup');
  });

  afterAll(() => {});

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

  it('it calls adminAddUserToGroup with Admins group if phone number exist in DB with ADMIN value', async () => {
    restore('DynamoDB.DocumentClient');
    mock('DynamoDB.DocumentClient', 'query', queryReturnsValueSpy('ADMIN'));

    process.env.GROUP = 'Users';
    const params = {
      GroupName: 'Admins',
      UserPoolId: event.userPoolId,
      Username: event.userName,
    };
    const rspEvent = await addToGroup.handler(event);

    expect(rspEvent).toBe(event);
    expect(cispSpyFunc.calledWith(params)).toBe(true);
  });

  it('it calls adminAddUserToGroup with Members group if phone number exist in DB with MEMBER value', async () => {
    restore('DynamoDB.DocumentClient');
    mock('DynamoDB.DocumentClient', 'query', queryReturnsValueSpy('MEMBER'));

    process.env.GROUP = 'Users';
    const params = {
      GroupName: 'Members',
      UserPoolId: event.userPoolId,
      Username: event.userName,
    };
    const rspEvent = await addToGroup.handler(event);
    expect(rspEvent).toBe(event);
    expect(cispSpyFunc.calledWith(params)).toBe(true);
  });

  it('it calls adminAddUserToGroup with Users group if phone number exist in DB with any other value (blacklist are rejected on previous steps', async () => {
    restore('DynamoDB.DocumentClient');
    mock('DynamoDB.DocumentClient', 'query', queryReturnsValueSpy('MEMMMEBER'));

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
