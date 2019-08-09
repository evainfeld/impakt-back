/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocation = `subscription OnCreateLocation {
  onCreateLocation {
    id
    region
    org
    name
    createdAt
    updatedAt
  }
}
`;
export const onCreateCategory = `subscription OnCreateCategory {
  onCreateCategory {
    id
    region
    org
    name
    createdAt
    updatedAt
  }
}
`;
export const onDeleteCategory = `subscription OnDeleteCategory {
  onDeleteCategory {
    id
    region
    org
    name
    createdAt
    updatedAt
  }
}
`;
export const onCreateMessageOfTheDay = `subscription OnCreateMessageOfTheDay {
  onCreateMessageOfTheDay {
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
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
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
