const mongoose = require('mongoose');
const { Schema } = mongoose;

const DiggableHoleSchema = new Schema({
  id: {
    type: String,
    required: true,
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

const DiggableHole = mongoose.model('DiggableHole', DiggableHoleSchema);

module.exports = DiggableHole;