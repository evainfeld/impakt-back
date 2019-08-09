/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLocation = `mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
    id
    region
    org
    name
    createdAt
    updatedAt
  }
}
`;
export const createCategory = `mutation CreateCategory($input: CreateCategoryInput!) {
  createCategory(input: $input) {
    id
    region
    org
    name
    createdAt
    updatedAt
  }
}
`;
export const deleteCategory = `mutation DeleteCategory($input: DeleteCategoryInput!) {
  deleteCategory(input: $input) {
    id
    region
    org
    name
    createdAt
    updatedAt
  }
}
`;
export const createMessageOfTheDay = `mutation CreateMessageOfTheDay($input: CreateMessageOfTheDayInput!) {
  createMessageOfTheDay(input: $input) {
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
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
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
