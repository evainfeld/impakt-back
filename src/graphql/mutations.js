/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConversation = `mutation CreateConversation($input: CreateConversationInput!) {
  createConversation(input: $input) {
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
export const deleteConversation = `mutation DeleteConversation($input: DeleteConversationInput!) {
  deleteConversation(input: $input) {
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
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
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
export const createMessageConnection = `mutation CreateMessageConnection($input: CreateMessageConnectionInput!) {
  createMessageConnection(input: $input) {
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
export const updateMessageConnection = `mutation UpdateMessageConnection($input: UpdateMessageConnectionInput!) {
  updateMessageConnection(input: $input) {
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
export const deleteMessageConnection = `mutation DeleteMessageConnection($input: DeleteMessageConnectionInput!) {
  deleteMessageConnection(input: $input) {
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
export const createLocation = `mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
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
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const createPropaganda = `mutation CreatePropaganda($input: CreatePropagandaInput!) {
  createPropaganda(input: $input) {
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
export const updatePropaganda = `mutation UpdatePropaganda($input: UpdatePropagandaInput!) {
  updatePropaganda(input: $input) {
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
export const deletePropaganda = `mutation DeletePropaganda($input: DeletePropagandaInput!) {
  deletePropaganda(input: $input) {
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
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
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
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
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
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
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
export const createAnnouncement = `mutation CreateAnnouncement($input: CreateAnnouncementInput!) {
  createAnnouncement(input: $input) {
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
export const updateAnnouncement = `mutation UpdateAnnouncement($input: UpdateAnnouncementInput!) {
  updateAnnouncement(input: $input) {
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
export const deleteAnnouncement = `mutation DeleteAnnouncement($input: DeleteAnnouncementInput!) {
  deleteAnnouncement(input: $input) {
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
export const createResource = `mutation CreateResource($input: CreateResourceInput!) {
  createResource(input: $input) {
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
export const updateResource = `mutation UpdateResource($input: UpdateResourceInput!) {
  updateResource(input: $input) {
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
export const deleteResource = `mutation DeleteResource($input: DeleteResourceInput!) {
  deleteResource(input: $input) {
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
