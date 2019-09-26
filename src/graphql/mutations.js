/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const notifyCoordinator = `mutation NotifyCoordinator(
  $currentNick: String!
  $contactDetails: String!
  $coordinatorEmail: String!
  $msg: String
) {
  notifyCoordinator(
    currentNick: $currentNick
    contactDetails: $contactDetails
    coordinatorEmail: $coordinatorEmail
    msg: $msg
  )
}
`;
export const createConversation = `mutation CreateConversation($input: CreateConversationInput!) {
  createConversation(input: $input) {
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
        convoId
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
export const updateConversation = `mutation UpdateConversation($input: UpdateConversationInput!) {
  updateConversation(input: $input) {
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
        convoId
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
export const deleteConversation = `mutation DeleteConversation($input: DeleteConversationInput!) {
  deleteConversation(input: $input) {
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
        convoId
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
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
    id
    authorNick
    content
    convoId
    isSent
    resources {
      name
      bucket
      region
      key
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
export const updateLocation = `mutation UpdateLocation($input: UpdateLocationInput!) {
  updateLocation(input: $input) {
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
export const deleteLocation = `mutation DeleteLocation($input: DeleteLocationInput!) {
  deleteLocation(input: $input) {
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
    pubKey
    org
    createdAt
    updatedAt
  }
}
`;
export const createPropaganda = `mutation CreatePropaganda($input: CreatePropagandaInput!) {
  createPropaganda(input: $input) {
    authorNick
    category
    title
    content
    resources {
      name
      bucket
      region
      key
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
export const updatePropaganda = `mutation UpdatePropaganda($input: UpdatePropagandaInput!) {
  updatePropaganda(input: $input) {
    authorNick
    category
    title
    content
    resources {
      name
      bucket
      region
      key
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
export const deletePropaganda = `mutation DeletePropaganda($input: DeletePropagandaInput!) {
  deletePropaganda(input: $input) {
    authorNick
    category
    title
    content
    resources {
      name
      bucket
      region
      key
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
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
    authorNick
    category
    title
    content
    resources {
      name
      bucket
      region
      key
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
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
    authorNick
    category
    title
    content
    resources {
      name
      bucket
      region
      key
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
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
    authorNick
    category
    title
    content
    resources {
      name
      bucket
      region
      key
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
export const createAnnouncement = `mutation CreateAnnouncement($input: CreateAnnouncementInput!) {
  createAnnouncement(input: $input) {
    authorNick
    category
    title
    content
    resources {
      name
      bucket
      region
      key
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
export const updateAnnouncement = `mutation UpdateAnnouncement($input: UpdateAnnouncementInput!) {
  updateAnnouncement(input: $input) {
    authorNick
    category
    title
    content
    resources {
      name
      bucket
      region
      key
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
export const deleteAnnouncement = `mutation DeleteAnnouncement($input: DeleteAnnouncementInput!) {
  deleteAnnouncement(input: $input) {
    authorNick
    category
    title
    content
    resources {
      name
      bucket
      region
      key
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
