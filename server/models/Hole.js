const mongoose = require('mongoose');
const { Schema } = mongoose;

const holeSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  xp: {
    type: Number,
  },
  level: {
    type: Number,
  },
  baseValue: {
    type: Number,
  },
});

const Hole = mongoose.model('Hole', holeSchema);

module.exports = Hole;