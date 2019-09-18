/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConversation = `subscription OnCreateConversation {
  onCreateConversation {
    id
    name
    type
    region
    org
    createdAt
    updatedAt
    messages {
      items {
        id
        authorNick
        content
        isSent
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
        pubKey
        org
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const onUpdateConversation = `subscription OnUpdateConversation {
  onUpdateConversation {
    id
    name
    type
    region
    org
    createdAt
    updatedAt
    messages {
      items {
        id
        authorNick
        content
        isSent
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
        pubKey
        org
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const onDeleteConversation = `subscription OnDeleteConversation {
  onDeleteConversation {
    id
    name
    type
    region
    org
    createdAt
    updatedAt
    messages {
      items {
        id
        authorNick
        content
        isSent
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
        pubKey
        org
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const onCreateMessage = `subscription OnCreateMessage {
  onCreateMessage {
    id
    authorNick
    content
    isSent
    resources {
      id
      name
      authorNick
      file {
        bucket
        region
        key
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    createdAt
    updatedAt
    conversation {
      id
      name
      type
      region
      org
      createdAt
      updatedAt
      messages {
        nextToken
      }
      users {
        nextToken
      }
    }
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
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
    coordinatorName
    coordinatorEmail
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
    pubKey
    org
    createdAt
    updatedAt
  }
}
`;
export const onCreatePropaganda = `subscription OnCreatePropaganda {
  onCreatePropaganda {
    authorNick
    category
    title
    content
    resources {
      id
      name
      authorNick
      file {
        bucket
        region
        key
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    region
    org
    createdAt
    updatedAt
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
  }
}
`;
export const onUpdatePropaganda = `subscription OnUpdatePropaganda {
  onUpdatePropaganda {
    authorNick
    category
    title
    content
    resources {
      id
      name
      authorNick
      file {
        bucket
        region
        key
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    region
    org
    createdAt
    updatedAt
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
  }
}
`;
export const onDeletePropaganda = `subscription OnDeletePropaganda {
  onDeletePropaganda {
    authorNick
    category
    title
    content
    resources {
      id
      name
      authorNick
      file {
        bucket
        region
        key
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    region
    org
    createdAt
    updatedAt
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
  }
}
`;
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
    authorNick
    category
    title
    content
    resources {
      id
      name
      authorNick
      file {
        bucket
        region
        key
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    region
    org
    createdAt
    updatedAt
    conversation {
      id
      name
      type
      region
      org
      createdAt
      updatedAt
      messages {
        nextToken
      }
      users {
        nextToken
      }
    }
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
  }
}
`;
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
    authorNick
    category
    title
    content
    resources {
      id
      name
      authorNick
      file {
        bucket
        region
        key
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    region
    org
    createdAt
    updatedAt
    conversation {
      id
      name
      type
      region
      org
      createdAt
      updatedAt
      messages {
        nextToken
      }
      users {
        nextToken
      }
    }
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
  }
}
`;
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
    authorNick
    category
    title
    content
    resources {
      id
      name
      authorNick
      file {
        bucket
        region
        key
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    region
    org
    createdAt
    updatedAt
    conversation {
      id
      name
      type
      region
      org
      createdAt
      updatedAt
      messages {
        nextToken
      }
      users {
        nextToken
      }
    }
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
  }
}
`;
export const onCreateAnnouncement = `subscription OnCreateAnnouncement {
  onCreateAnnouncement {
    authorNick
    category
    title
    content
    resources {
      id
      name
      authorNick
      file {
        bucket
        region
        key
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    region
    org
    createdAt
    updatedAt
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
  }
}
`;
export const onUpdateAnnouncement = `subscription OnUpdateAnnouncement {
  onUpdateAnnouncement {
    authorNick
    category
    title
    content
    resources {
      id
      name
      authorNick
      file {
        bucket
        region
        key
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    region
    org
    createdAt
    updatedAt
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
  }
}
`;
export const onDeleteAnnouncement = `subscription OnDeleteAnnouncement {
  onDeleteAnnouncement {
    authorNick
    category
    title
    content
    resources {
      id
      name
      authorNick
      file {
        bucket
        region
        key
      }
      author {
        cognitoId
        cognitoGroup
        currentNick
        pubKey
        org
        createdAt
        updatedAt
      }
    }
    region
    org
    createdAt
    updatedAt
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
  }
}
`;
export const onCreateResource = `subscription OnCreateResource {
  onCreateResource {
    id
    name
    authorNick
    file {
      bucket
      region
      key
    }
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
  }
}
`;
export const onUpdateResource = `subscription OnUpdateResource {
  onUpdateResource {
    id
    name
    authorNick
    file {
      bucket
      region
      key
    }
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
  }
}
`;
export const onDeleteResource = `subscription OnDeleteResource {
  onDeleteResource {
    id
    name
    authorNick
    file {
      bucket
      region
      key
    }
    author {
      cognitoId
      cognitoGroup
      currentNick
      pubKey
      org
      createdAt
      updatedAt
    }
  }
}
`;
