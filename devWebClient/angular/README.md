# Amplify Passwordless SMS Auth - WebClient (Angular)

This is a client web app that provides custom passwordless sign-up and sign-in pages to authenticate against an Amazon Cognito user pool via custom authentication challenge flow with Lambda triggers. It may be used for development, as it makes it possible to obtain API Key for Client application.

Code was forked from `https://github.com/mobilequickie/amplify-passwordless-sms-auth`. It was published under MIT license (19.08.2019).

## How to run this web app

### Pre-requisites to run this Angular web client

1. Download and install [Node.js](https://nodejs.org/en/download/)

### Run the web client

Once the backend is deployed, run the web client to demonstrate the passwordless authentication flow via SMS.

1. Enter webClient directory: `cd devWebClient/angular/`
2. Install dependencies: `npm install`
3. Enter your AWS region, Cognito user pool ID and your Web App Client ID in this file: `src/environments/environment.ts`. You can get this information from the CloudFormation stack outputs of the serverless repo deployment.
4. Run the web app locally: `npm run start`

The web app client should be running at `http://localhost:4200` allowing you to register a new user with full name and phone number and login with only the registered phone number.
