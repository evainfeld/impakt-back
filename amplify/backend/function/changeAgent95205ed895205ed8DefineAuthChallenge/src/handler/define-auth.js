exports.handler = async event => {
  const eventResponse = event;
  if (
    event.request.session &&
    event.request.session.length >= 3 &&
    event.request.session.slice(-1)[0].challengeResult === false
  ) {
    // The user provided a wrong answer 3 times; fail auth
    eventResponse.response.issueTokens = false;
    eventResponse.response.failAuthentication = true;
  } else if (
    event.request.session &&
    event.request.session.length &&
    event.request.session.slice(-1)[0].challengeResult === true
  ) {
    // The user provided the right answer; succeed auth
    eventResponse.response.issueTokens = true;
    eventResponse.response.failAuthentication = false;
  } else {
    // The user did not provide a correct answer yet; present challenge
    eventResponse.response.issueTokens = false;
    eventResponse.response.failAuthentication = false;
    eventResponse.response.challengeName = 'CUSTOM_CHALLENGE';
  }
  return eventResponse;
};
