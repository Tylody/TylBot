const commando = require('discord.js-commando');

class RoastCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'roast',
      group: 'reply',
      memberName: 'roast',
      description: 'Roast a user of your choice. Usage: ``tyl!roast [@Roastee]``',
    });
  }

  async run(msg, args) {
    var args = msg.content.split(/[ ]+/);
    var random = Math.floor(Math.random() * 11) + 1;
    if(args.length === 1) {
      msg.say('Not enough arguments defined. Usage: ``tyl!roast [@Roastee].``')
    } else {
      switch (random) {
        case 1:
          msg.say(msg.author + ' says ' + args[1] + ' is so stupid, he uses commands in #general');
          break;
        case 2:
          msg.say(msg.author + ' says ' + args[1] + ' is such a weaboo, I bet he buys anime girl body pillows on eBay.');
          break;
        case 3:
          msg.say(msg.author + ' says ' + args[1] + ' is such a trap that they hide wild snakes in their dresses.');
          break;
        case 4:
          msg.say(msg.author + ' says ' + args[1] + ' is so careless that they throw twigs at dead rats.');
          break;
        case 5:
          msg.say(msg.author + ' says ' + args[1] + ' is an SJW that yells at children sitting in front of the 99¢ store.');
          break;
        case 6:
          msg.say(msg.author + ' says ' + args[1] + ' is a 3rd wave feminist that wants equality for women while being extremely hypocritical and achieving the opposite, only wanting equality in areas which women aren\'t treated special for being women.');
          break;
        case 7:
          msg.say(msg.author + ' says ' + args[1] + ' never knows when to back off.');
          break;
        case 8:
          msg.say(msg.author + ' says ' + args[1] + ' is so worthless, if they were on life support, ' + msg.author + ' would be happy to unplug it to charge their phone.');
          break;
        case 9:
          msg.say(msg.author + ' says ' + args[1] + ' deserves all of the chocolate chip cookies that turned out to be raisins that they got and will get.');
          break;
        case 10:
          msg.say(msg.author + ' says ' + args[1] + ' deserves to develop an allergy to pizza, ice cream, bacon, and bread.');
          break;
        case 11:
          msg.say(msg.author + ' says ' + args[1] + ' is so stupid that they left their push pop in the locker room.');
          break;
      }
    }
  }
};

module.exports = RoastCommand;
