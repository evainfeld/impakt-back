exports.handler = async event => {
  const eventResponse = event;
  const expectedAnswer = event.request.privateChallengeParameters.secretLoginCode;
  if (event.request.challengeAnswer === expectedAnswer) {
    eventResponse.response.answerCorrect = true;
  } else {
    eventResponse.response.answerCorrect = false;
  }
  return event;
};
