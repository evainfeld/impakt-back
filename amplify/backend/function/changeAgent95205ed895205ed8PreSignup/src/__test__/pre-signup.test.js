const preSignup = require('../handler/pre-signup.js');
const event = require('../handler/event.json');

describe('pre-signup.test.js', () => {
  it('it accepts phone number provided by user', async () => {
    const rspEvent = await preSignup.handler(event);

    expect(rspEvent.response.autoConfirmUser).toBe(true);
    expect(rspEvent.response.autoVerifyPhone).toBe(true);
  });
});
