"use strict";

exports.handler = async (event) => {
    event.response.autoConfirmUser = true;
    event.response.autoVerifyPhone = true;
    console.log("ENVIRONMENT VARIABLES\n" + JSON.stringify(process.env, null, 2))
    console.log("EVENT\n" + JSON.stringify(event, null, 2))
    return event;
};

/* exports.handler = (event, context, callback) => {
    //
    event.response.autoConfirmUser = true;
    event.response.autoVerifyPhone = true;
    console.log("ENVIRONMENT VARIABLES\n" + JSON.stringify(process.env, null, 2))
    console.log("EVENT\n" + JSON.stringify(event, null, 2))
    // Customize messages for other user pools

    // Return to Amazon Cognito
    callback(null, event);
};*/