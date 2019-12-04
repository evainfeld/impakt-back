const verifyAuth = require('../handler/verify-auth.js');
const eventSuccess = require('../handler/eventSuccess.json');
const eventFailed = require('../handler/eventFailed.json');

describe('verify-auth.test.js', () => {
  it('it verifies input and returns true for correct anwser', async () => {
    const rspEvent = await verifyAuth.handler(eventSuccess);

    expect(rspEvent.response.answerCorrect).toBe(true);
  });

  it('it verifies input and returns false for wrong anwser', async () => {
    const rspEvent = await verifyAuth.handler(eventFailed);

    expect(rspEvent.response.answerCorrect).toBe(false);
  });
});
