const schedule = require('node-schedule');

schedule.scheduleJob('6 * * *', async () => {
    const users = await User.find({});
    const message = 'Good morning!';
    users.forEach(user => {
        bot.sendMessage(user.telegramId, message);
    });
});

