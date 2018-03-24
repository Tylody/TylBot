const commando = require('discord.js-commando')
const Discord = require('discord.js')

class AvatarCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'avatar',
      group: 'tool',
      memberName: 'avatar',
      description: 'Check someone\'s avatar. Usage: ``>avatar [@Person]``'
    });
  }

  run(msg, args) {
    var args = msg.content.split(/[ ]+/);
    if(args.length === 1) {
      msg.say('Not enough arguments were defined. Usage: ``>avatar [@Person]``')
    } else {
      let chosenMention = msg.mentions.users.first();
//      msg.say(chosenMention.avatarURL);
      const embed = new Discord.RichEmbed()
        .setTitle('Avatar for ' + chosenMention.username)
        .setAuthor(msg.client.user.username, msg.client.user.avatarURL)
        .setColor(14364720) // #db3030
        .setImage(chosenMention.avatarURL)
        .setFooter('Requested by ' + msg.author.username)
        .setTimestamp()
      return msg.embed(embed)
    }
  }
};

module.exports = AvatarCommand;
