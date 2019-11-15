# Hacking Amplify

Amplify CLI has some strange constraints like only one S3 bucket per project. How to deal with that?

## Add second S3 storage

add to backend-config, otherwise it will not have correct trigger function params. By defualt amplify doesn't support multiple S3 as a storage component. It suggest using prefixes which is not perfect solution if creating administrative bucket.

```json
 "changeAgentS3Adm": {
            "service": "S3",
            "providerPlugin": "awscloudformation",
            "dependsOn": [
                {
                    "category": "function",
                    "resourceName": "changeAgentS3Triggerbe81f2e2",
                    "attributes": [
                        "Name",
                        "Arn",
                        "LambdaExecutionRole"
                    ]
                }
            ],
 }
```

and make sure that CF files for both S3 have different names. Amplify pushes them to same deployment catalog.

**TIP**: if sth goes wrong take a look into amplify-meta.json file.
