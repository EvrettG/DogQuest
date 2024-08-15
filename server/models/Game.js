const mongoose = require('mongoose');
const { Schema } = mongoose;
const Hole = require('./Hole')
const Upgrade = require('./Upgrade')

const GameSchema = new Schema({
  creationDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  lastUpdatedDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  bones: {
    type: Number,
    default: 0,
  },
  activeHole: {
    type: Number,
  },
  holes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Hole',
    },
  ],
  upgrades: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Upgrade',
    },
  ],
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;