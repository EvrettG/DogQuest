const mongoose = require('mongoose');
const { Schema } = mongoose;

const upgradeSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
  },
  cost: {
    type: Number,
  },
});

const Upgrade = mongoose.model('Upgrade', upgradeSchema);

module.exports = Upgrade;