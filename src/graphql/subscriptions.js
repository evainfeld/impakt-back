/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConversation = `subscription OnCreateConversation {
  onCreateConversation {
    id
    messages {
      messages {
        content
        conversationId
        id
        isSent
        region
        org
        createdAt
        updatedAt
      }
      nextToken
    }
    name
    type
    region
    org
    createdAt
    updatedAt
  }
}
`;
export const onDeleteConversation = `subscription OnDeleteConversation {
  onDeleteConversation {
    id
    messages {
      messages {
        content
        conversationId
        id
        isSent
        region
        org
        createdAt
        updatedAt
      }
      nextToken
    }
    name
    type
    region
    org
    createdAt
    updatedAt
  }
}
`;
export const onCreateMessage = `subscription OnCreateMessage {
  onCreateMessage {
    author {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
    content
    conversationId
    id
    isSent
    resources {
      id
      name
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
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
export const onCreateMessageConnection = `subscription OnCreateMessageConnection {
  onCreateMessageConnection {
    messages {
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      content
      conversationId
      id
      isSent
      resources {
        id
        name
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
export const onUpdateMessageConnection = `subscription OnUpdateMessageConnection {
  onUpdateMessageConnection {
    messages {
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      content
      conversationId
      id
      isSent
      resources {
        id
        name
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
export const onDeleteMessageConnection = `subscription OnDeleteMessageConnection {
  onDeleteMessageConnection {
    messages {
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
      content
      conversationId
      id
      isSent
      resources {
        id
        name
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    cognitoId
    cognitoGroup
    username
    registered
    org
    createdAt
    updatedAt
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    cognitoId
    cognitoGroup
    username
    registered
    org
    createdAt
    updatedAt
  }
}
`;
export const onCreatePropaganda = `subscription OnCreatePropaganda {
  onCreatePropaganda {
    id
    author {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
    category
    title
    content
    resources {
      id
      name
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
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
    author {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
    category
    title
    content
    resources {
      id
      name
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
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
    author {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
    category
    title
    content
    resources {
      id
      name
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
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
    author {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
    category
    title
    content
    resources {
      id
      name
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
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
    author {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
    category
    title
    content
    resources {
      id
      name
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
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
    author {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
    category
    title
    content
    resources {
      id
      name
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
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
    author {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
    category
    title
    content
    resources {
      id
      name
      author {
        id
        cognitoId
        cognitoGroup
        username
        registered
        org
        createdAt
        updatedAt
      }
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
export const onCreateResource = `subscription OnCreateResource {
  onCreateResource {
    id
    name
    author {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
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
    author {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
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
    author {
      id
      cognitoId
      cognitoGroup
      username
      registered
      org
      createdAt
      updatedAt
    }
    file {
      bucket
      region
      key
    }
  }
}
`;
