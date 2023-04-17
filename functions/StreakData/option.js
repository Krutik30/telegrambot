const newStreak = require('./new');
const updateStreak = require('./update');
const infoStreak = require('./info');

const callToOption = (chatId, bot, Streak) => {
    bot.once('message', async (msg) => {
        const option = msg.text.trim().toLowerCase();

        if (option === 'new streak') {
            // ask user to provide name and initial count for new streak
            newStreak(chatId, bot, Streak);

        } else if (option === 'update streak') {
            // ask user to provide name of the streak they want to update
            updateStreak(chatId, bot, Streak);
        }
        else {
            infoStreak(chatId, bot, Streak);
        }
    })
}

module.exports = callToOption;