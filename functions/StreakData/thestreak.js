const callToOption = require('./option');


const theStreak = (chatId, bot, Streak) => {
    // give user options for creating a new streak, updating an existing streak, or getting streak information
    bot.sendMessage(chatId, 'Do you want to create a new streak, update an existing streak, or get streak information?', {
        reply_markup: {
            keyboard: [['New streak'], ['Update streak'], ['Streak info']],
            one_time_keyboard: true,
        },
    });
    // wait for the user to select an option
    callToOption(chatId, bot, Streak);
}

module.exports = theStreak;