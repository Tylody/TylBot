const commando = require('discord.js-commando');

class RoastCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'roast',
      group: 'reply',
      memberName: 'roast',
      description: 'Roast a user of your choice. Usage: ``>roast [@Roastee]``',
    });
  }

  async run(message, args) {
    var args = message.content.split(/[ ]+/);
    var random = Math.floor(Math.random() * 11) + 1;
    if(args.length === 1) {
      message.channel.sendMessage('Not enough arguments defined. Usage: ``>roast [@Roastee].``')
    } else {
      if(random === 1) {
        message.channel.sendMessage(message.author + ' says ' + args.join("").substring(6) + ' is so stupid, he uses commands in #general')
      } if(random === 2) {
        message.channel.sendMessage(message.author + ' says ' + args.join("").substring(6) + ' is such a weaboo, I bet he buys anime girl body pillows on eBay.')
      } if(random === 3) {
        message.channel.sendMessage(message.author + ' says ' + args.join("").substring(6) + ' is such a trap that they hide wild snakes in their dresses.')
      } if(random === 4) {
        message.channel.sendMessage(message.author + ' says ' + args.join("").substring(6) + ' is so careless that they throw twigs at dead rats.')
      } if(random === 5) {
        message.channel.sendMessage(message.author + ' says ' + args.join("").substring(6) + ' is an SJW that yells at children sitting in front of the 99¢ store.')
      } if(random === 6) {
        message.channel.sendMessage(message.author + ' says ' + args.join("").substring(6) + ' is a 3rd wave feminist that wants equality for women while being extremely hypocritical and achieving the opposite, only wanting equality in areas which women aren\'t treated special for being women.')
      } if(random === 7) {
        message.channel.sendMessage(message.author + ' says ' + args.join("").substring(6) + ' is a coward who will never be the man his mother is.')
      } if(random === 8) {
        message.channel.sendMessage(message.author + ' says ' + args.join("").substring(6) + ' is so worthless, if they were on life support, ' + message.author + ' would be happy to unplug it to charge their phone.')
      } if(random === 9) {
        message.channel.sendMessage(message.author + ' says ' + args.join("").substring(6) + ' deserves all of the chocolate chip cookies that turned out to be raisins that they got and will get.')
      } if(random === 10) {
        message.channel.sendMessage(message.author + ' says ' + args.join("").substring(6) + ' deserves to develop an allergy to pizza, ice cream, bacon, and bread.')
      } if(random === 11) {
        message.channel.sendMessage(message.author + ' says ' + args.join("").substring(6) + ' is so stupid that they left their push pop in the locker room.')
      }
//      } if(random === ) {
//        message.channel.sendMessage(message.author + ' says ' + args.join("").substring(6) + ' ')
//      }
    }
  }
};

module.exports = RoastCommand;
