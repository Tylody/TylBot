const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
  constructor(client) {
    super(client, {
        name: 'roll',
        group: 'chat',
        memberName: 'roll',
        description: 'Roll a dice. Usage: ``>roll [max number]`` OR ``>roll [min number] [max number]``',
    });
  }

  async run(msg, args) {
    var args = msg.content.split(/[ ]+/);
    var roll = Math.floor(Math.random() * args[1]) + 1;
    function minroll(min, max) {
      var diff = max - min
      var unadded = Math.floor(Math.random() * diff) + 1;
      return unadded + min
    }
    if(args.length === 2) {
      msg.say(':game_die: You rolled ' + roll)
    } else if(args.length === 3) {
      var parsed1 = parseInt(args[1])
      var parsed2 = parseInt(args[2])
      msg.say(':game_die: You rolled ' + minroll(parsed1, parsed2))
    } else {
      msg.say('Incorrect amount of arguments defined. Usage: ``>roll [max number]`` OR ``>roll [min number] [max number]``')
    }
  }
};

module.exports = DiceRollCommand;
