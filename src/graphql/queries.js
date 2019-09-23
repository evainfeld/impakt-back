/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listAllImportantNotifications = `query ListAllImportantNotifications($region: String!) {
  listAllImportantNotifications(region: $region) {
    ... on Announcement {
      authorNick
      category
      title
      content
      resources {
        id
        name
        authorNick
        file {
          bucket
          region
          key
        }
        author {
          cognitoId
          cognitoGroup
          currentNick
          pubKey
          org
          createdAt
          updatedAt
        }
      }
      region
      org
      createdAt
      updatedAt
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    ... on Event {
      authorNick
      category
      title
      content
      resources {
        id
        name
        authorNick
        file {
          bucket
          region
          key
        }
        author {
          cognitoId
          cognitoGroup
          currentNick
          pubKey
          org
          createdAt
          updatedAt
        }
      }
      region
      org
      createdAt
      updatedAt
      conversation {
        id
        name
        type
        region
        org
        createdAt
        updatedAt
        messages {
          nextToken
        }
        users {
          nextToken
        }
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
  }
}
`;
export const getCoversationByRegion = `query GetCoversationByRegion($region: String!, $type: String!, $name: String!) {
  getCoversationByRegion(region: $region, type: $type, name: $name) {
    id
    name
    type
    region
    org
    createdAt
    updatedAt
    messages {
      items {
        id
        authorNick
        content
        isSent
        createdAt
        updatedAt
      }
      nextToken
    }
    users {
      items {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const me = `query Me {
  me {
    cognitoId
    cognitoGroup
    currentNick
    pubKey
    org
    createdAt
    updatedAt
  }
}
`;
export const listConversation = `query ListConversation(
  $id: ID
  $filter: ModelConversationFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listConversation(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      type
      region
      org
      createdAt
      updatedAt
      messages {
        nextToken
      }
      users {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getConversation = `query GetConversation($id: ID!) {
  getConversation(id: $id) {
    id
    name
    type
    region
    org
    createdAt
    updatedAt
    messages {
      items {
        id
        authorNick
        content
        isSent
        createdAt
        updatedAt
      }
      nextToken
    }
    users {
      items {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const listCoversationsByRegion = `query ListCoversationsByRegion(
  $region: String
  $typeName: ModelConversationRegionCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelConversationFilterInput
  $limit: Int
  $nextToken: String
) {
  listCoversationsByRegion(
    region: $region
    typeName: $typeName
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      type
      region
      org
      createdAt
      updatedAt
      messages {
        nextToken
      }
      users {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getMessage = `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    authorNick
    content
    isSent
    resources {
      id
      name
      authorNick
      file {
        bucket
        region
        key
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    createdAt
    updatedAt
    conversation {
      id
      name
      type
      region
      org
      createdAt
      updatedAt
      messages {
        nextToken
      }
      users {
        nextToken
      }
    }
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
  }
}
`;
export const listMessage = `query ListMessage(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessage(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      authorNick
      content
      isSent
      resources {
        id
        name
        authorNick
      }
      createdAt
      updatedAt
      conversation {
        id
        name
        type
        region
        org
        createdAt
        updatedAt
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
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
    coordinatorName
    coordinatorEmail
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
      id
      region
      org
      name
      coordinatorName
      coordinatorEmail
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const listLocationByIndex = `query ListLocationByIndex(
  $id: ID
  $sortDirection: ModelSortDirection
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocationByIndex(
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      region
      org
      name
      coordinatorName
      coordinatorEmail
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getCategory = `query GetCategory($region: String!, $name: String!) {
  getCategory(region: $region, name: $name) {
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
  $region: String
  $name: ModelStringKeyConditionInput
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCategory(
    region: $region
    name: $name
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
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
export const listCategoryByIndex = `query ListCategoryByIndex(
  $id: ID
  $sortDirection: ModelSortDirection
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategoryByIndex(
    id: $id
    sortDirection: $sortDirection
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
export const listCategoryByOrg = `query ListCategoryByOrg(
  $org: String
  $regionName: ModelCategoryOrgCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategoryByOrg(
    org: $org
    regionName: $regionName
    sortDirection: $sortDirection
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
      currentNick
      pubKey
      org
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
    currentNick
    pubKey
    org
    createdAt
    updatedAt
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
      currentNick
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
    authorNick
    category
    title
    content
    resources {
      id
      name
      authorNick
      file {
        bucket
        region
        key
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    region
    org
    createdAt
    updatedAt
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
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
      authorNick
      category
      title
      content
      resources {
        id
        name
        authorNick
      }
      region
      org
      createdAt
      updatedAt
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
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
      authorNick
      category
      title
      content
      resources {
        id
        name
        authorNick
      }
      region
      org
      createdAt
      updatedAt
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($region: String!, $category: String!, $title: String!) {
  getEvent(region: $region, category: $category, title: $title) {
    authorNick
    category
    title
    content
    resources {
      id
      name
      authorNick
      file {
        bucket
        region
        key
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    region
    org
    createdAt
    updatedAt
    conversation {
      id
      name
      type
      region
      org
      createdAt
      updatedAt
      messages {
        nextToken
      }
      users {
        nextToken
      }
    }
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
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
      authorNick
      category
      title
      content
      resources {
        id
        name
        authorNick
      }
      region
      org
      createdAt
      updatedAt
      conversation {
        id
        name
        type
        region
        org
        createdAt
        updatedAt
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
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
      authorNick
      category
      title
      content
      resources {
        id
        name
        authorNick
      }
      region
      org
      createdAt
      updatedAt
      conversation {
        id
        name
        type
        region
        org
        createdAt
        updatedAt
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    nextToken
  }
}
`;
export const getAnnouncement = `query GetAnnouncement($region: String!, $category: String!, $title: String!) {
  getAnnouncement(region: $region, category: $category, title: $title) {
    authorNick
    category
    title
    content
    resources {
      id
      name
      authorNick
      file {
        bucket
        region
        key
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    region
    org
    createdAt
    updatedAt
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
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
      authorNick
      category
      title
      content
      resources {
        id
        name
        authorNick
      }
      region
      org
      createdAt
      updatedAt
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
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
      authorNick
      category
      title
      content
      resources {
        id
        name
        authorNick
      }
      region
      org
      createdAt
      updatedAt
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    nextToken
  }
}
`;
export const getResource = `query GetResource($id: ID!) {
  getResource(id: $id) {
    id
    name
    authorNick
    file {
      bucket
      region
      key
    }
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
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
      authorNick
      file {
        bucket
        region
        key
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    nextToken
  }
}
`;
