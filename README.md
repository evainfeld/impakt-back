# Change Agent Backend App

## Ideas

- `AppSync with Amplify`
- Proper Graphql schema: `https://graphqlmastery.com/blog/graphql-best-practices-for-graphql-schema-design`
- Proper DynamoDB data model: `https://www.youtube.com/watch?v=HaEPXoXVf2k&amp=&t=2s`
- AWS official sample with broken shema and model: `https://github.com/aws-samples/aws-mobile-appsync-chat-starter-angular`

## Tools

- `graphql-playground`

## Prerequisites

- AWS Account with appropriate permissions to create the related resources
- NodeJS with NPM
- AWS CLI (`pip install awscli --upgrade --user`)
- AWS Amplify CLI (configured for a region where AWS AppSync is available) (`npm install -g @aws-amplify/cli`)
 -Angular CLI (`npm install -g @angular/cli`)

## Notes

Some initial stuff is currently in repo, mostly Graphql schema for AWS AppSync in `backend/`

You may try following for some basic tests of connection without DB:

- `https://gk2ioiic5jc7dbs7n6dhwjobfe.appsync-api.eu-central-1.amazonaws.com/graphql`
- `"x-api-key":"da2-smwspt2minfg5pc22trceypx6e"`
