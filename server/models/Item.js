const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;