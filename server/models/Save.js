const mongoose = require('mongoose');
const { Schema } = mongoose;

const SaveSchema = new Schema({
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
  coins: {
    type: Number,
    default: 0,
  },
  inventory: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Item',
    },
  ],
  digging: [
    {
      type: Schema.Types.ObjectId,
      ref: 'DiggableHole',
    },
  ],
  upgrades: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Upgrade',
    },
  ],
});

const Save = mongoose.model('Save', SaveSchema);

module.exports = Save;