# How to develop

All backend files are in `amplify/`:

- annotated schema: `change-agent/amplify/backend/api/changeAgentApi/schema.graphql`
- generated one with `amplify api gql-compile` or `amplify push`: `change-agent/amplify/backend/api/changeAgentApi/build/schema.graphql`

It's possible to customize resolvers and split schema using dirs in `change-agent/amplify/backend/api/changeAgentApi/`

## Way to work within a team

Team-member can work on their own sandbox environment and then merge changes to the dev environment to test some changes, & then to master once testing is finished.

We have two independent environments (master & dev) in the cloud and have corresponding git branches with our amplify backend infrastructure code on Git.
Suppose a team member wants to work on the same Amplify project, add some features to it and then push changes to the dev environment to test some changes. They would perform the following steps:

```bash
 git checkout -b mysandbox |or| git-flow feature start mysandbox
 amplify init
? Do you want to use an existing environment? No
? Enter a name for the environment mysandbox
// Rest of init steps
// Add/update any backend configurations using amplify add/update <category>
 amplify push
 git push -u origin mysandbox
```

Next, suppose the team-member wants to move these changes to dev and master environments/branches:

**Note**: this is an example. Merging to develop is recommended to be done throughout PR.

```bash
 git checkout develop
 amplify init
? Do you want to use an existing environment? true
? Choose the environment you would like to use:
❯ dev
 master
 git merge mysandbox  |or| git-flow feature finish mysandbox
 amplify push
 git push -u origin dev
```

After testing that everything works fine in the dev stage, you could now merge dev to the master git branch:

**Note**: this is an example. Merging to master is only possible throughout PR.

```bash
 git checkout master
 amplify init
? Do you want to use an existing environment? true
? Choose the environment you would like to use:
 dev
❯ master
 git merge develop
 amplify push
 git push -u origin master
```

**IMPORTANT**: remember to update Graphql operations using `amplify codegen` after each schema change.

## Switching between envs

```bash
// delete
amplify env remove apifeature
// create
amplify env add apifeature
// switch
amplify env checkout apifeature
// list
amplify env list
```

## Customizing Cognito User Pools using Lambda and Amplify

First of all call `amplify auth add` or `amplify auth update`. When prompted with `Do you want to configure Lambda Triggers for Cognito? (Y/n)` select `y`. Then you'll be able to select different steps of authentication flow for customization. Later for each selected step, amplify'll ask for template. There're different ones, however we'll concentrate on `Create your own module` and some hard to spot issues with it.

First off all, we don't like `callback` and prefer `async/await`. But what is generated inside your `backend/function/<function_name>` dir:

- `src/custom.js`
- `src/event.json`
- `src/index.js`
- `src/package.json`
- sth like `changeAgentPreSignup-cloudformation-template.json`
- `function-parameters.json`
- `parameters.json`

What is the main issue? `index.js` is there only to call multiple handlers from modules definied twice in parameters files. It might make sens, but not for Cognito triggers which are really shallow "functions". It doesn't make sens to use this kind of approch in really standard flows. It's really simple to create response just in "custom" file. Another thing is that Cognito doesn't expect multiple responses from trigger. Best way is to get completely rid of this index.js especially that it uses `callback` by default and make it complicated to use async/await in your custom code and adds no additional functionality. After removing file point selected handler by using `Handler` field in `*-cloudformation-template.json`.

Remeber to change Runtime in `*-cloudformation-template.json` to version 10 ex. `"Runtime": "nodejs10.x",`. By defualt it's 8 and async/await triggers returns wrong anwsers eventhough nodejs supports this functionality in this version.

If there is a need to call another AWS service, it's crutial to add Lambda function aprioprate privilidge in `*-cloudformation-template.json` file. Like:

```json
{
  "PolicyDocument": {
    "Effect": "Allow",
    "Action": ["mobiletargeting:*~", "sns:*"],
    "Resource": "*"
  }
}
```

If you wan't to edit name of `custom.js` file remember to edit `package.json` and `params` files. If you previosly removed `index.js` remember to update `"Handler": "create-auth.handler"` in `*-cloudformation-template.json`.

Env variables can be also passed using Amplify env defining file `team-provider-info.json`

**NOTE**: `pre-signup` trigger is the best place to add some blacklist for users.

What is important, calling `amplify auth update` may override some of your configuration or add useless files to your previously written triggers. Look carefully to you current GIT status. To revert changes to current cloud configuration call `amplify env pull --restore`

## Sample Angular app for obtaining API keys

When using custom Cognito auth procedure it's important to take a look on `UserPoolClient`. By default Amplify creates two of them: `UserPoolClient`, `UserPoolClientWeb` in `change-agent/amplify/backend/auth/**/*-cloudformation-template.yml`. First of them needs to stay as generated bcouse it's required for connecting to S3 buckets used by Amplify. However second is completely editable including name. What is important is to add two lines into CloudFormation:

```yaml
UserPoolClientWeb:
  Properties:
    #otherwise Client has it's own secret key that overrides those generated in custom flow
    GenerateSecret: false
    #we're supporting only custom flow using Lambda triggers
    ExplicitAuthFlows:
      - CUSTOM_AUTH_FLOW_ONLY
```

Sample app for obtaining tokens from dev envs is available in `devWebClient/angular`. It has separate readme available there.
