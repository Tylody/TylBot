const commando = require('discord.js-commando');

function hasRole(mem, role) {
    if (pluck(mem.roles).includes(role)) {
        return true;
    } else {
        return false;
    }
}

class PurgeCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'purge',
      group: 'moderation',
      memberName: 'purge',
      description: 'Purges messages. Usage: ``>purge [number of messages to purge]``',
    });
  }
  async run(message, args) {
    var args = message.content.split(/[ ]+/);
    if(hasRole(message.member, "Moderator") || hasRole(message.member, "Tyrant Hoang")){
      if(args.length >= 3){
        message.channel.sendMessage('Too many arguments were defined. Usage: ``>purge [number of messages to delete]``')
      } else {
        if(args.length === 1) {
          message.channel.sendMessage('Not enough arguments defined. Usage: ``>purge [number of messages to purge]``')
        } else {
          msg=parseInt(args[1]) + 1;
      }
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      }
    }
  }
};

module.exports = PurgeCommand;
