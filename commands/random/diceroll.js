const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
  constructor(client) {
    super(client, {
        name: 'roll',
        group: 'random',
        memberName: 'roll',
        description: 'Roll a dice. Usage: tyl!roll [max number] [opt: # of dice to roll]',
    });
  }

  async run(msg, args) {
    var args = msg.content.split(/[ ]+/);
    var roll = Math.floor(Math.random() * args[1]) + 1;
    if(args.length === 1) {
      msg.say('No arguments defined. Usage: ``tyl!roll [max number] [opt: # of dice to roll]``')
    } else {
      if(args.length === 2) {
        msg.say(':game_die: You rolled ' + roll)
      }
    }
  }
};

module.exports = DiceRollCommand;
