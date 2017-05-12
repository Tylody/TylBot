const commando = require('discord.js-commando');

class ArrestCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'arrest',
      group: 'reply',
      memberName: 'reply',
      description: 'Arrest someone! Usage: ``tyl!arrest [@Arrestee]|[reason]``',
    });
  }

  async run(msg, args) {
    var args = msg.content.split(/[|]+/);
    if(args.length === 1) {
      msg.say('You have defined too many arguments. Usage: ``tyl!arrest [@Arrestee]|[reason]``');
    } else {
      msg.say('Hands up ' + args[0].substring(11) + ', ' + msg.author + ' is arresting you for ' + args[1]);
    }
  }
};

module.exports = ArrestCommand;
