const { User, Game, Hole, Upgrade } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id); 
      }
      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    
    login: async (parent, { userName, password }) => {
      const user = await User.findOne({ userName });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    saveGame: async (parent, { input }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in to save the game');
      }

      const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        { savedGame: input },
        { new: true }
      );

      return updatedUser;
    },

  },
};

module.exports = resolvers;
