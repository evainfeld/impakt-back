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
