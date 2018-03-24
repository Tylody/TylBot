const commando = require('discord.js-commando');

class SayCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'say',
      group: 'moderation',
      memberName: 'say',
      description: '*ADMIN ONLY*'
    });
  }

  async run(msg) {
    var args = msg.content.split(/[ ]+/);
//    let ownerRole = msg.guild.roles.find("name", "Tyrant Hoang"); // deprecated
// if(msg.member.roles.has(ownerRole.id)) // deprecated
    if(msg.channel.permissionsFor(msg.author).has('MANAGE_MESSAGES')) {
      if(args.length === 1) {
        msg.say('No arguments defined.');
      } else {
          msg.say(args.join(" ").substring(5));
      }
    } else {
      msg.say('*You do not have sufficient permission to use that command.*');
    }
  }
};

module.exports = SayCommand;
