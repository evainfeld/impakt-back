// eslint-disable
// this is an auto generated file. This will be overwritten

export const createAnnouncement = `mutation CreateAnnouncement($input: CreateAnnouncementInput) {
  createAnnouncement(input: $input) {
    id
    modifiedAt
    announcementType
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
export const createLocation = `mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
    id
    orgRangeKey
    modifiedAt
    range
    org
  }
}
`;
