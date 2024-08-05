// TODO: Fix save and add needed fields / tables
const typeDefs = `
  type Auth {
    token: ID
    user: User
  }

  type save {
    _id: ID
  }

  type User {
    _id: ID
    userName: String!
    email: String
    password: String!
    save: [save]
  }

  type Query {
    
    user: User

  }

  type Mutation {
    addUser(
      userName: String!
      email: String
      password: String!
    ): Auth
    login(userName: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
