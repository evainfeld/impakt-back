exports.handler = async event => {
  const eventResponse = event;
  eventResponse.response.autoConfirmUser = true;
  eventResponse.response.autoVerifyPhone = true;
  return eventResponse;
};
