# Amplify bugs and unexpected behaviours

Amplify CLI is constatly improving and was started as a product in Beta phase. That means bugs, obviosly they are continuously fixed, so some of following issues may no longer be a problem.

**1**:

Auto generated trigger function name with env name fails to fit into LambdaExecutionRole name limit of 64.

changeAgentVerifyAuthChallengeResponse-production

| auto gne stack name | trigger name |-| env |

```console
CREATE_FAILED      LambdaExecutionRole                                                                                  AWS::IAM::Role             Tue Aug 27 2019 12:30:39 GMT+0200 (Central European Summer Time) 1 validation error detected: Value 'changeAgentVerifyAuthChallengeResponse-production' at 'roleName' failed to satisfy constraint: Member must have length less than or equal to 64 (Service: AmazonIdentityManagement; Status Code: 400; Error Code: ValidationError; Request ID: b68e1005-c8b5-11e9-802b-b9c99487764f)
```

**2**:

GSI Key name has to be uppercase allways if using composite keys as SK:

```graphql
@key(name: "Org", fields: ["org", "category", "title"], queryField: "listEventByOrg" )
```

Otherwise schema is wrong.

**3**:

Some model types are always created even if not used.

```console
input ModelIntFilterInput
input ModelFloatFilterInput
```

**4**:

Functions: package.json has to be in src:

`ENOENT: no such file or directory, stat 'amplify/backend/function/changeAgentCreateAuthChallenge/src/package.json'`

basically whole lambda filestructure is hardcoded in `amplify-cli/packages/amplify-category-function/provider-utils/awscloudformation/index.js`:

```js
      {
        dir: pluginDir,
        template: triggerIndexPath,
        target: `{targetDir}/{category}/{options.resourceName}/src/index.js`,
        paramsFile: `{targetDir}/{category}/{options.resourceName}/parameters.json`,
      },
      {
        dir: pluginDir,
        template: triggerEventPath,
        target: `{targetDir}/{category}/{options.resourceName}/src/event.json`,
      },
      {
        dir: pluginDir,
        template: triggerPackagePath,
        target: `{targetDir}/{category}/{options.resourceName}/src/package.json`,
      }
```

can't have structure like this in repo:

```txt
changeAgentCreateAuthChallenge
          - lambda
            - src
            - __test__
            - package.json
          - config_files
```

however this in repo:

```txt
changeAgentCreateAuthChallenge
          - src
            - handler
            - __test__
            - package.json
          - config_files
```

transforms into this on cloud:

```txt
changeAgentCreateAuthChallenge
            - handler
            - __test__
            - package.json
```

**5**:

Carefully look into #current-cloud-backend. Sometimes during push copy of `auth` is generated, but not deployed.
As a result `amplify env pull --restore` may create some duplicated inputs in your source tree.

**6**:

`amplify update auth` -> walkthough. Even if you skipp update of Lambda triggers some js files might be generated based on json config files.
Amplify strongly urge user to use it's naming convension. Please note that if you made some custom changes in `amplify/backend/auth/*/*-cloudformation-template.yml`
they'll be overwritten.

**7**:

If you put following into your aws graphql:

```graphql
#getUser is called "me" and works withouth params. Just using context
type User
  @model(
    queries: { get: null, list: null }
    mutations: { create: "createUser", update: "updateUser", delete: null }
  )
  @key(fields: ["cognitoId"])
  @key(name: "org", fields: ["org", "username"], queryField: "listUsersByOrg") {
  #  A unique identifier for the user. cognito:sub
  cognitoId: ID!
  #  A unique identifier for the user. cognito:group
  cognitoGroup: String!
}

type Query {
  me: User
}
```

Amplify will fail to declare type `ModelUserConnection` for your `listUsersByOrg` query. You need `queries:` `get:` to be set to different value than `null`.

**8**:

GSI update limit is a crap. After PR from feature branch there're usually many changes in graphql model and autogen CF files. Usually there's a need to recreate env after merging.

**9**:

S3 buckets used during stack deploymnet are not deleted after env deletation. If you want to recreate env called ex `develop` you need to manually remove each S3 with `develop` suffix and prefix. Otherwise `amplify env add` will fail.

**10**:

Custom attributes for Cognito could be only created by manually adding

```yaml
- Name: custom_attr
  AttributeDataType: String
  Required: false
  Mutable: true
```

into `amplify/backend/auth/*/*-cloudformation-template.yml`, every call of `amplify auth update` will rewrite that. What's more parameters.json files has some attributes customizing pairs but they're not used by template!

**11**:

adding storage table with trigger fails while pushing. Needed to add manually to lambda permissions:

```json
{
  "Effect": "Allow",
  "Action": [
    "dynamodb:DescribeStream",
    "dynamodb:GetRecords",
    "dynamodb:GetShardIterator",
    "dynamodb:ListStreams"
  ],
  "Resource": "arn:aws:dynamodb:region:accountID:table/BarkTable/stream/*"
}
```

**12**:

- First push of new environment always crash on changeAgentDynamoTrigger permissions:

```txt
2019-09-13T12:55:24.191Z [INFO]:
2019-09-13T12:55:24.193Z [INFO]: CREATE_FAILED   changeAgentDynamoTrigger                                                              AWS::Lambda::EventSourceMapping Fri Sep 13 2019 12:55:19 GMT+0000 (Coordinated Universal Time) Cannot access stream arn:aws:dynamodb:eu-west-1:922687003324:table/PhoneNumber-dev/stream/2019-09-13T12:51:10.020. Please ensure the role can perform the GetRecords, GetShardIterator, DescribeStream, and ListStreams Actions on your stream in IAM. (Service: AWSLambda; Status Code: 400; Error Code: InvalidParameterValueException; Request ID: 7993850f-56ab-4575-95d7-e8d767e236f8)
          CREATE_COMPLETE lambdaexecutionpolicy                                                     AWS::IAM::Policy                Fri Sep 13 2019 12:55:(Coordinated Universal Time)
          CREAchange-agent-dev-20190913143649-functionchangeAgentDynamoTriggerb5e811d2-TAWS::CloudFormation::Stack      Fri Sep 13 2019 12:55:20 GMT+0000 (Universal Time) The following resource(s) failed to create: [changeAgentDynamoTrigger.
```

- Then you have manually remove S3 bucket - `change-agent-s3-{env}`
- after that push will be successful

**13**:

Amplify push fails frequently to create `amplify-lambda-execution-policy` for lambdas while deploy. Redeploy solves problem. WTF? First idea? First deployment should be done frome console?
Always check "PolicyName" for created Lambda CF. Amplify frequently tries to create Policies with overlapping names. Result is an overwrite of policy. Other suggestion is to put your custom permissions in separate policy set: ex `custom-lambda-execution-policy`. Otherwise you may end up with S3 trigger failing to read files from bucket or Dynamo trigger policy failing to create.

```txt
CREATE_FAILED      changeAgentDynamoTrigger                                                                AWS::Lambda::EventSourceMapping Sat Sep 14 2019 23:36:33 GMT+0200 (Central European Summer Time) Cannot access stream arn:aws:dynamodb:eu-west-1:922687003324:table/PhoneNumber-devt/stream/2019-09-14T21:32:23.816. Please ensure the role can perform the GetRecords, GetShardIterator, DescribeStream, and ListStreams Actions on your stream in IAM. (Service: AWSLambda; Status Code: 400; Error Code: InvalidParameterValueException; Request ID: 4bb7ea41-82bd-49be-a465-18592663dd97)
```

**14**:

Default dynamo trigger permission is broken as it passes last dynamo stream. You need to replace default one:

```txt
{
    "Ref": "storagechangeAgentDynamoStreamArn"
}
```

with:

```txt
{
  "Fn::Join": [
    "",
    [
      {
          "Ref": "storagechangeAgentDynamoArn"
      },
      "/stream/*"
    ]
  ]
}
```

**15**:

When having named `@connection` you can't query using secondary index (`index` param is not acceptable). Type id has to be Primary Key.

**16**:

Inside Auth CL stack there is Lambda that is ised for gathering Userpoll configs. It's running on **node8**, which is currently scheduled for deprecation. However udating it manually to **node10** results in deployment process suspension and crash after timeout

```yaml
UserPoolClientLambda:
  # Lambda which gets userpool app client config values
  # Depends on UserPool for id
  # Depends on UserPoolClientRole for role ARN
  Type: 'AWS::Lambda::Function'
```

**16**:

Expired Api Key as source of all evil in deployment... [link](https://github.com/aws-amplify/amplify-cli/issues/2519)

Solution:

```txt
You should be able to get around this by setting the "APIKeyExpirationEpoch" parameter to -1 in the parameters.json. When you push, it will remove the key from the template. You can then push again and set the "APIKeyExpirationEpoch" value to the epoch timestamp in seconds when you would like the API key expire.

 step1:   "APIKeyExpirationEpoch": -1
 step2:   "APIKeyExpirationEpoch": 1585999663
```
