const mongoose = require('mongoose');
const { Schema } = mongoose;

const UpgradeSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  unlocked: {
    type: Boolean,
    default: false,
  },
  xp: {
    type: Number,
    default: 0,
  },
  prestige_xp: {
    type: Number,
    default: 0,
  },
});

const Upgrade = mongoose.model('Upgrade', UpgradeSchema);

module.exports = Upgrade;