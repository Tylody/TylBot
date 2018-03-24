const commando = require('discord.js-commando');

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
          var finalresult = removetags.replace("Your Love Score is ", "")
          if(result >= 80) {
            msg.channel.send({embed: {
              color: 14364720, // #db3030
              description: 'The love score between ' + args[0].substring(10) + ' and ' + args[1] + ' is: \n :black_large_square: :black_large_square: :black_large_square: :black_large_square:  :sparkling_heart: ' + finalresult + ':black_large_square: :black_large_square: :black_large_square: :black_large_square:',
              title: 'Love Calculator'
            }})
          } else if(result >= 60) {
            msg.channel.send({embed: {
              color: 14364720,
              description: 'The love score between ' + args[0].substring(10) + ' and ' + args[1] + ' is: \n :black_large_square: :black_large_square: :black_large_square: :black_large_square:  :heartbeat: ' + finalresult + ':heartbeat: :black_large_square: :black_large_square: :black_large_square: :black_large_square:',
              title: 'Love Calculator'
            }})
          } else if(result >= 40) {
            msg.channel.send({embed: {
              color: 14364720,
              description: 'The love score between ' + args[0].substring(10) + ' and ' + args[1] + ' is: \n :black_large_square: :black_large_square: :black_large_square: :black_large_square:  :heart: ' + finalresult + ':heart: :black_large_square: :black_large_square: :black_large_square: :black_large_square:',
              title: 'Love Calculator'
            }})
          } else if(result >= 20) {
            msg.channel.send({embed: {
              color: 14364720,
              description: 'The love score between ' + args[0].substring(10) + ' and ' + args[1] + ' is: \n :black_large_square: :black_large_square: :black_large_square: :black_large_square:  :gift_heart: ' + finalresult + ':gift_heart: :black_large_square: :black_large_square: :black_large_square: :black_large_square:',
              title: 'Love Calculator'
            }})
          } else if(result >= 0) {
            msg.channel.send({embed: {
              color: 14364720,
              description: 'The love score between ' + args[0].substring(10) + ' and ' + args[1] + ' is: \n :black_large_square: :black_large_square: :black_large_square: :black_large_square:  :broken_heart: ' + finalresult + ':broken_heart: :black_large_square: :black_large_square: :black_large_square: :black_large_square:',
              title: 'Love Calculator'
            }})
          }
          console.log(url);
        } else {
          msg.say('Error: ' + error + '. Please contact Tylody#1781');
        }
      })
    }
  }
};

module.exports = LoveCalcCommand;
