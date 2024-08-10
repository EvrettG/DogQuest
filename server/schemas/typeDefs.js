// TODO: Fix save and add needed fields / tables
const typeDefs = `
  type Auth {
    token: ID
    user: User
  }

  type SaveGame {
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
    saveGame: [SaveGame]
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
    saveGames: [SaveGame]
    saveGame(id: ID!): SaveGame
  }

  type Mutation {
    addUser(
      userName: String!
      email: String
      password: String!
    ): Auth
    login(userName: String!, password: String!): Auth
    addSaveGame(
      bones: Int
      coins: Int
      inventory: [ID]
      digging: [ID]
      upgrades: [ID]
    ): SaveGame
    updateSaveGame(
      id: ID!
      bones: Int
      coins: Int
      inventory: [ID]
      digging: [ID]
      upgrades: [ID]
    ): SaveGame
  }
`;

module.exports = typeDefs;
