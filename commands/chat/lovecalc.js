const commando = require('discord.js-commando');
const Discord = require('discord.js');

class LoveCalcCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'lovecalc',
      group: 'chat',
      memberName: 'lovecalc',
      description: 'Use the lovecalculator (lovecalculator.com). Usage: ``>lovecalc [name 1],[name 2]``',
      throttling: {
        usages: 2,
        duration: 3
      },
    });
  }

  async run(msg, args) {
    var args = msg.content.split(/[,]+/);
    var request = require('request'),
      cheerio = require('cheerio'),
      url = "http://lovecalculator.love/results/" + args[0].substring(10) + "-and-" + args[1];
    if(args.length <= 1) {
      msg.say('Not enough arguments defined. Usage: ``>lovecalc [name 1],[name2]``');
    } else {
      request(url, function (error, response, body) {
        if(!error && args.length > 1) {
          var $ = cheerio.load(body),
            result = $("[id='love-score']").html();
          var removetags = result.replace(/<[^>]*>/g, '');
          var finalresult = removetags.replace("Your Love Score is ", "");
          var heartfinal = finalresult.replace("%","");
          if(heartfinal >= 80) {
            var heart = ':sparkling_heart:'
          } else if(heartfinal >= 60 && heartfinal < 80) {
            var heart = ':heartbeat:'
          } else if(heartfinal >= 40 && heartfinal < 60) {
            var heart = ':heart:'
          } else if(heartfinal >= 20 && heartfinal < 40) {
            var heart = ':gift_heart:'
          } else if(heartfinal >= 0 && heartfinal < 20) {
            var heart = ':broken_heart:'
          };
          const embed = new Discord.RichEmbed()
            .setTitle('Love Calculator')
            .setColor(14364720) // #db3030
            .setDescription('The love score between ' + args[0].substring(10) + ' and ' + args[1] + ' is:')
            .addField(':black_large_square: :black_large_square: :black_large_square: :black_large_square: ' + heart + finalresult + heart + ' :black_large_square: :black_large_square: :black_large_square: :black_large_square:', '~~---------------------------------------------------------~~')
            .setFooter('http://lovecalculator.love/')
            .setTimestamp()
          return msg.embed(embed);
          console.log(url);
        } else {
          msg.say('Error: ' + error + '. Please contact Tylody#1781');
        }
      })
    }
  }
};

module.exports = LoveCalcCommand;
