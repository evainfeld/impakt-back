# Change Agent Backend App

## Ideas

- `AppSync with Amplify`
- Proper Graphql schema: `https://graphqlmastery.com/blog/graphql-best-practices-for-graphql-schema-design`
- Proper DynamoDB data model: `https://www.youtube.com/watch?v=HaEPXoXVf2k&amp=&t=2s`
- AWS official sample with broken shema and model: `https://github.com/aws-samples/aws-mobile-appsync-chat-starter-angular`
- Multiple Envs with Amplify: `https://read.acloud.guru/multiple-serverless-environments-with-aws-amplify-344759e1be08`. Another approach `https://github.com/ysfmag/amplify-multi-environment` (pre Amplify actualization).
- SNS SMS support regions: `https://docs.aws.amazon.com/sns/latest/dg/sms_supported-countries.html`
- resolvers: `https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference-programming-guide.html`
- passwordless sms auth `https://github.com/mobilequickie/amplify-passwordless-sms-auth/`

## Tools

- `graphql-playground`

## Prerequisites

- AWS Account with appropriate permissions to create the related resources
- NodeJS with NPM
- AWS CLI (`pip install awscli --upgrade --user`)
- AWS Amplify CLI (configured for a region where AWS AppSync is available) (`npm install -g @aws-amplify/cli`)


## Notes

Backend stuff: schemas, resolvers and script for preparing CloudFormation config file are in `backend/`

You may try following for some basic tests using endpoint supporting only Location operations:

- `https://cgf5qm2pobdiziunl75evoib7e.appsync-api.eu-central-1.amazonaws.com/graphql`
- `"x-api-key":"da2-vgqko7cilvgf3cuybvcwi6wr3e"`
- api id: `nuoflxhdcbfvneh6xaazsh2vym`

## Create stack

From root dir:

- `amplify init`
- `amplify auth add`
- `amplify hosting add` (_NOTE_: DEV)
- `amplify publish`
- `grep aws_user_pools_id src/aws-exports.js`
- `./backend/template.sh`
- `aws cloudformation create-stack --stack-name changeAgent --template-body file://backend/deploy-cfn.yml --parameters ParameterKey=userPoolId,ParameterValue=<aws_user_pools_id> --capabilities CAPABILITY_IAM --region <region> --profile <profile_name>` ex. `aws cloudformation update-stack --stack-name changeAgent --template-body file://backend/deploy-cfn.yml --parameters ParameterKey=userPoolId,ParameterValue=eu-central-1_am477BG4a --capabilities CAPABILITY_IAM --region eu-central-1  --profile change-agent`
- `aws cloudformation describe-stacks --stack-name changeAgent --query Stacks[0].Outputs --region eu-central-1 --profile change-agent`
- `aws cloudformation delete-stack --stack-name changeAgent --region eu-central-1 --profile change-agent`

_NOTE_: `https://github.com/aws-samples/aws-cdk-examples/tree/master/typescript/appsync-graphql-dynamodb` as better approach. Curretly things stored in `schema.gpl` and `resolvers/` are copied into deloyment descriptor `deploy-cfn.yml` using `template.sh` script.
_NOTE_: Don't know yet how to deploy AppSync supporting only api key

## DynamoDB design

There is one table called `changeAgentTable` that is used to store all documents comming from FE, throuout API. Currently key design is as follows:

### primary key

- _partition key_: `orgRangeKey` (format: <org_name>::<first_layer_region>::<second_layer_region>). As application design requires that chat and other resources should be as local as possible, we come to idea that traffic inside region should also be on resonable level. Otherwise region should be devidided into smaller ones to make peaple less overhelmed by data comming.
- _sort key_: `id` (format <org_name>-<doc_type>-<some_data> _NOTE_ some_data format may warry between doc_types, as some of them requires sorting capabilities and others just uniqueness.

### global secondary index

- _org-index_: _partition key_: `org`, some frequently used queries requires just obtaining all specified documents for selected organization. Using secondary index and query in general gives better performance than `scan` with filter throughout whole table.

## sample for GraphQL Playground

### mutation

```grqphql
mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
    id
    range
    org
  }
}
```

__mutation variables__:

```json
{
"input":{
 "range": "PL::WAW",
 "org": "MyOrg"
 }
}
```

__header variables__:

```json
{
  "x-api-key":"da2-vgqko7cilvgf3cuybvcwi6wr3e"
}
```

### query

```grqphql
query AllLocations {
  allLocations(org: "MyOrg3") {
    location {
      id
      range
      org
    }
    nextToken
  }
}
```

_NOTE_ there're issues with permisions and query fails.


