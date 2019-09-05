/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConversation = `subscription OnCreateConversation {
  onCreateConversation {
    id
    messages {
      messages {
        authorNick
        content
        conversationId
        isSent
        region
        org
        createdAt
        updatedAt
      }
      nextToken
    }
    users {
      items {
        cognitoId
        cognitoGroup
        currentNick
        registered
        pubKey
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
        authorNick
        content
        conversationId
        isSent
        region
        org
        createdAt
        updatedAt
      }
      nextToken
    }
    users {
      items {
        cognitoId
        cognitoGroup
        currentNick
        registered
        pubKey
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
      cognitoId
      cognitoGroup
      currentNick
      registered
      pubKey
      org
      createdAt
      updatedAt
    }
    authorNick
    content
    conversationId
    isSent
    resources {
      id
      name
      author {
        cognitoId
        cognitoGroup
        currentNick
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
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
        cognitoId
        cognitoGroup
        currentNick
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
      content
      conversationId
      isSent
      resources {
        id
        name
        authorNick
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
        cognitoId
        cognitoGroup
        currentNick
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
      content
      conversationId
      isSent
      resources {
        id
        name
        authorNick
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
        cognitoId
        cognitoGroup
        currentNick
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
      content
      conversationId
      isSent
      resources {
        id
        name
        authorNick
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
    cognitoId
    cognitoGroup
    currentNick
    registered
    pubKey
    org
    createdAt
    updatedAt
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    cognitoId
    cognitoGroup
    currentNick
    registered
    pubKey
    org
    createdAt
    updatedAt
  }
}
`;
export const onCreatePropaganda = `subscription OnCreatePropaganda {
  onCreatePropaganda {
    author {
      cognitoId
      cognitoGroup
      currentNick
      registered
      pubKey
      org
      createdAt
      updatedAt
    }
    authorNick
    category
    title
    content
    resources {
      id
      name
      author {
        cognitoId
        cognitoGroup
        currentNick
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
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
    author {
      cognitoId
      cognitoGroup
      currentNick
      registered
      pubKey
      org
      createdAt
      updatedAt
    }
    authorNick
    category
    title
    content
    resources {
      id
      name
      author {
        cognitoId
        cognitoGroup
        currentNick
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
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
    author {
      cognitoId
      cognitoGroup
      currentNick
      registered
      pubKey
      org
      createdAt
      updatedAt
    }
    authorNick
    category
    title
    content
    resources {
      id
      name
      author {
        cognitoId
        cognitoGroup
        currentNick
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
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
    author {
      cognitoId
      cognitoGroup
      currentNick
      registered
      pubKey
      org
      createdAt
      updatedAt
    }
    authorNick
    category
    title
    content
    resources {
      id
      name
      author {
        cognitoId
        cognitoGroup
        currentNick
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
      file {
        bucket
        region
        key
      }
    }
    region
    org
    conversation {
      id
      messages {
        nextToken
      }
      users {
        nextToken
      }
      name
      type
      region
      org
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
`;
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
    author {
      cognitoId
      cognitoGroup
      currentNick
      registered
      pubKey
      org
      createdAt
      updatedAt
    }
    authorNick
    category
    title
    content
    resources {
      id
      name
      author {
        cognitoId
        cognitoGroup
        currentNick
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
      file {
        bucket
        region
        key
      }
    }
    region
    org
    conversation {
      id
      messages {
        nextToken
      }
      users {
        nextToken
      }
      name
      type
      region
      org
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
`;
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
    author {
      cognitoId
      cognitoGroup
      currentNick
      registered
      pubKey
      org
      createdAt
      updatedAt
    }
    authorNick
    category
    title
    content
    resources {
      id
      name
      author {
        cognitoId
        cognitoGroup
        currentNick
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
      file {
        bucket
        region
        key
      }
    }
    region
    org
    conversation {
      id
      messages {
        nextToken
      }
      users {
        nextToken
      }
      name
      type
      region
      org
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
`;
export const onCreateAnnouncement = `subscription OnCreateAnnouncement {
  onCreateAnnouncement {
    author {
      cognitoId
      cognitoGroup
      currentNick
      registered
      pubKey
      org
      createdAt
      updatedAt
    }
    authorNick
    category
    title
    content
    resources {
      id
      name
      author {
        cognitoId
        cognitoGroup
        currentNick
        registered
        pubKey
        org
        createdAt
        updatedAt
      }
      authorNick
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
      cognitoId
      cognitoGroup
      currentNick
      registered
      pubKey
      org
      createdAt
      updatedAt
    }
    authorNick
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
      cognitoId
      cognitoGroup
      currentNick
      registered
      pubKey
      org
      createdAt
      updatedAt
    }
    authorNick
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
      cognitoId
      cognitoGroup
      currentNick
      registered
      pubKey
      org
      createdAt
      updatedAt
    }
    authorNick
    file {
      bucket
      region
      key
    }
  }
}
`;
