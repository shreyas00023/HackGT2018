var botkit = require('botkit');
var controller = botkit.botframeworkbot({debug: true});
var bot = controller.spawn({
    appId: process.env.app_id,
});
controller.on();


controller.hears('hello', 'direct_message', function (bot, message) {
    bot.reply(message, 'Hello yourself');
});

controller.middleware.receive.use(function(bot, message, next) {

    // log it
    console.log('RECEIVED: ', message);

    // modify the message
    message.logged = true;

    // continue processing the message
    next();

});