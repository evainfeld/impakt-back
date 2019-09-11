exports.handler = async event => {
  //eslint-disable-line
  console.log(JSON.stringify(event, null, 2));

  await Promise.all(
    event.Records.map(async record => {
      console.log(record.eventID);
      console.log(record.eventName);
      console.log('DynamoDB Record: %j', record.dynamodb);
    }),
  );
  return 'Successfully processed DB events'; // SUCCESS with message
};
