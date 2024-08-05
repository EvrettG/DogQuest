const { User, Save, Item, DiggableHole, Upgrade } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id).populate('save');
      }
      throw new AuthenticationError('Not logged in');
    },
    saves: async () => {
      return Save.find({}).populate('inventory').populate('digging').populate('upgrades');
    },
    save: async (parent, { id }) => {
      return Save.findById(id).populate('inventory').populate('digging').populate('upgrades');
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
    addSave: async (parent, args) => {
      const save = await Save.create(args);
      return save;
    },
    updateSave: async (parent, { id, ...args }) => {
      const save = await Save.findByIdAndUpdate(id, args, { new: true }).populate('inventory').populate('digging').populate('upgrades');
      return save;
    },
  },
};

module.exports = resolvers;
