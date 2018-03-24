const commando = require('discord.js-commando');

class RoastCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'roast',
      group: 'chat',
      memberName: 'roast',
      description: 'Roast a user of your choice. Usage: ``>roast [@Roastee]``',
    });
  }

  async run(msg, args) {
    var args = msg.content.split(/[ ]+/);
    var random = Math.floor(Math.random() * 12) + 1;
    if(args.length === 1) {
      msg.say('Not enough arguments defined. Usage: ``>roast [@Roastee].``')
    } else {
      let n = args[1]
      switch (random) {
        case 1:
          msg.say(msg.author + ' says ' + n + ' is so stupid, he uses commands in #general');
          break;
        case 2:
          msg.say(msg.author + ' says ' + n + ' is such a weaboo, I bet he buys anime girl body pillows on eBay.');
          break;
        case 3:
          msg.say(msg.author + ' says ' + n + ' is such a trap that they hide wild snakes in their dresses.');
          break;
        case 4:
          msg.say(msg.author + ' says ' + n + ' throws twigs at dead rats.');
          break;
        case 5:
          msg.say(msg.author + ' says ' + n + ' is an SJW that yells at children sitting in front of the 99¢ store.');
          break;
        case 6:
          msg.say(msg.author + ' says ' + n + ' is a 3rd wave feminist that wants equality for women while being extremely hypocritical and achieving the opposite, only wanting equality in areas which women aren\'t treated special for being women.');
          break;
        case 7:
          msg.say(msg.author + ' says ' + n + ' never knows when to back off.');
          break;
        case 8:
          msg.say(msg.author + ' says ' + n + ' watches TogetherTube at 3 in the morning.');
          break;
        case 9:
          msg.say(msg.author + ' says ' + n + ' throws body bags into crowded areas.');
          break;
        case 10:
          msg.say(msg.author + ' says ' + n + ' doesn\'t cable tie civilians, and instead, opts to shoot them.');
          break;
        case 11:
          msg.say(msg.author + ' says ' + n + ' is so stupid that they left their push pop in the locker room.');
          break;
        case 12:
          msg.say(msg.author + ' says ' + n + '\'s helmet doesn\'t protect them because they\'re a nerd.')
        case 13:
          msg.say(msg.author + ' says ' + n + '\'s a poor Chinese farmer that pirates things.')
      }
    }
  }
};

module.exports = RoastCommand;
