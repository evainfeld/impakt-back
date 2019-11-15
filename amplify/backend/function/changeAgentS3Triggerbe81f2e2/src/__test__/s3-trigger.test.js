/* eslint-disable import/no-extraneous-dependencies */
const { mock, restore } = require('aws-sdk-mock');
const sinon = require('sinon');
const s3Trigger = require('../handler/s3-trigger.js');
const event = require('../handler/event.json');
const file = require('./file.json');

describe('s3-trigger.test.js', () => {
  /*
    default spies
  */
  const defaultBucketparams = {
    Bucket: 'bucket',
    Key: 'key',
  };
  event.Records[0].s3.bucket.name = defaultBucketparams.Bucket;
  event.Records[0].s3.object.key = defaultBucketparams.Key;

  const defaultErrorMessage = 'Some AWS Error';
  const throwsErrorSpy = sinon.spy((params, callback) => {
    callback(new Error(defaultErrorMessage), undefined);
  });
  const successSpy = sinon.spy((params, callback) => {
    callback(undefined, {});
  });
  const successFileSpy = sinon.spy((params, callback) => {
    callback(undefined, { Body: Buffer.from(JSON.stringify(file)) });
  });

  const successDeleteFileSpy = sinon.spy((params, callback) => {
    callback(undefined, {});
  });

  beforeAll(() => {});

  afterAll(() => {});

  beforeEach(() => {
    mock('DynamoDB.DocumentClient', 'put', successSpy);
    mock('S3', 'getObject', successFileSpy);
    mock('S3', 'deleteObject', successDeleteFileSpy);
  });

  afterEach(() => {
    successSpy.resetHistory();
    throwsErrorSpy.resetHistory();
    successFileSpy.resetHistory();
    successDeleteFileSpy.resetHistory();
    restore('S3');
    restore('DynamoDB.DocumentClient');
  });

  describe('global tests', () => {
    it('it has env variables set', async () => {
      expect(process.env.API_CHANGEAGENTAPI_GRAPHQLAPIIDOUTPUT).toBeDefined();
      expect(process.env.ENV).toBeDefined();
    });
  });

  describe('positive path', () => {
    it('it works fine if all AWS services are ok', async () => {
      const rspEvent = await s3Trigger.handler(event);

      expect(rspEvent).toBe('Successfully processed S3 events');
      expect(successFileSpy.calledWith(defaultBucketparams)).toBe(true);
      expect(successFileSpy.calledOnce).toBe(true);
      expect(successDeleteFileSpy.calledOnce).toBe(true);
      expect(successSpy.callCount).toBe(file.docs.length);

      const lastIndex = file.docs.length - 1;
      const lastCall = successSpy.getCall(lastIndex);
      const param = {
        Item: {
          ...file.docs[lastIndex],
        },
        TableName: `${file.tableName}-${process.env.API_CHANGEAGENTAPI_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`,
      };
      expect(lastCall.calledWith(param)).toBe(true);
    });
  });

  describe('negative path', () => {
    it('it throws error if putDocument fails (delete is not called) ', async () => {
      restore('DynamoDB.DocumentClient');
      mock('DynamoDB.DocumentClient', 'put', throwsErrorSpy);

      try {
        await s3Trigger.handler(event);
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
      } catch (e) {
        expect(e.message).toBe(defaultErrorMessage);
      }

      expect(successFileSpy.calledWith(defaultBucketparams)).toBe(true);
      expect(successFileSpy.calledOnce).toBe(true);
      expect(successDeleteFileSpy.called).toBe(false);
      expect(throwsErrorSpy.callCount).toBe(file.docs.length);
    });

    it('it throws error if getObject fails (execution ends immidiatelly) ', async () => {
      restore('S3', 'getObject');
      mock('S3', 'getObject', throwsErrorSpy);

      try {
        await s3Trigger.handler(event);
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
      } catch (e) {
        expect(e.message).toBe(defaultErrorMessage);
      }

      expect(throwsErrorSpy.calledWith(defaultBucketparams)).toBe(true);
      expect(throwsErrorSpy.calledOnce).toBe(true);

      expect(successSpy.callCount).toBe(0);
      expect(successDeleteFileSpy.callCount).toBe(0);
    });
  });
});
