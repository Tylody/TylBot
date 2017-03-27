const commando = require('discord.js-commando');

class DaddyCommand extends commando.Command {
  constructor(client) {
    super(client, {
        name: 'daddy',
        group: 'reply',
        memberName: 'daddy',
        description: 'Find out who TylBot\'s daddy is.',
    });
  }

  async run(message, msg) {
    message.channel.sendMessage('``My daddies are Tylody#1781 (he coded me!) and GusIsCello#0247 (he\'s hosting me!).``');
  }
};

module.exports = DaddyCommand;
