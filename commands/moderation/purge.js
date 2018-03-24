const commando = require('discord.js-commando');

class PurgeCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'purge',
      group: 'moderation',
      memberName: 'purge',
      description: 'Delete a certain amount of messages. Usage: ``>purge [amount]``',
    });
  }

  async run(msg, args) {
    var args = msg.content.split(/[ ]+/);
    if(msg.channel.permissionsFor(msg.author).has('MANAGE_MESSAGES')) {
      if(args.length >= 3) {
        msg.say('Too many arguments defined. Usage: ``>purge [amount]``')
      } else {
        let messagecount = parseInt(args[1]);
          msg.channel.fetchMessages({limit: messagecount}).then(messages => msg.channel.bulkDelete(messages));
      }
    } else {
      msg.say('*You do not have sufficient permission to use this command.*')
    }
  }
};

module.exports = PurgeCommand;
