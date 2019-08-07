// eslint-disable
// this is an auto generated file. This will be overwritten

export const allLocations = `query AllLocations($org: String!, $limit: Int, $nextToken: String) {
  allLocations(org: $org, limit: $limit, nextToken: $nextToken) {
    location {
      id
      orgRangeKey
      modifiedAt
      range
      org
      doc_type
    }
    nextToken
  }
}
`;
export const allAnouncement = `query AllAnouncement(
  $after: String
  $first: Int
  $range: String
  $org: String!
  $type: AnnouncementType
) {
  allAnouncement(
    after: $after
    first: $first
    range: $range
    org: $org
    type: $type
  ) {
    id
    modifiedAt
    type
    author
    category
    title
    content
    resources {
      key
      value
    }
    range
    org
    orgRangeKey
  }
}
`;
