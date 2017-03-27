const commando = require('discord.js-commando');

class SayCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'say',
      group: 'reply',
      memberName: 'say',
      description: '*ADMIN ONLY*'
    });
  }

  async run(message, msg) {
    var args = message.content.split(/[ ]+/);
    if(hasRole(message.member, "Tyrant Hoang")) {
      if(args.length === 1) {
        message.channel.sendMessage('No arguments defined.');
      } else {
          message.channel.sendMessage(args.join("").substring(5));
      }
    } else {
      message.channel.sendMessage('*You do not have sufficient permission to use that command.*');
    }
  }
};

module.exports = SayCommand;
