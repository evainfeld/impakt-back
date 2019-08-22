/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateResource = `subscription OnCreateResource {
  onCreateResource {
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
export const onUpdateResource = `subscription OnUpdateResource {
  onUpdateResource {
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
export const onDeleteResource = `subscription OnDeleteResource {
  onDeleteResource {
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
export const onCreatePropaganda = `subscription OnCreatePropaganda {
  onCreatePropaganda {
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
export const onUpdatePropaganda = `subscription OnUpdatePropaganda {
  onUpdatePropaganda {
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
export const onDeletePropaganda = `subscription OnDeletePropaganda {
  onDeletePropaganda {
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
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
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
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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
export const onCreateAnnouncement = `subscription OnCreateAnnouncement {
  onCreateAnnouncement {
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
