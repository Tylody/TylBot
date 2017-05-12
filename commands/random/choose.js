const commando = require('discord.js-commando');

class ChooseCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'choose',
      group: 'random',
      memberName: 'choose',
      description: 'Randomly choose between different things. Usage: ``tyl!choose [thing1]|[thing2]|[...]``',
    });
  }

  async run(msg, args) {
    function randomChoice(amount) {
      return Math.floor(Math.random() * (amount - 1)) + 1
    };
    var random = Math.floor(Math.random() * args.length) + 1;
    var args = msg.content.split(/[|]+/);
    if(args.length === 1) {
      msg.say('Not enough arguments defined.  Usage: ``tyl!choose [thing1]|[thing2]|[...]``')
    } if(random === 1) {
      msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(11) + '\n :scales: I have chosen: ' + args[0].substring(11) + '.')
    } else {
      msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(11) + '\n :scales: I have chosen: ' + args[randomChoice(args.length)] + '.')
    }
  }
};

module.exports = ChooseCommand;
