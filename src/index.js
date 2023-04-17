const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose');

const Streak = require('../models/streak');
const User = require('../models/user');
const theStreak = require('../functions/StreakData/thestreak');
require('dotenv').config();


// replace YOUR_TELEGRAM_BOT_TOKEN with your actual bot token
const bot = new TelegramBot(process.env.TOKEN, { polling: true });

// connect to your MongoDB database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


// define a callback query listener for the bot
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  const user = await User.findOne({ telegramId: chatId });
  if (!user) {
    const newUser = new User({ telegramId: chatId });
    await newUser.save();
  }
  // check if the message is a text message
  if (msg.text) {
    const text = msg.text.trim().toLowerCase();

    // check if the message is a streak command
    if (text === '/streak') {
      theStreak(chatId, bot, Streak);
    }
  }
});



