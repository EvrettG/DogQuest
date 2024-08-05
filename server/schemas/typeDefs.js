// TODO: Fix save and add needed fields / tables
const typeDefs = `
  type Auth {
    token: ID
    user: User
  }

  type Save {
    _id: ID
    creationDate: String
    lastUpdatedDate: String
    bones: Int
    coins: Int
    inventory: [Item]
    digging: [DiggableHole]
    upgrades: [Upgrade]
  }

  type User {
    _id: ID
    userName: String!
    email: String
    password: String!
    save: [Save]
  }

  type Item {
    _id: ID
    id: String!
    quantity: Int
  }

  type DiggableHole {
    _id: ID
    id: String!
    xp: Int
    prestige_xp: Int
  }

  type Upgrade {
    _id: ID
    id: String!
    unlocked: Boolean
    xp: Int
    prestige_xp: Int
  }

  type Query {
    user: User
    saves: [Save]
    save(id: ID!): Save
  }

  type Mutation {
    addUser(
      userName: String!
      email: String
      password: String!
    ): Auth
    login(userName: String!, password: String!): Auth
    addSave(
      bones: Int
      coins: Int
      inventory: [ID]
      digging: [ID]
      upgrades: [ID]
    ): Save
    updateSave(
      id: ID!
      bones: Int
      coins: Int
      inventory: [ID]
      digging: [ID]
      upgrades: [ID]
    ): Save
  }
`;

module.exports = typeDefs;
