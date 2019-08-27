/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listAllImportantNotifications = `query ListAllImportantNotifications($region: String!) {
  listAllImportantNotifications(region: $region) {
    ... on Announcement {
      id
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      category
      title
      content
      resources {
        id
        name
        author {
          id
          cognitoId
          cognitoGroup
          username
          registered
          org
          createdAt
          updatedAt
        }
        file {
          bucket
          region
          key
        }
      }
      region
      org
      createdAt
      updatedAt
    }
    ... on Event {
      id
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      category
      title
      content
      resources {
        id
        name
        author {
          id
          cognitoId
          cognitoGroup
          username
          registered
          org
          createdAt
          updatedAt
        }
        file {
          bucket
          region
          key
        }
      }
      region
      org
      createdAt
      updatedAt
    }
  }
}
`;
export const me = `query Me {
  me {
    id
    cognitoId
    cognitoGroup
    username
    registered
    org
    createdAt
    updatedAt
  }
}
`;
export const getConversation = `query GetConversation(
  $region: String!
  $type: ConversationType!
  $name: String!
) {
  getConversation(region: $region, type: $type, name: $name) {
    id
    messages {
      messages {
        content
        conversationId
        id
        isSent
        region
        org
        createdAt
        updatedAt
      }
      nextToken
    }
    name
    type
    region
    org
    createdAt
    updatedAt
  }
}
`;
export const listConversation = `query ListConversation(
  $region: String
  $typeName: ModelConversationPrimaryCompositeKeyConditionInput
  $filter: ModelConversationFilterInput
  $limit: Int
  $nextToken: String
) {
  listConversation(
    region: $region
    typeName: $typeName
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      messages {
        nextToken
      }
      name
      type
      region
      org
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getMessage = `query GetMessage(
  $region: String!
  $conversationId: ID!
  $createdAt: AWSDateTime!
) {
  getMessage(
    region: $region
    conversationId: $conversationId
    createdAt: $createdAt
  ) {
    author {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
    content
    conversationId
    id
    isSent
    resources {
      id
      name
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      file {
        bucket
        region
        key
      }
    }
    region
    org
    createdAt
    updatedAt
  }
}
`;
export const listMessage = `query ListMessage(
  $region: String
  $conversationIdCreatedAt: ModelMessagePrimaryCompositeKeyConditionInput
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessage(
    region: $region
    conversationIdCreatedAt: $conversationIdCreatedAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      content
      conversationId
      id
      isSent
      resources {
        id
        name
      }
      region
      org
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getMessageConnection = `query GetMessageConnection($id: ID!) {
  getMessageConnection(id: $id) {
    messages {
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      content
      conversationId
      id
      isSent
      resources {
        id
        name
      }
      region
      org
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const listMessageConnections = `query ListMessageConnections(
  $filter: ModelMessageConnectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessageConnections(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      messages {
        content
        conversationId
        id
        isSent
        region
        org
        createdAt
        updatedAt
      }
      nextToken
    }
    nextToken
  }
}
`;
export const getLocation = `query GetLocation($org: String!, $region: String!) {
  getLocation(org: $org, region: $region) {
    id
    region
    org
    name
    createdAt
    updatedAt
  }
}
`;
export const listLocation = `query ListLocation(
  $org: String
  $region: ModelStringKeyConditionInput
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocation(
    org: $org
    region: $region
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      region
      org
      name
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getCategory = `query GetCategory($org: String!, $region: String!, $name: String!) {
  getCategory(org: $org, region: $region, name: $name) {
    id
    region
    org
    name
    createdAt
    updatedAt
  }
}
`;
export const listCategory = `query ListCategory(
  $org: String
  $regionName: ModelCategoryPrimaryCompositeKeyConditionInput
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategory(
    org: $org
    regionName: $regionName
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      region
      org
      name
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($cognitoId: ID!) {
  getUser(cognitoId: $cognitoId) {
    id
    cognitoId
    cognitoGroup
    username
    registered
    org
    createdAt
    updatedAt
  }
}
`;
export const listUser = `query ListUser(
  $cognitoId: ID
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUser(
    cognitoId: $cognitoId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getPropaganda = `query GetPropaganda($region: String!, $category: String!, $title: String!) {
  getPropaganda(region: $region, category: $category, title: $title) {
    id
    author {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
    category
    title
    content
    resources {
      id
      name
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      file {
        bucket
        region
        key
      }
    }
    region
    org
    createdAt
    updatedAt
  }
}
`;
export const listPropaganda = `query ListPropaganda(
  $region: String
  $categoryTitle: ModelPropagandaPrimaryCompositeKeyConditionInput
  $filter: ModelPropagandaFilterInput
  $limit: Int
  $nextToken: String
) {
  listPropaganda(
    region: $region
    categoryTitle: $categoryTitle
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      category
      title
      content
      resources {
        id
        name
      }
      region
      org
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($region: String!, $category: String!, $title: String!) {
  getEvent(region: $region, category: $category, title: $title) {
    id
    author {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
    category
    title
    content
    resources {
      id
      name
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      file {
        bucket
        region
        key
      }
    }
    region
    org
    createdAt
    updatedAt
  }
}
`;
export const listEvent = `query ListEvent(
  $region: String
  $categoryTitle: ModelEventPrimaryCompositeKeyConditionInput
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvent(
    region: $region
    categoryTitle: $categoryTitle
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      category
      title
      content
      resources {
        id
        name
      }
      region
      org
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getAnnouncement = `query GetAnnouncement($region: String!, $category: String!, $title: String!) {
  getAnnouncement(region: $region, category: $category, title: $title) {
    id
    author {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
    category
    title
    content
    resources {
      id
      name
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      file {
        bucket
        region
        key
      }
    }
    region
    org
    createdAt
    updatedAt
  }
}
`;
export const listAnnouncement = `query ListAnnouncement(
  $region: String
  $categoryTitle: ModelAnnouncementPrimaryCompositeKeyConditionInput
  $filter: ModelAnnouncementFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnnouncement(
    region: $region
    categoryTitle: $categoryTitle
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      category
      title
      content
      resources {
        id
        name
      }
      region
      org
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getResource = `query GetResource($id: ID!) {
  getResource(id: $id) {
    id
    name
    author {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
    file {
      bucket
      region
      key
    }
  }
}
`;
export const listResources = `query ListResources(
  $filter: ModelResourceFilterInput
  $limit: Int
  $nextToken: String
) {
  listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      file {
        bucket
        region
        key
      }
    }
    nextToken
  }
}
`;
export const listUsersByOrg = `query ListUsersByOrg(
  $org: String
  $username: ModelStringKeyConditionInput
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsersByOrg(
    org: $org
    username: $username
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const listPropagandaByOrg = `query ListPropagandaByOrg(
  $org: String
  $categoryTitle: ModelPropagandaorgCompositeKeyConditionInput
  $filter: ModelPropagandaFilterInput
  $limit: Int
  $nextToken: String
) {
  listPropagandaByOrg(
    org: $org
    categoryTitle: $categoryTitle
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      category
      title
      content
      resources {
        id
        name
      }
      region
      org
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const listEventByOrg = `query ListEventByOrg(
  $org: String
  $categoryTitle: ModelEventorgCompositeKeyConditionInput
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventByOrg(
    org: $org
    categoryTitle: $categoryTitle
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      category
      title
      content
      resources {
        id
        name
      }
      region
      org
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const listAnnouncementByOrg = `query ListAnnouncementByOrg(
  $org: String
  $categoryTitle: ModelAnnouncementorgCompositeKeyConditionInput
  $filter: ModelAnnouncementFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnnouncementByOrg(
    org: $org
    categoryTitle: $categoryTitle
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      category
      title
      content
      resources {
        id
        name
      }
      region
      org
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
