var botkit = require('botkit');
var controller = botkit.botframeworkbot({debug: true});
var bot = controller.spawn({
    appId: process.env.app_id,
});

controller.hears('hello', 'direct_message', function (bot, message) {
    bot.reply(message, 'Hello yourself');
});