const commando = require('discord.js-commando');

class PurgeCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'purge',
      group: 'moderation',
      memberName: 'purge',
      description: 'Delete a certain amount of messages. Usage: ``tyl!purge [amount]',
    });
  }

  async run(message, args) {
    var args = message.content.split(/[ ]+/);
    let modRole = message.guild.roles.find("name", "Moderator");
    if(message.member.roles.has(modRole.id)) {
      if(args.length >= 3) {
        message.channel.send('Too many arguments defined. Usage: ``tyl!purge [amount]``')
      } else {
        var msg;
        if(args.length === 1) {
          msg = 2;
        } else {
          msg=parseInt(args[1]) + 1;
        }
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      }
    }
  }
};

module.exports = PurgeCommand;
