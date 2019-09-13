/* eslint-disable import/no-extraneous-dependencies */
const { mock, restore } = require('aws-sdk-mock');
const preSignup = require('../handler/pre-signup.js');
const event = require('../handler/event.json');

describe('pre-signup.test.js', () => {
  // dummy mock
  mock('DynamoDB.DocumentClient', 'query', (params, callback) => {
    callback(false, {
      Items: [],
    });
  });

  afterAll(() => {
    restore('DynamoDB.DocumentClient', 'query');
  });

  it('it accepts phone number provided by user', async () => {
    const rspEvent = await preSignup.handler(event);

    expect(rspEvent.response.autoConfirmUser).toBe(true);
    expect(rspEvent.response.autoVerifyPhone).toBe(true);
  });
});
