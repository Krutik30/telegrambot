const mongoose = require('mongoose');

// Create a schema for the user information
const userSchema = new mongoose.Schema({
    telegramId: { type: Number, required: true, unique: true },
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);


module.exports = User;