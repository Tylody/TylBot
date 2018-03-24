const commando = require('discord.js-commando');
const Discord = require('discord.js')

class UrbanCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'urban',
      group: 'tool',
      memberName: 'urban',
      description: 'Search urban dictionary for a definition. Usage: ``>urban [term]``',
    });
  }

  async run(msg, args) {
    var args = msg.content.split(/[ ]+/);
    var request = require('request'),
      cheerio = require('cheerio'),
      url = "https://www.urbandictionary.com/define.php?term=" + args.join("+").substring(7);
    if(args.length === 1) {
      msg.say('Not enough arguments defined. Usage: ``>urban [term]``');
    } else {
      request(url, function (error, response, body) {
        if(!error) {
          var $def = cheerio.load(body),
            definition = $def("[class='def-panel'] .meaning").html();
          var $use = cheerio.load(body),
            usages = $use("[class='def-panel'] .example").html();
          $def("body").html(addquotesdef);
          if(usages == null) {
            msg.channel.send({embed: {
              color: 16117289,
              description: '\"**__' + args.join(" ").substring(7) + '__**\" is not yet defined on UrbanDictionary.'
            }})
          } else {
            var removetagsdef = definition.replace(/<[^>]*>/g,'');
            var addapostrophesdef = removetagsdef.replace(/&apos;/gi, "\'"); // fix this
            var addquotesdef = addapostrophesdef.replace(/&quot;/gi, "\"");
            var removetagsuse = usages.replace(/<[^>]*>/g,'');
            var addapostrophesuse = removetagsuse.replace(/&apos;/gi, "\'"); // fix this
            var addquotesuse = addapostrophesuse.replace(/&quot;/gi, "\"");
            const embed = new Discord.RichEmbed()
              .setTitle('**__' + args.join(" ").substring(7) + '__**')
              .setAuthor(msg.client.user.username, msg.client.user.avatarURL)
              .setColor(16117289)
              .setDescription(addquotesdef)
              .addField('**__Usages__**', addquotesuse)
              .setFooter('http://urbandictionary.com')
              .setTimestamp()
            return msg.embed(embed)
          }
        } else {
          msg.say('Error: ' + error + '. Please contact Tylody#1781');
        }
      })
    }
  }
};

module.exports = UrbanCommand;
