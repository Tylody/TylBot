const commando = require('discord.js-commando');

class SetGameCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'setgame',
      group: 'moderation',
      memberName: 'setgame',
      description: 'Owner only. Usage: ``tyl!setgame [game]``',
    });
  }

  async run(msg, args) {
    var args = msg.content.split(/[ ]+/);
    var argsfinal = args.text;
    if(msg.member.roles.has('305836490641113099')) {
      if(args.length === 1) {
        msg.say('No argument was defined. Usage: ``tyl!setgame [game]``')
      } else {
        msg.client.user.setGame(args.join(" ").substring(11));
      }
    } else {
      msg.channel.send('*You do not have sufficient permission to use that command.*')
    }
  }
};

module.exports = SetGameCommand;
