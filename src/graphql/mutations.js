/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResource = `mutation CreateResource($input: CreateResourceInput!) {
  createResource(input: $input) {
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
export const updateResource = `mutation UpdateResource($input: UpdateResourceInput!) {
  updateResource(input: $input) {
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
export const deleteResource = `mutation DeleteResource($input: DeleteResourceInput!) {
  deleteResource(input: $input) {
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
export const createPropaganda = `mutation CreatePropaganda($input: CreatePropagandaInput!) {
  createPropaganda(input: $input) {
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
export const updatePropaganda = `mutation UpdatePropaganda($input: UpdatePropagandaInput!) {
  updatePropaganda(input: $input) {
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
export const deletePropaganda = `mutation DeletePropaganda($input: DeletePropagandaInput!) {
  deletePropaganda(input: $input) {
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
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
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
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
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
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
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
export const createNews = `mutation CreateNews($input: CreateAnnouncementInput!) {
  createNews(input: $input) {
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
