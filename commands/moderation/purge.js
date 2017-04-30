const commando = require('discord.js-commando');

class PurgeCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'purge',
      group: 'moderation',
      memberName: 'purge',
      description: 'Purges messages. Usage: ``>purge [number of messages to purge]``',
    });
  }
  async run(message, args) {
    var args = message.content.split(/[ ]+/);
    let modRole = message.guild.roles.find("name", "Moderator");
    if(message.member.roles.has(modRole.id)) {
      if(args.length >= 3) {
        message.channel.sendMessage('Too many arguments were defined.  Usage: ``>purge [#]')
      } else {
        var msg;
        if(args.length === 1) {
          msg=2;
        } else {
          msg=parseInt(args[1]) + 1;
        }
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      }
    } else {
      message.channel.sendMessage('*You do not have sufficient permission to use that command.*')
    }
  }
};

module.exports = PurgeCommand;
