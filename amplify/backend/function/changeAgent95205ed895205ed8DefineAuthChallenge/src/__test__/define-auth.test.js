const defineAuth = require('../handler/define-auth.js');
const event = require('../handler/event.json');
const eventSuccess = require('../handler/eventSuccess.json');
const eventRepeat = require('../handler/eventRepeat.json');
const eventFailed = require('../handler/eventFailed.json');

describe('define-auth.test.js', () => {
  it('for new request it creates new challange', async () => {
    const rspEvent = await defineAuth.handler(event);

    expect(rspEvent.response.challengeName).toBe('CUSTOM_CHALLENGE');
    expect(rspEvent.response.issueTokens).toBe(false);
    expect(rspEvent.response.failAuthentication).toBe(false);
  });

  it('after wrong anwser it ask for repeat', async () => {
    const rspEvent = await defineAuth.handler(eventRepeat);

    expect(rspEvent.response.challengeName).toBe('CUSTOM_CHALLENGE');
    expect(rspEvent.response.issueTokens).toBe(false);
    expect(rspEvent.response.failAuthentication).toBe(false);
  });

  it('after successful auth it issues token', async () => {
    const rspEvent = await defineAuth.handler(eventSuccess);

    expect(rspEvent.response.issueTokens).toBe(true);
    expect(rspEvent.response.failAuthentication).toBe(false);
  });

  it('after >=3 wrong anwsers it fails auth', async () => {
    const rspEvent = await defineAuth.handler(eventFailed);

    expect(rspEvent.response.issueTokens).toBe(false);
    expect(rspEvent.response.failAuthentication).toBe(true);
  });
});
