/* eslint-disable import/no-extraneous-dependencies */
jest.mock('crypto-secure-random-digit');

const random = require('crypto-secure-random-digit');
const { mock, restore } = require('aws-sdk-mock');
const sinon = require('sinon');
const createAuth = require('../handler/create-auth.js');
const event = require('../handler/event.json');
const eventSession = require('../handler/eventSession.json');

describe('create-auth.test.js', () => {
  /*
    default spies
  */
  const defaultErrorMessage = 'Some AWS Error';
  const defaultAdminPass = 'Hidden Pass';
  const snsSpyFunc = sinon.spy((params, callback) => {
    callback(undefined, params);
  });
  const ssmSpyFunc = sinon.spy((params, callback) => {
    callback(undefined, { Parameters: [{ Value: defaultAdminPass }] });
  });
  const throwsErrorSpy = sinon.spy((params, callback) => {
    callback(new Error(defaultErrorMessage), undefined);
  });
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
    mock('SSM', 'getParameters', ssmSpyFunc);
    mock('SNS', 'publish', snsSpyFunc);
    mock('DynamoDB.DocumentClient', 'query', queryReturnsValueSpy({}));
    random.randomDigits = jest.fn().mockImplementation(digits => {
      const array = [];
      for (let i = 0; i < digits; i += 1) {
        array.push(2);
      }
      return array;
    });
  });

  afterEach(() => {
    snsSpyFunc.resetHistory();
    ssmSpyFunc.resetHistory();
    throwsErrorSpy.resetHistory();
    random.randomDigits.mockReset();
    restore('SSM', 'getParameters');
    restore('SNS', 'publish');
    restore('DynamoDB.DocumentClient');
  });

  describe('positive path', () => {
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
      expect(random.randomDigits).not.toHaveBeenCalled();
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
      expect(random.randomDigits).toHaveBeenCalled();
      expect(snsSpyFunc.calledWith(params)).toBe(true);
    });

    it('prod / throws error if fail to call ', async () => {
      process.env.envType = 'prod';
      const params = {
        Message: `Change Agent: 222222`,
        PhoneNumber: '+66606606606',
      };
      const rspEvent = await createAuth.handler(event);
      expect(rspEvent.response.challengeMetadata).toBe('CODE-222222');
      expect(rspEvent.response.publicChallengeParameters.phone).toBe('+66606606606');
      expect(rspEvent.response.privateChallengeParameters.secretLoginCode).toBe('222222');
      expect(random.randomDigits).toHaveBeenCalled();
      expect(snsSpyFunc.calledWith(params)).toBe(true);
    });

    it(`prod / returns ${defaultAdminPass} code for ADMIN user and doesn't call SNS`, async () => {
      restore('DynamoDB.DocumentClient');
      mock(
        'DynamoDB.DocumentClient',
        'query',
        queryReturnsValueSpy({ Items: [{ type: 'ADMIN' }] }),
      );
      process.env.envType = 'prod';
      const rspEvent = await createAuth.handler(event);
      expect(rspEvent.response.challengeMetadata).toBe(`CODE-${defaultAdminPass}`);
      expect(rspEvent.response.publicChallengeParameters.phone).toBe('+66606606606');
      expect(rspEvent.response.privateChallengeParameters.secretLoginCode).toBe(
        `${defaultAdminPass}`,
      );
      expect(random.randomDigits).not.toHaveBeenCalled();
      expect(snsSpyFunc.notCalled).toBe(true);
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
      expect(random.randomDigits).toHaveBeenCalled();
      expect(snsSpyFunc.calledWith(params)).toBe(true);
    });
  });
  describe('negative path', () => {
    it(`prod / returns 222222 code for mocked random code for ADMIN user and call SNS`, async () => {
      restore('DynamoDB.DocumentClient');
      mock(
        'DynamoDB.DocumentClient',
        'query',
        queryReturnsValueSpy({ Items: [{ type: 'ADMIN' }] }),
      );
      restore('SSM', 'getParameters');
      mock('SSM', 'getParameters', throwsErrorSpy);
      process.env.envType = 'prod';
      const rspEvent = await createAuth.handler(event);
      expect(rspEvent.response.challengeMetadata).toBe(`CODE-222222`);
      expect(rspEvent.response.publicChallengeParameters.phone).toBe('+66606606606');
      expect(rspEvent.response.privateChallengeParameters.secretLoginCode).toBe(`222222`);
      expect(random.randomDigits).toHaveBeenCalled();
      expect(snsSpyFunc.notCalled).toBe(false);
    });

    it('it should go as for non Admin user if fails to query DB', async () => {
      restore('DynamoDB.DocumentClient');
      mock('DynamoDB.DocumentClient', 'query', throwsErrorSpy);
      process.env.envType = 'prod';
      const params = {
        Message: `Change Agent: 222222`,
        PhoneNumber: '+66606606606',
      };

      const rspEvent = await createAuth.handler(eventSession);

      expect(rspEvent.response.challengeMetadata).toBe('CODE-123456');
      expect(rspEvent.response.publicChallengeParameters.phone).toBe('+66606606606');
      expect(rspEvent.response.privateChallengeParameters.secretLoginCode).toBe('123456');
      expect(random.randomDigits).not.toHaveBeenCalled();
      expect(snsSpyFunc.calledWith(params)).toBe(false);
    });

    it("it throws an error if fails to send message (note. it's visible for end user)", async () => {
      restore('SNS', 'publish');
      mock('SNS', 'publish', throwsErrorSpy);
      process.env.envType = 'prod';
      const params = {
        Message: `Change Agent: 222222`,
        PhoneNumber: '+66606606606',
      };
      try {
        await createAuth.handler(event);
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
      } catch (e) {
        expect(e.message).toBe(`Unable to send message. Please contact administrator or try later`);
      }
      expect(random.randomDigits).toHaveBeenCalled();
      expect(throwsErrorSpy.calledWith(params)).toBe(true);
    });
  });
});
