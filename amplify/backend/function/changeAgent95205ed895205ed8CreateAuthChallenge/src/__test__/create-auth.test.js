/* eslint-disable import/no-extraneous-dependencies */
jest.mock('crypto-secure-random-digit');
jest.mock('change-agent-services/dbService');

const random = require('crypto-secure-random-digit');
const { mock, restore } = require('aws-sdk-mock');
const sinon = require('sinon');
const { queryDocument, restoreDynamoClientMock } = require('change-agent-services/dbService');
const createAuth = require('../handler/create-auth.js');
const event = require('../handler/event.json');
const eventSession = require('../handler/eventSession.json');

describe('create-auth.test.js', () => {
  let snsSpyFunc;
  let spy;

  beforeAll(() => {
    queryDocument.mockImplementation(() => ({
      Items: [],
    }));

    snsSpyFunc = sinon.spy((params, callback) => {
      callback(undefined, params);
    });
    mock('SNS', 'publish', snsSpyFunc);
    random.randomDigits = jest.fn().mockImplementation(digits => {
      const array = [];
      for (let i = 0; i < digits; i += 1) {
        array.push(2);
      }
      return array;
    });
    spy = jest.spyOn(random, 'randomDigits');
  });

  afterAll(() => {
    restore('SNS', 'publish');
    restoreDynamoClientMock();
    jest.unmock('change-agent-services/dbService');
    jest.unmock('crypto-secure-random-digit');
  });

  beforeEach(() => {});

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('dev / returns 111111 code', async () => {
    process.env.envType = 'dev';

    const rspEvent = await createAuth.handler(event);

    expect(rspEvent.response.challengeMetadata).toBe('CODE-111111');
    expect(rspEvent.response.publicChallengeParameters.phone).toBe('+66606606606');
    expect(rspEvent.response.privateChallengeParameters.secretLoginCode).toBe('111111');
  });

  it('dev / if session is set it copies code value from it', async () => {
    process.env.envType = 'dev';

    const rspEvent = await createAuth.handler(eventSession);

    expect(rspEvent.response.challengeMetadata).toBe('CODE-123456');
    expect(rspEvent.response.publicChallengeParameters.phone).toBe('+66606606606');
    expect(rspEvent.response.privateChallengeParameters.secretLoginCode).toBe('123456');
  });

  it('prod / if session is set it copies code value from it and doesnt call sns or codegen', async () => {
    process.env.envType = 'prod';
    const params = {
      Message: `Change Agent: 222222`,
      PhoneNumber: '+66606606606',
    };

    const rspEvent = await createAuth.handler(eventSession);

    expect(rspEvent.response.challengeMetadata).toBe('CODE-123456');
    expect(rspEvent.response.publicChallengeParameters.phone).toBe('+66606606606');
    expect(rspEvent.response.privateChallengeParameters.secretLoginCode).toBe('123456');
    expect(spy).not.toHaveBeenCalled();
    expect(snsSpyFunc.calledWith(params)).toBe(false);
  });

  it('prod / returns 222222 code for mocked random and calls SNS once', async () => {
    process.env.envType = 'prod';
    const params = {
      Message: `Change Agent: 222222`,
      PhoneNumber: '+66606606606',
    };
    const rspEvent = await createAuth.handler(event);
    expect(rspEvent.response.challengeMetadata).toBe('CODE-222222');
    expect(rspEvent.response.publicChallengeParameters.phone).toBe('+66606606606');
    expect(rspEvent.response.privateChallengeParameters.secretLoginCode).toBe('222222');
    expect(spy).toHaveBeenCalled();
    expect(snsSpyFunc.calledWith(params)).toBe(true);
  });

  it('behaves like prod env if process.env.envType not set', async () => {
    const params = {
      Message: `Change Agent: 222222`,
      PhoneNumber: '+66606606606',
    };
    const rspEvent = await createAuth.handler(event);
    expect(rspEvent.response.challengeMetadata).toBe('CODE-222222');
    expect(rspEvent.response.publicChallengeParameters.phone).toBe('+66606606606');
    expect(rspEvent.response.privateChallengeParameters.secretLoginCode).toBe('222222');
    expect(spy).toHaveBeenCalled();
    expect(snsSpyFunc.calledWith(params)).toBe(true);
  });
});
