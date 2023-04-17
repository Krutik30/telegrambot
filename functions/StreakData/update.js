const updateStreak = (chatId, bot, Streak) => {
    bot.sendMessage(chatId, 'What is the name of the streak you want to update?');

    // wait for the user to provide the streak name
    bot.once('message', async (msg) => {
        const streakName = msg.text.trim();

        // find the streak in the database
        const streak = await Streak.findOne({ user_id: chatId, name: streakName });

        if (streak) {
            // prompt the user for the new count
            bot.sendMessage(chatId, `How many days have you completed for ${streak.name} so far?`);

            // wait for the user to provide the new count
            bot.once('message', async (msg) => {
                const streakCount = parseInt(msg.text.trim());

                if (isNaN(streakCount)) {
                    bot.sendMessage(chatId, 'Sorry, that doesn\'t look like a number. Please try again.');
                } else {
                    // update the streak count and last date
                    streak.count = streakCount;
                    streak.last_date = new Date();
                    await streak.save();
                    bot.sendMessage(chatId, `You have updated the ${streak.name} streak to ${streak.count} days!`);
                }
            })
        }
    })
}

module.exports = updateStreak;