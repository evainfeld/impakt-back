jest.mock('crypto-secure-random-digit');

const random = require('crypto-secure-random-digit');
// eslint-disable-next-line import/no-extraneous-dependencies
const { mock, restore } = require('aws-sdk-mock');
const createAuth = require('../handler/create-auth.js');
const event = require('../handler/event.json');

describe('create-auth.test.js', () => {
  afterAll(() => {
    restore('SNS', 'publish');
    jest.unmock('crypto-secure-random-digit');
  });

  beforeAll(() => {
    mock('SNS', 'publish', (params, callback) => {
      callback(undefined, params);
    });
    random.randomDigits = jest.fn().mockImplementation(digits => {
      const array = [];
      for (let i = 0; i < digits; i += 1) {
        array.push(2);
      }
      return array;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  it('returns 111111 code for dev env', async () => {
    process.env.envType = 'dev';

    const rspEvent = await createAuth.handler(event);

    expect(rspEvent.response.challengeMetadata).toBe('CODE-111111');
  });

  it('returns 222222 code for prod env', async () => {
    process.env.envType = 'prod';

    const rspEvent = await createAuth.handler(event);
    expect(rspEvent.response.challengeMetadata).toBe('CODE-222222');
  });
});
