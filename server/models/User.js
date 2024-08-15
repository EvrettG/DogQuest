const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Game = require('./Game');

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  SaveGame: [Game.schema
  ],
});

// Set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  // Check if return needed before await
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
