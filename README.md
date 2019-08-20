# Change Agent Backend App

## Very important about Amplify CLI

Never, ever, in any circumstances call `amplify delete` :)

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
- custom auth `https://medium.com/cloudsail-io/aws-cognito-use-existing-users-database-with-custom-authentication-flow-920142884c08`
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
GraphQL endpoint: https://lodfv533wzeaziok3kvulsfre4.appsync-api.eu-central-1.amazonaws.com/graphql
GraphQL API KEY: da2-v5pv4ws4wrhvtjvvyno4dwchkm
```

### DEV - associated with develop branch

``` txt
GraphQL endpoint: https://ad7kfb7gnrcznitl3r545twxqe.appsync-api.eu-central-1.amazonaws.com/graphql
UserPoolId:
UserPoolClientID:
```

__NOTE__ Dev environment is secured using Cognito User Pools without Identity Pools. This is temporary solution, as we need functionalities of S3 bucket access for serving some files dropped by users.

__Obtaining JWT Token__ To call any Graphql you need to provide valid JWT Access Token in your request Header. It can be received using `amplify-js` lib. However for some dev tasks you may have a need to call API manually using tools like `GraphQL Playground`. To do so you need to get somehow this token. Here comes dev app from `devWebClient`. Running procedure:

- go to `devWebClient`
- edit `src/environments/environment.ts` with UserPoolId and UserPoolClientID
- call `npm install`
- call `npm run start`
- open `http://localhost:4200`
- follow instructions
- after successful login you'll land on `http://localhost:4200/private` page
- copy `access-token`
- fill http Header with following data (bare in mind that you shouldn't provide any prefix like `Bearer or JWT` before token):

```json
{
  "Content-Type": "application/json",
  "Authorization": "copied access-token"
}
```

- If you receive `Token has expired.` error just click `Refresh Token` button in app's private page.
- SMSs are cheap but still not free of charge. Try not to log out or stop app frequently. As long as it stores session you can use your access-tokens, without need of receiving additional login SMSs.

## Components

- AppSync - Graphql API service
- DynamoDB
- Lambda functions as Cognito Triggers
- Amplify

## How to develop

All backend files are in `amplify/`:

- annotated schema: `change-agent/amplify/backend/api/changeAgentApi/schema.graphql`
- generated one with `amplify api gql-compile` or `amplify push`: `change-agent/amplify/backend/api/changeAgentApi/build/schema.graphql`

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

### Customizing Cognito User Pools using Lambda and Amplify

First of all call `amplify auth add` or `amplify auth update`. When prompted with `Do you want to configure Lambda Triggers for Cognito? (Y/n)` select `y`. Then you'll be able to select different steps of authentication flow for customization. Later for each selected step, amplify'll ask for template. There're different ones, however we'll concentrate on `Create your own module` and some hard to spot issues with it.

First off all, we don't like `callback` and prefer `async/await`. But what is generated inside your `backend/function/<function_name>` dir:

- `src/custom.js`
- `src/event.json`
- `src/index.js`
- `src/package.json`
- sth like `changeAgent95205ed895205ed8PreSignup-cloudformation-template.json`
- `function-parameters.json`
- `parameters.json`

What is the main issue? `index.js` is there only to call multiple handlers from modules definied twice in parameters files. It might make sens, but not for Cognito triggers which are really shallow "functions". It doesn't make sens to use this kind of approch in really standard flows. It's really simple to create response just in "custom" file. Another thing is that Cognito doesn't expect multiple responses from trigger. Best way is to get completely rid of this index.js especially that it uses `callback` by default and make it complicated to use async/await in your custom code and adds no additional functionality. After removing file point selected handler by using `Handler` field in `*-cloudformation-template.json`.

Remeber to change Runtime in `*-cloudformation-template.json` to version 10 ex. `"Runtime": "nodejs10.x",`. By defualt it's 8 and async/await triggers returns wrong anwsers eventhough nodejs supports this functionality in this version.

If there is a need to call another AWS service, it's crutial to add Lambda function aprioprate privilidge in `*-cloudformation-template.json` file. Like:

``` json
{
"PolicyDocument": {
    "Effect": "Allow",
    "Action": [
        "mobiletargeting:*~",
        "sns:*"
        ],
    "Resource": "*"
    }
}
```

If you wan't to edit name of `custom.js` file remember to edit `package.json` and `params` files. If you previosly removed `index.js` remember to update `"Handler": "create-auth.handler"` in `*-cloudformation-template.json`.

Env variables can be also passed using Amplify env defining file `team-provider-info.json`

__NOTE__: `pre-signup` trigger is the best place to add some blacklist for users.

What is important, calling `amplify auth update` may override some of your configuration or add useless files to your previously written triggers. Look carefully to you current GIT status. To revert changes to current cloud configuration call `amplify env pull --restore`

### Sample Angular app for obtaining API keys

When using custom Cognito auth procedure it's important to take a look on `UserPoolClient`. By default Amplify creates two of them: `UserPoolClient`, `UserPoolClientWeb` in `change-agent/amplify/backend/auth/**/*-cloudformation-template.yml`. First of them needs to stay as generated bcouse it's required for connecting to S3 buckets used by Amplify. However second is completely editable including name. What is important is to add two lines into CloudFormation:

``` yaml
  UserPoolClientWeb:
    Properties:
      #otherwise Client has it's own secret key that overrides those generated in custom flow
      GenerateSecret: false
      #we're supporting only custom flow using Lambda triggers
      ExplicitAuthFlows:
        - CUSTOM_AUTH_FLOW_ONLY
```

Sample app for obtaining tokens from dev envs is available in `devWebClient/angular`. It has separate readme available there.

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
