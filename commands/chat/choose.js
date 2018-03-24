const commando = require('discord.js-commando');

class ChooseCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'choose',
      group: 'chat',
      memberName: 'choose',
      description: 'Randomly choose between different things. Usage: ``>choose [thing1]|[thing2]|[...]``',
    });
  }

  async run(msg, args) {
    function randomChoice(amount) {
      return Math.floor(Math.random() * amount);
    };
    var random = Math.floor(Math.random() * args.length) + 1;
    var args = msg.content.split(/[|]+/);
    if(args.length === 1) {
      msg.say('Not enough arguments defined.  Usage: ``>choose [thing1]|[thing2]|[...]``')
    } else {
      var choice = randomChoice(args.length)
      var final = args[choice].replace("<choose ", "")
      var i = args.length - 1
      var joinedargs = args.join(", ").substring(8)
      var options = joinedargs.replace(args[i], "")
      msg.say(':thinking: ' + msg.author + ' asks: ' + options + 'or ' + args[i] + '?' + '\n :scales: I have chosen: ' + final + '.');
    }
  }
};

module.exports = ChooseCommand;
