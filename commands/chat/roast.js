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
          msg.say(msg.author + ' says ' + n + ' plays Fortnite Mobile.');
          break;
        case 2:
          msg.say(msg.author + ' says ' + n + ' plays PUBG Mobile.');
          break;
        case 3:
          msg.say(msg.author + ' says ' + n + ' sent "You just made me lose my erection" to his parents.');
          break;
        case 4:
          msg.say(msg.author + ' says ' + n + ' throws twigs at dead rats.');
          break;
        case 5:
          msg.say(msg.author + ' says ' + n + ' is an SJW that yells at children sitting in front of the 99¢ store.');
          break;
        case 6:
          msg.say(msg.author + ' says ' + n + ' doesn\'t look both ways before crossing the street.');
          break;
        case 7:
          msg.say(msg.author + ' says ' + n + ' never knows when to back off.');
          break;
        case 8:
          msg.say(msg.author + ' says ' + n + ' watches TogetherTube at 3 in the morning.');
          break;
        case 9:
          msg.say(msg.author + ' says ' + n + ' is boosted.');
          break;
        case 10:
          msg.say(msg.author + ' says ' + n + ' did not give them the pasta that they promised them they\'ve been waiting for it and ' + n + ' better give it to them soon they swear they want it so bad right now they\'ve been craving pasta all night and that ' + n + ' should just at least give them pasta tomorrow they really want pasta please pasta.');
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
