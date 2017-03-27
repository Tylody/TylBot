const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
  constructor(client) {
    super(client, {
        name: 'roll',
        group: 'random',
        memberName: 'roll',
        description: 'Roll a dice. Usage: >roll [max number]',
    });
  }

  async run(message, args) {
    var args = message.content.split(/[ ]+/);
    var roll = Math.floor(Math.random() * args[1]) + 1;
    if(args.length === 1) {
      message.channel.sendMessage('Not enough arguments defined. Usage: ``>roll [max number]``')
    } else {
      message.channel.sendMessage('You rolled ' + roll)
    }
  }
};

module.exports = DiceRollCommand;
