
const newStreak = (chatId, bot, Streak) => {
    bot.sendMessage(chatId, 'What do you want to call your new streak?');

    // wait for the user to provide the streak name
    bot.once('message', async (msg) => {
        const streakName = msg.text.trim();

        // prompt the user for the initial count
        bot.sendMessage(chatId, `Great! You want to call your streak "${streakName}". How many days have you completed so far?`);

        // wait for the user to provide the initial count
        bot.once('message', async (msg) => {
            const streakCount = parseInt(msg.text.trim());

            if (isNaN(streakCount)) {
                bot.sendMessage(chatId, 'Sorry, that doesn\'t look like a number. Please try again.');
            } else {
                // create a new streak for the user
                const newStreak = new Streak({ user_id: chatId, name: streakName, count: streakCount, last_date: new Date() });
                await newStreak.save();
                bot.sendMessage(chatId, `You have started a new streak called ${newStreak.name}!`);
            }
        });
    });
}

module.exports = newStreak;