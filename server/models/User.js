const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const SaveGame = require('./SaveGame');

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  SaveGame: [
    {
      type: Schema.Types.ObjectId,
      ref: 'SaveGame',
    },
  ],
});

// Set up pre-save middleware to create password
userSchema.pre('saveGame', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  // Check if return needed before await
  await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
