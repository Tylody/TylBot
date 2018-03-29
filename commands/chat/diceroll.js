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
    let roll = Math.floor(Math.random() * args[1]) + 1;
    let parsed1 = parseInt(args[1])
    let parsed2 = parseInt(args[2])
/*    function minroll(min, max) {
      var diff = max - min
      var unadded = Math.floor(Math.random() * diff) + 1;
      return unadded + min
    }
*/ // obsolete
    var minroll = (min, max) => Math.round(Math.random() * (max - min)) + min
    if(args.length === 2) {
      msg.say(':game_die: You rolled ' + roll)
    } else if(args.length === 3 && parsed2 >= parsed1) {
      msg.say(':game_die: You rolled ' + minroll(parsed1, parsed2))
    } else if(args.length === 3 && parsed2 < parsed1) {
      msg.say('Incorrect usage of command. Max number has to be greater or equal to min number.')
    } else if(args.length > 2 || args.length < 3) {
      msg.say('Incorrect amount of arguments defined. Usage: ``>roll [max number]`` OR ``>roll [min number] [max number]``')
    }
  }
};

module.exports = DiceRollCommand;
