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

  async run(message, args) {
    var args = message.content.split(/[ ]+/);
    var argsfinal = args.text;
    let ownerRole = message.guild.roles.find("name", "Tyrant");
    if(message.member.roles.has(ownerRole.id)) {
      if(args.length === 1) {
        message.channel.sendMessage('No argument was defined. Usage: ``>setgame [game]``')
      } else {
        message.client.user.setGame(args.join(" ").substring(8));
      }
    }
  }
};

module.exports = SetGameCommand;
