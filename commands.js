const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

module.exports = {
    Ping: require('./ping'),
  };

  module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(msg, args) {
      msg.reply('pong');
      msg.channel.send('pong');
    },
  };