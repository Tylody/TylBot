const commando = require('discord.js-commando');

class SetGameCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'setgame',
      group: 'moderation',
      memberName: 'setgame',
      description: 'Owner only. Usage: ``>setgame [game]``',
    });
  }

  async run(msg, args) {
    var args = msg.content.split(/[ ]+/);
    var argsfinal = args.text;
    if(msg.member.roles.has('305836490641113099')) {
      if(args.length === 1) {
        msg.say('No argument was defined. Usage: ``>setgame [game]``')
      } else if(!error) {
        msg.client.user.setGame(args.join(" ").substring(9));
        msg.say('Playing status successfully set to ``' + args.join(" ").substring(9) + '``');
      } else {
        msg.say('An error has occurred.')
      }
    } else {
      msg.channel.send('*You do not have sufficient permission to use that command.*')
    }
  }
};

module.exports = SetGameCommand;
