const commando = require('discord.js-commando');

class ArrestCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'arrest',
      group: 'reply',
      memberName: 'reply',
      description: 'Arrest someone! Usage: ``>arrest [@Arrestee]|[reason]',
    });
  }

  async run(message, args) {
    var args = message.content.split(/[|]+/);
    if(args.length === 1) {
      message.channel.sendMessage('You have defined too many arguments. Usage: ``>arrest [@Arrestee]|[reason]``');
    } else {
      message.channel.sendMessage('Hands up ' + args[0].substring(8) + ', you\'re under arrest for ' + args[1]);
    }
  }
};

module.exports = ArrestCommand;
