#!/bin/bash

{
echo 'AWSTemplateFormatVersion: "2010-09-09"
#Parameters:
#  userPoolId:
#    Type: String
#    Description: User Pool ID associated with this project
Outputs:
  ChangeAgentApiId:
    Description: Unique AWS AppSync GraphQL API Identifier
    Value: !GetAtt changeAgentApi.ApiId
  ChangeAgentApiKey:
    Description: Unique AWS AppSync GraphQL API Key
    Value: !GetAtt appSyncAPIKey.ApiKey
  ChangeAgentApiUrl:
    Description: The Endpoint URL of your GraphQL API.
    Value: !GetAtt changeAgentApi.GraphQLUrl
Resources:
  changeAgentTable:
    Type: "AWS::DynamoDB::Table"
    Properties:
      AttributeDefinitions:
        -
          AttributeName: "orgRangeKey"
          AttributeType: "S"
        -
          AttributeName: "id"
          AttributeType: "S"
        -
          AttributeName: "org"
          AttributeType: "S"
      KeySchema:
        -
          AttributeName: "orgRangeKey"
          KeyType: "HASH"
        -
          AttributeName: "id"
          KeyType: "RANGE"
      ProvisionedThroughput:
        ReadCapacityUnits: "5"
        WriteCapacityUnits: "5"
      GlobalSecondaryIndexes:
        -
          IndexName: "org-index"
          KeySchema:
            -
              AttributeName: "org"
              KeyType: "HASH"
          Projection:
            ProjectionType: "ALL"
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
              - !Sub ${changeAgentTable.Arn}/index/org-index
      Roles:
        -
          Ref: "awsAppSyncServiceRole"
  changeAgentApi:
    Type: "AWS::AppSync::GraphQLApi"
    Properties:
      Name: "ChangeAgent"
      AuthenticationType: API_KEY
      #AuthenticationType: "AMAZON_COGNITO_USER_POOLS"
      #UserPoolConfig:
      #  UserPoolId: !Ref userPoolId
      #  AwsRegion: !Ref "AWS::Region"
      #  DefaultAction: "ALLOW"
  appSyncAPIKey:
      Type: AWS::AppSync::ApiKey
      Properties:
        ApiId: !GetAtt changeAgentApi.ApiId
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
done < backend/resolvers/pagginated.response  

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
done < backend/resolvers/passthrough.response  

echo '  allAnouncementsQueryResolver:
    Type: "AWS::AppSync::Resolver"
    Properties:
      ApiId: !GetAtt changeAgentApi.ApiId
      TypeName: "Query"
      FieldName: "allAnouncements"
      DataSourceName: !GetAtt changeAgentTableDataSource.Name
      RequestMappingTemplate: |'

while IFS= read -r line
do
  echo "        $line"
done < backend/resolvers/Query.allAnouncements.request  
echo '      ResponseMappingTemplate: |'

while IFS= read -r line
do
  echo "        $line"
done < backend/resolvers/pagginated.response  

echo '  allAnouncementsPerRegionQueryResolver:
    Type: "AWS::AppSync::Resolver"
    Properties:
      ApiId: !GetAtt changeAgentApi.ApiId
      TypeName: "Query"
      FieldName: "allAnouncementsPerRegion"
      DataSourceName: !GetAtt changeAgentTableDataSource.Name
      RequestMappingTemplate: |'

while IFS= read -r line
do
  echo "        $line"
done < backend/resolvers/Query.allAnouncementsPerRegion.request  
echo '      ResponseMappingTemplate: |'

while IFS= read -r line
do
  echo "        $line"
done < backend/resolvers/pagginated.response  

echo '  createAnnouncementMutationResolver:
    Type: "AWS::AppSync::Resolver"
    Properties:
      ApiId: !GetAtt changeAgentApi.ApiId
      TypeName: "Mutation"
      FieldName: "createAnnouncement"
      DataSourceName: !GetAtt changeAgentTableDataSource.Name
      RequestMappingTemplate: |'

while IFS= read -r line
do
  echo "        $line"
done < backend/resolvers/Mutation.createAnnouncement.request  
echo '      ResponseMappingTemplate: |'

while IFS= read -r line
do
  echo "        $line"
done < backend/resolvers/passthrough.response

} > backend/deploy-cfn.yml
