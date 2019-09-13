module.exports = {
  '**/*.graphql?(x)': () =>
    'amplify api gql-compile; npx graphql-schema-linter amplify/backend/api/changeAgentApi/build/schema.graphql __tools__/appsync/aws_appsync.graphql',
  '**/*.js?(x)': filenames => filenames.map(filename => `npx eslint '${filename}'`),
};
