// eslint-disable
// this is an auto generated file. This will be overwritten

export const allLocations = `query AllLocations($org: String!, $limit: Int, $nextToken: String) {
  allLocations(org: $org, limit: $limit, nextToken: $nextToken) {
    items {
      id
      orgRangeKey
      modifiedAt
      range
      org
    }
    nextToken
  }
}
`;
export const allAnouncements = `query AllAnouncements(
  $org: String!
  $announcementType: AnnouncementType
  $category: String
  $limit: Int
  $nextToken: String
) {
  allAnouncements(
    org: $org
    announcementType: $announcementType
    category: $category
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      modifiedAt
      announcementType
      author
      category
      title
      content
      range
      org
      orgRangeKey
    }
    nextToken
  }
}
`;
export const allAnouncementsPerRegion = `query AllAnouncementsPerRegion(
  $orgRangeKey: String!
  $announcementType: AnnouncementType
  $category: String
  $limit: Int
  $nextToken: String
) {
  allAnouncementsPerRegion(
    orgRangeKey: $orgRangeKey
    announcementType: $announcementType
    category: $category
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      modifiedAt
      announcementType
      author
      category
      title
      content
      range
      org
      orgRangeKey
    }
    nextToken
  }
}
`;
