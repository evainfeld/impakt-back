/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = `subscription OnCreateMessage($convoId: String!) {
  onCreateMessage(convoId: $convoId) {
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
export const onPropagandaChange = `subscription OnPropagandaChange($region: String!, $category: String!) {
  onPropagandaChange(region: $region, category: $category) {
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
export const onEventChange = `subscription OnEventChange($region: String!, $category: String!) {
  onEventChange(region: $region, category: $category) {
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
export const onAnnouncementChange = `subscription OnAnnouncementChange($region: String!, $category: String!) {
  onAnnouncementChange(region: $region, category: $category) {
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
export const onConversationChange = `subscription OnConversationChange($id: ID!) {
  onConversationChange(id: $id) {
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
}
`;
export const onCategoryChange = `subscription OnCategoryChange($region: String!) {
  onCategoryChange(region: $region) {
    id
    region
    org
    name
    createdAt
    updatedAt
  }
}
`;
export const onLocationChange = `subscription OnLocationChange($org: String!) {
  onLocationChange(org: $org) {
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