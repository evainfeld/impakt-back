# Change Agent Backend App

## Ideas

- `AppSync with Amplify`
- Proper Graphql schema: `https://graphqlmastery.com/blog/graphql-best-practices-for-graphql-schema-design`
- Proper DynamoDB data model: `https://www.youtube.com/watch?v=HaEPXoXVf2k&amp=&t=2s` 
- AWS official sample with broken shema and model: `https://github.com/aws-samples/aws-mobile-appsync-chat-starter-angular`
- Official up to date documentation of Amplify: `https://aws-amplify.github.io/docs/cli-toolchain/graphql`
- Multiple Envs with Amplify: `https://read.acloud.guru/multiple-serverless-environments-with-aws-amplify-344759e1be08`. Another approach `https://github.com/ysfmag/amplify-multi-environment` (pre Amplify actualization).
- SNS SMS support regions: `https://docs.aws.amazon.com/sns/latest/dg/sms_supported-countries.html`
- resolvers: `https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference-programming-guide.html`
- passwordless sms auth `https://github.com/mobilequickie/amplify-passwordless-sms-auth/`
- schema testing: `https://codesandbox.io/s/42m2rx71j4` and `https://hackernoon.com/start-testing-your-graphql-schema-queries-and-mutations-b514911b1368`
- another approach `https://medium.com/@FdMstri/testing-a-graphql-server-13512408c2fb`

## Tools

- `graphql-playground` if you like standalone. Alternative: `amplify mock api`.

## Prerequisites

- AWS Account with appropriate permissions to create the related resources
- NodeJS with NPM
- AWS CLI (`pip install awscli --upgrade --user`)
- AWS Amplify CLI (configured for a region where AWS AppSync is available) (`npm install -g @aws-amplify/cli`)
- Keys for multiple accounts configured according to documantation: `https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html#cli-multiple-profiles`
- git-flow tool might be helpful (`npm install -g git-flow`)

## Environments

Prod and Dev envs are deployed automatically using AWS Amplify Console.
As long as, API is "protected" using API KEY remember to add `x-api-key` param to POST header.

### PROD - associated with master branch

``` txt
GraphQL endpoint: https://2fakxaksi5bj3k4bnuw6npujey.appsync-api.eu-west-1.amazonaws.com/graphql
GraphQL API KEY: da2-azzbmxrblbefrf5wgkrqnmktni
```

### DEV - associated with develop branch

``` txt
GraphQL endpoint: https://ricqyhf4ybal3ib5x3bv4ulwbm.appsync-api.eu-west-1.amazonaws.com/graphql
GraphQL API KEY: da2-f4x2njqaxrfnboaftabifwqpai
```

## How to develop

All backend files are in `amplify/`:

- annotated schema: `change-agent/amplify/backend/api/changeAgentApi/schema.graphql`
- generated one: `change-agent/amplify/backend/api/changeAgentApi/build/schema.graphql`

It's possible to customize resolvers and split schema using dirs in `change-agent/amplify/backend/api/changeAgentApi/`

### Way to work within a team

Team-member can work on their own sandbox environment and then merge changes to the dev environment to test some changes, & then to master once testing is finished.

We have two independent environments (master & dev) in the cloud and have corresponding git branches with our amplify backend infrastructure code on Git.
Suppose a team member wants to work on the same Amplify project, add some features to it and then push changes to the dev environment to test some changes. They would perform the following steps:

``` bash
$ git checkout -b mysandbox |or| git-flow feature start mysandbox
$ amplify init
? Do you want to use an existing environment? No
? Enter a name for the environment mysandbox
// Rest of init steps
// Add/update any backend configurations using amplify add/update <category>
$ amplify push
$ git push -u origin mysandbox
```

Next, suppose the team-member wants to move these changes to dev and master environments/branches:

__Note__: this is an example. Merging to develop is recommended to be done throughout PR.

``` bash
$ git checkout develop
$ amplify init
? Do you want to use an existing environment? true
? Choose the environment you would like to use:
❯ dev
 master
$ git merge mysandbox  |or| git-flow feature finish mysandbox
$ amplify push
$ git push -u origin dev
```

After testing that everything works fine in the dev stage, you could now merge dev to the master git branch:

__Note__: this is an example. Merging to master is only possible throughout PR.

``` bash
$ git checkout master
$ amplify init
? Do you want to use an existing environment? true
? Choose the environment you would like to use:
 dev
❯ master
$ git merge develop
$ amplify push
$ git push -u origin master
```

__IMPORTANT__: remember to update Graphql operations using `amplify codegen` after each schema change.

### Switching between envs

``` bash
// delete
amplify env remove apifeature
// create
amplify env add apifeature
// switch
amplify env checkout apifeature
// list
amplify env list
```

## Useful commands

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

AppSync supports only one table per one model design. According to AWS it's far away from optimal one table approach. However revriting generated Cloudformation files seems to be futile, as it breakes some AppSync annotation functionalities like @Connection or Unions.
