const commando = require('discord.js-commando');

class DaddyCommand extends commando.Command {
  constructor(client) {
    super(client, {
        name: 'daddy',
        group: 'reply',
        memberName: 'daddy',
        description: 'Find out who TylBot\'s daddy is. Usage: ``tyl!daddy``',
    });
  }

  async run(message, msg) {
    message.channel.send('``My daddies are Tylody#1781 (he coded me!), theelkyk#3717 (he helped Tylody!) and GusIsCello#0247 (he\'s hosting me!).``');
  }
};

module.exports = DaddyCommand;
