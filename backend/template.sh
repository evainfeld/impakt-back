#!/bin/bash

{
echo 'AWSTemplateFormatVersion: "2010-09-09"
Parameters:
  userPoolId:
    Type: String
    Description: User Pool ID associated with this project
Outputs:
  ChangeAgentApiId:
    Description: Unique AWS AppSync GraphQL API Identifier
    Value: !GetAtt changeAgentApi.ApiId
  ChangeAgentApiUrl:
    Description: The Endpoint URL of your GraphQL API.
    Value: !GetAtt changeAgentApi.GraphQLUrl
Resources:
  changeAgentTable:
    Type: "AWS::DynamoDB::Table"
    Properties:
      AttributeDefinitions:
        -
          AttributeName: "org_range"
          AttributeType: "S"
        -
          AttributeName: "updateAt"
          AttributeType: "S"
      KeySchema:
        -
          AttributeName: "org_range"
          KeyType: "HASH"
        -
          AttributeName: "updateAt"
          KeyType: "RANGE"
      ProvisionedThroughput:
        ReadCapacityUnits: "5"
        WriteCapacityUnits: "5"
  awsAppSyncServiceRole:
    Type: "AWS::IAM::Role"
    Properties:
      AssumeRolePolicyDocument:
        Version: "2012-10-17"
        Statement:
          -
            Effect: "Allow"
            Principal:
              Service:
                - "appsync.amazonaws.com"
            Action:
              - "sts:AssumeRole"
      Path: "/"
  dynamodbAccessPolicy:
    Type: "AWS::IAM::Policy"
    Properties:
      PolicyName: "dynamodb-access"
      PolicyDocument:
        Version: "2012-10-17"
        Statement:
          -
            Effect: "Allow"
            Action: "dynamodb:*"
            Resource:
              - !GetAtt changeAgentTable.Arn
      Roles:
        -
          Ref: "awsAppSyncServiceRole"
  changeAgentApi:
    Type: "AWS::AppSync::GraphQLApi"
    Properties:
      Name: "ChangeAgent"
      AuthenticationType: "AMAZON_COGNITO_USER_POOLS"
      UserPoolConfig:
        UserPoolId: !Ref userPoolId
        AwsRegion: !Ref "AWS::Region"
        DefaultAction: "ALLOW"
  changeAgentTableDataSource:
    Type: "AWS::AppSync::DataSource"
    Properties:
      ApiId: !GetAtt changeAgentApi.ApiId
      Name: "changeAgentTableDataSource"
      Description: "changeAgentTable DynamoDB data source"
      Type: "AMAZON_DYNAMODB"
      ServiceRoleArn: !GetAtt awsAppSyncServiceRole.Arn
      DynamoDBConfig:
        TableName: !Ref changeAgentTable
        AwsRegion: !Ref "AWS::Region"
  changeAgentSchema:
    Type: "AWS::AppSync::GraphQLSchema"
    Properties:
      ApiId: !GetAtt changeAgentApi.ApiId
      Definition: |'

while IFS= read -r line
do
  echo "        $line"
done < backend/schema-short.gql         

echo '  allLocationsQueryResolver:
    Type: "AWS::AppSync::Resolver"
    Properties:
      ApiId: !GetAtt changeAgentApi.ApiId
      TypeName: "Query"
      FieldName: "allLocations"
      DataSourceName: !GetAtt changeAgentTableDataSource.Name
      RequestMappingTemplate: |'

while IFS= read -r line
do
  echo "        $line"
done < backend/resolvers/Query.allLocations.request  
echo '      ResponseMappingTemplate: |'

while IFS= read -r line
do
  echo "        $line"
done < backend/resolvers/Query.allLocations.response  

echo '  createLocationMutationResolver:
    Type: "AWS::AppSync::Resolver"
    Properties:
      ApiId: !GetAtt changeAgentApi.ApiId
      TypeName: "Mutation"
      FieldName: "createLocation"
      DataSourceName: !GetAtt changeAgentTableDataSource.Name
      RequestMappingTemplate: |'

while IFS= read -r line
do
  echo "        $line"
done < backend/resolvers/Mutation.createLocation.request  
echo '      ResponseMappingTemplate: |'

while IFS= read -r line
do
  echo "        $line"
done < backend/resolvers/Mutation.createLocation.response  

} > backend/deploy-cfn.yml
