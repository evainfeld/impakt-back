/* eslint-disable import/no-extraneous-dependencies */
const { mock, restore } = require('aws-sdk-mock');

const dbService = jest.genMockFromModule('../dbService.js');

dbService.queryDocument = jest.fn(items => {
  mock('DynamoDB.DocumentClient', 'query', (params, callback) => {
    callback(false, {
      Items: [items],
    });
  });
});

dbService.restoreDynamoClientMock = () => restore('DynamoDB.DocumentClient');

module.exports = dbService;
