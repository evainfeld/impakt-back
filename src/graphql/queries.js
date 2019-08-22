/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listAllImportantNotifications = `query ListAllImportantNotifications($region: String!) {
  listAllImportantNotifications(region: $region) {
    ... on Announcement {
      id
      author
      category
      title
      content
      resources {
        id
        name
        author
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
      author
      category
      title
      content
      resources {
        id
        name
        author
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
export const getResource = `query GetResource($id: ID!) {
  getResource(id: $id) {
    id
    name
    author
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
      author
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
export const getPropaganda = `query GetPropaganda($region: String!, $category: String!, $title: String!) {
  getPropaganda(region: $region, category: $category, title: $title) {
    id
    author
    category
    title
    content
    resources {
      id
      name
      author
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
      author
      category
      title
      content
      resources {
        id
        name
        author
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
    author
    category
    title
    content
    resources {
      id
      name
      author
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
      author
      category
      title
      content
      resources {
        id
        name
        author
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
    author
    category
    title
    content
    resources {
      id
      name
      author
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
export const listAnnouncements = `query ListAnnouncements(
  $region: String
  $categoryTitle: ModelAnnouncementPrimaryCompositeKeyConditionInput
  $filter: ModelAnnouncementFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnnouncements(
    region: $region
    categoryTitle: $categoryTitle
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      author
      category
      title
      content
      resources {
        id
        name
        author
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
      author
      category
      title
      content
      resources {
        id
        name
        author
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
      author
      category
      title
      content
      resources {
        id
        name
        author
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
      author
      category
      title
      content
      resources {
        id
        name
        author
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
