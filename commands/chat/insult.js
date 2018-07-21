const commando = require('discord.js-commando');

class InsultCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'insult',
      group: 'chat',
      memberName: 'insult',
      description: 'Insult a user of your choice. Usage: ``>insult [@Insultee]``',
    });
  }

  async run(msg, args) {
    var args = msg.content.split(/[ ]+/);
    var random = Math.floor(Math.random() * 15) + 1;
    if(args.length === 1) {
      msg.say('Not enough arguments defined. Usage: ``>insult [@Insultee].``')
    } else {
      let n = args[1]
      let preshit = msg.author + ' says ' + n
      switch (random) {
        case 1:
          msg.say(preshit + ' plays Fortnite Mobile.');
          break;
        case 2:
          msg.say(preshit + ' plays PUBG Mobile.');
          break;
        case 3:
          msg.say(preshit + ' sent "You just made me lose my erection" to his parents.');
          break;
        case 4:
          msg.say(preshit + ' throws twigs at dead rats.');
          break;
        case 5:
          msg.say(preshit + ' is an assuming, pompous prick that yells at children sitting in front of the 99¢ store.');
          break;
        case 6:
          msg.say(preshit + ' doesn\'t look both ways before crossing the street.');
          break;
        case 7:
          msg.say(preshit + ' never knows when to back off.');
          break;
        case 8:
          msg.say(preshit + ' watches TogetherTube at 3 in the morning.');
          break;
        case 9:
          msg.say(preshit + ' is boosted.');
          break;
        case 10:
          msg.say(preshit + ' did not give them the pasta that they promised them they\'ve been waiting for it and ' + n + ' better give it to them soon they swear they want it so bad right now they\'ve been craving pasta all night and that ' + n + ' should just at least give them pasta tomorrow they really want pasta please pasta.');
          break;
        case 11:
          msg.say(preshit + ' is so stupid that they left their push pop in the locker room.');
          break;
        case 12:
          msg.say(preshit + '\'s helmet doesn\'t protect them because they\'re a nerd.')
        case 13:
          msg.say(preshit + '\'s a poor Chinese farmer that pirates things.')
        case 14:
          msg.say(preshit + ' stole the Pope and refuses to return him.')
          break;
        case 15:
          msg.say(preshit + ' is not one of Dad\'s childs.')
      }
    }
  }
};

module.exports = InsultCommand;
