/* eslint-disable import/no-extraneous-dependencies */
const { mock, restore } = require('aws-sdk-mock');
const sinon = require('sinon');
const preSignup = require('../handler/pre-signup.js');
const event = require('../handler/event.json');

describe('pre-signup.test.js', () => {
  /*
    default spies
  */
  const defaultPhoneNumber = '+44123123123';
  event.request.userAttributes.phone_number = defaultPhoneNumber;
  const defaultErrorMessage = 'Some AWS Error';
  const throwsErrorSpy = sinon.spy((params, callback) => {
    callback(new Error(defaultErrorMessage), undefined);
  });
  let currentSpy;
  const queryReturnsValueSpy = obj => {
    return sinon.spy((params, callback) => {
      callback(undefined, {
        ...obj,
      });
    });
  };

  beforeAll(() => {});

  afterAll(() => {});

  beforeEach(() => {
    currentSpy = queryReturnsValueSpy({ Items: [] });
    mock('DynamoDB.DocumentClient', 'query', currentSpy);
  });

  afterEach(() => {
    throwsErrorSpy.resetHistory();
    currentSpy.resetHistory();
    restore('DynamoDB.DocumentClient');
  });

  describe('positive path', () => {});

  it('it returns confirmation values if number is not Blacklisted', async () => {
    const rspEvent = await preSignup.handler(event);
    expect(rspEvent.response.autoConfirmUser).toBe(true);
    expect(rspEvent.response.autoVerifyPhone).toBe(true);
    expect(currentSpy.calledOnce).toBe(true);
    const param = {
      KeyConditionExpression: 'phone=:phone',
      ExpressionAttributeValues: {
        ':phone': defaultPhoneNumber,
      },
      TableName: process.env.STORAGE_CHANGEAGENTDYNAMO_NAME,
    };
    expect(currentSpy.calledWith(param)).toBe(true);
  });

  describe('negative path', () => {});

  it('it returns confirmation values if Dynamo throws error', async () => {
    restore('DynamoDB.DocumentClient');
    mock('DynamoDB.DocumentClient', 'query', throwsErrorSpy);
    const rspEvent = await preSignup.handler(event);
    expect(rspEvent.response.autoConfirmUser).toBe(true);
    expect(rspEvent.response.autoVerifyPhone).toBe(true);
    expect(throwsErrorSpy.calledOnce).toBe(true);
    const param = {
      KeyConditionExpression: 'phone=:phone',
      ExpressionAttributeValues: {
        ':phone': defaultPhoneNumber,
      },
      TableName: process.env.STORAGE_CHANGEAGENTDYNAMO_NAME,
    };
    expect(throwsErrorSpy.calledWith(param)).toBe(true);
  });

  it('it throws error if Blacklisted (end user visible)', async () => {
    restore('DynamoDB.DocumentClient');
    currentSpy = queryReturnsValueSpy({ Items: [{ type: 'BLACKLISTED' }] });
    mock('DynamoDB.DocumentClient', 'query', currentSpy);

    try {
      await preSignup.handler(event);
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      console.log(e.message);
      expect(e.message).toBe(`${defaultPhoneNumber} is blacklisted. Please contact administrator.`);
    }

    expect(currentSpy.calledOnce).toBe(true);
    const param = {
      KeyConditionExpression: 'phone=:phone',
      ExpressionAttributeValues: {
        ':phone': defaultPhoneNumber,
      },
      TableName: process.env.STORAGE_CHANGEAGENTDYNAMO_NAME,
    };
    expect(currentSpy.calledWith(param)).toBe(true);
  });
});
