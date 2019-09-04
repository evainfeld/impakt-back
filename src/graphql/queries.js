/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listAllImportantNotifications = `query ListAllImportantNotifications($region: String!) {
  listAllImportantNotifications(region: $region) {
    ... on Announcement {
      author {
        cognitoId
        cognitoGroup
        username
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
      category
      title
      content
      resources {
        id
        name
        author {
          cognitoId
          cognitoGroup
          username
          registered
          pubKey
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
      author {
        cognitoId
        cognitoGroup
        username
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
      category
      title
      content
      resources {
        id
        name
        author {
          cognitoId
          cognitoGroup
          username
          registered
          pubKey
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
      conversation {
        id
        messages {
          nextToken
        }
        users {
          nextToken
        }
        name
        type
        region
        org
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
}
`;
export const me = `query Me {
  me {
    cognitoId
    cognitoGroup
    username
    registered
    pubKey
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
        isSent
        region
        org
        createdAt
        updatedAt
      }
      nextToken
    }
    users {
      items {
        cognitoId
        cognitoGroup
        username
        registered
        pubKey
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
  $sortDirection: ModelSortDirection
) {
  listConversation(
    region: $region
    typeName: $typeName
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      messages {
        nextToken
      }
      users {
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
      cognitoId
      cognitoGroup
      username
      registered
      pubKey
      org
      createdAt
      updatedAt
    }
    content
    conversationId
    isSent
    resources {
      id
      name
      author {
        cognitoId
        cognitoGroup
        username
        registered
        pubKey
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
  $sortDirection: ModelSortDirection
) {
  listMessage(
    region: $region
    conversationIdCreatedAt: $conversationIdCreatedAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      author {
        cognitoId
        cognitoGroup
        username
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      content
      conversationId
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
        cognitoId
        cognitoGroup
        username
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      content
      conversationId
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
  $sortDirection: ModelSortDirection
) {
  listLocation(
    org: $org
    region: $region
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
  $sortDirection: ModelSortDirection
) {
  listCategory(
    org: $org
    regionName: $regionName
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    cognitoId
    cognitoGroup
    username
    registered
    pubKey
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
  $sortDirection: ModelSortDirection
) {
  listUser(
    cognitoId: $cognitoId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      cognitoId
      cognitoGroup
      username
      registered
      pubKey
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
    author {
      cognitoId
      cognitoGroup
      username
      registered
      pubKey
      org
      createdAt
      updatedAt
    }
    authorNick
    category
    title
    content
    resources {
      id
      name
      author {
        cognitoId
        cognitoGroup
        username
        registered
        pubKey
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
  $sortDirection: ModelSortDirection
) {
  listPropaganda(
    region: $region
    categoryTitle: $categoryTitle
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      author {
        cognitoId
        cognitoGroup
        username
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
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
    author {
      cognitoId
      cognitoGroup
      username
      registered
      pubKey
      org
      createdAt
      updatedAt
    }
    authorNick
    category
    title
    content
    resources {
      id
      name
      author {
        cognitoId
        cognitoGroup
        username
        registered
        pubKey
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
    conversation {
      id
      messages {
        nextToken
      }
      users {
        nextToken
      }
      name
      type
      region
      org
      createdAt
      updatedAt
    }
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
  $sortDirection: ModelSortDirection
) {
  listEvent(
    region: $region
    categoryTitle: $categoryTitle
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      author {
        cognitoId
        cognitoGroup
        username
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
      category
      title
      content
      resources {
        id
        name
      }
      region
      org
      conversation {
        id
        name
        type
        region
        org
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getAnnouncement = `query GetAnnouncement($region: String!, $category: String!, $title: String!) {
  getAnnouncement(region: $region, category: $category, title: $title) {
    author {
      cognitoId
      cognitoGroup
      username
      registered
      pubKey
      org
      createdAt
      updatedAt
    }
    authorNick
    category
    title
    content
    resources {
      id
      name
      author {
        cognitoId
        cognitoGroup
        username
        registered
        pubKey
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
  $sortDirection: ModelSortDirection
) {
  listAnnouncement(
    region: $region
    categoryTitle: $categoryTitle
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      author {
        cognitoId
        cognitoGroup
        username
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
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
      cognitoId
      cognitoGroup
      username
      registered
      pubKey
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
        cognitoId
        cognitoGroup
        username
        registered
        pubKey
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
export const listCoversationsByIndex = `query ListCoversationsByIndex(
  $id: ID
  $sortDirection: ModelSortDirection
  $filter: ModelConversationFilterInput
  $limit: Int
  $nextToken: String
) {
  listCoversationsByIndex(
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      messages {
        nextToken
      }
      users {
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
export const listUsersByOrg = `query ListUsersByOrg(
  $org: String
  $cognitoGroup: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsersByOrg(
    org: $org
    cognitoGroup: $cognitoGroup
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      cognitoId
      cognitoGroup
      username
      registered
      pubKey
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
  $categoryTitle: ModelPropagandaOrgCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPropagandaFilterInput
  $limit: Int
  $nextToken: String
) {
  listPropagandaByOrg(
    org: $org
    categoryTitle: $categoryTitle
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      author {
        cognitoId
        cognitoGroup
        username
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
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
  $categoryTitle: ModelEventOrgCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventByOrg(
    org: $org
    categoryTitle: $categoryTitle
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      author {
        cognitoId
        cognitoGroup
        username
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
      category
      title
      content
      resources {
        id
        name
      }
      region
      org
      conversation {
        id
        name
        type
        region
        org
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const listAnnouncementByOrg = `query ListAnnouncementByOrg(
  $org: String
  $categoryTitle: ModelAnnouncementOrgCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAnnouncementFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnnouncementByOrg(
    org: $org
    categoryTitle: $categoryTitle
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      author {
        cognitoId
        cognitoGroup
        username
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
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
