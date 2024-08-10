const { User, SaveGame, Item, DiggableHole, Upgrade } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id).populate('saveGame');
      }
      throw new AuthenticationError('Not logged in');
    },
    saveGames: async () => {
      return SaveGame.find({}).populate('inventory').populate('digging').populate('upgrades');
    },
    saveGame: async (parent, { id }) => {
      return SaveGame.findById(id).populate('inventory').populate('digging').populate('upgrades');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    
    // Review if update user added
/*     updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    }, */
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

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
    addSaveGame: async (parent, args) => {
      const saveGame = await SaveGame.create(args);
      return saveGame;
    },
    updateSaveGame: async (parent, { id, ...args }) => {
      const saveGame = await SaveGame.findByIdAndUpdate(id, args, { new: true }).populate('inventory').populate('digging').populate('upgrades');
      return saveGame;
    },
  },
};

module.exports = resolvers;
