const mongoose = require('mongoose');

const streakSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  last_date: {
    type: Date,
    required: true
  }
});

const Streak = mongoose.model('Streak', streakSchema);

module.exports = Streak;
