const commando = require('discord.js-commando');

class RRCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'rr',
      group: 'random',
      memberName: 'rr',
      description: 'Play russian roulette.',
    });
  }

  async run(message, args) {
    var random = Math.floor(Math.random() * 6) + 1;
    message.channel.sendMessage('You load one bullet into your trusty .357 and spin the barrel.');
    message.channel.sendMessage('You pull the trigger.');
    if(random >= 2) {
      message.channel.sendMessage('You survive. The mob boss gives you the money he owes while grumbling to himself.');
    } if(random <= 1) {
      message.channel.sendMessage('You are dead. The mob boss loots your corpse, taking your wallet with your id and credit cards, and your .357.');
    }
  }
};

module.exports = RRCommand;
