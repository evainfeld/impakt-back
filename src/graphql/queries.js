/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const listLocations = `query ListLocations(
  $org: String
  $region: ModelStringKeyConditionInput
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(
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
export const listCategorys = `query ListCategorys(
  $org: String
  $regionName: ModelCategoryPrimaryCompositeKeyConditionInput
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategorys(
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
export const getMessageOfTheDay = `query GetMessageOfTheDay(
  $region: String!
  $category: String!
  $title: String!
) {
  getMessageOfTheDay(region: $region, category: $category, title: $title) {
    id
    author
    category
    title
    content
    resources {
      key
      value
    }
    region
    org
    createdAt
    updatedAt
  }
}
`;
export const listMessageOfTheDays = `query ListMessageOfTheDays(
  $region: String
  $categoryTitle: ModelMessageOfTheDayPrimaryCompositeKeyConditionInput
  $filter: ModelMessageOfTheDayFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessageOfTheDays(
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
        key
        value
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
      key
      value
    }
    region
    org
    createdAt
    updatedAt
  }
}
`;
export const listEvents = `query ListEvents(
  $region: String
  $categoryTitle: ModelEventPrimaryCompositeKeyConditionInput
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(
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
        key
        value
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
export const listMessageOfTheDaysByOrg = `query ListMessageOfTheDaysByOrg(
  $org: String
  $categoryTitle: ModelMessageOfTheDayorgCompositeKeyConditionInput
  $filter: ModelMessageOfTheDayFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessageOfTheDaysByOrg(
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
        key
        value
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
export const listEventsByOrg = `query ListEventsByOrg(
  $org: String
  $categoryTitle: ModelEventorgCompositeKeyConditionInput
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventsByOrg(
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
        key
        value
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
