const typeDefs = `
  type Auth {
    token: ID
    user: User
  }

  type User {
    _id: ID
    userName: String!
    password: String!
    savedGame: Game
  }

  type Game {
    bones: Int
    activeHole: Int
    holes: [Hole]
    upgrades: [Upgrade]
  }

  type Hole {
    id: Int
    xp: Int
    level: Int
    baseValue: Int
  }

  type Upgrade {
    id: String
    level: Int
    cost: Int
  }

  type Mutation {
    addUser(userName: String!, password: String!): Auth
    login(userName: String!, password: String!): Auth
    saveGame(input: GameInput!): User
  }

  type Query {
    user: User

  }

  input GameInput {
    bones: Int
    activeHole: Int
    holes: [HoleInput]
    upgrades: [UpgradeInput]
  }

  input HoleInput {
    id: Int
    xp: Int
    level: Int
    baseValue: Int
  }

  input UpgradeInput {
    id: String
    level: Int
    cost: Int
  }
`;

module.exports = typeDefs;
