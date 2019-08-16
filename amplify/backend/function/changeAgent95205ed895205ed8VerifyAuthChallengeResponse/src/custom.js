"use strict";

exports.handler = async (event) => {
    const expectedAnswer = event.request.privateChallengeParameters.secretLoginCode;
    if (event.request.challengeAnswer === expectedAnswer) {
        event.response.answerCorrect = true;
    }
    else {
        event.response.answerCorrect = false;
    }
    console.log("ENVIRONMENT VARIABLES\n" + JSON.stringify(process.env, null, 2))
    console.log("EVENT\n" + JSON.stringify(event, null, 2))
    return event;
};
