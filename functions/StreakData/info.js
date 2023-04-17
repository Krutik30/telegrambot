const infoStreak = (chatId, bot, Streak) => {
  bot.sendMessage(chatId, 'I will show you an information about your streak?\n what is the name of streak');
  bot.once('message', async (msg) => {
    const streakName = msg.text.trim();

    // find the streak in the database
    const streak = await Streak.findOne({ user_id: chatId, name: streakName });
    if (streak) {
      // prompt the user for the new count
      bot.sendMessage(chatId, `You have completed ${streak.count} days 🔥 in ${streak.name} streak`);
    }
    else {
      bot.sendMessage(chatId, `You have not any streak with the name of ${streak.name} , you can create new with /streak`);
    }
  })
}

module.exports = infoStreak;