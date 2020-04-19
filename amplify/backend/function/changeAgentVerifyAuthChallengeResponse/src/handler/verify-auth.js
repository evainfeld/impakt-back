const Log = require('@dazn/lambda-powertools-logger');

exports.handler = async event => {
  Log.debug(`Starting Verif Auth for number: ${event.request.userAttributes.phone_number}`);
  const eventResponse = event;
  const expectedAnswer = event.request.privateChallengeParameters.secretLoginCode;
  if (event.request.challengeAnswer === expectedAnswer) {
    eventResponse.response.answerCorrect = true;
  } else {
    eventResponse.response.answerCorrect = false;
  }
  Log.debug(
    `dd to group successfully finished, result is: ${eventResponse.response.answerCorrect}`,
  );
  return eventResponse;
};
