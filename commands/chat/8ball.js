const commando = require('discord.js-commando');

class AteBallCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: '8ball',
      group: 'chat',
      memberName: '8ball',
      description: 'Ask the magic 8 ball a question. Usage: ``>8ball [question]``',
    });
  }

  async run(msg, args) {
    var args = msg.content.split(/[ ]+/);
    var roll = Math.floor(Math.random() * 25) + 1;
    switch (roll) {
      case 1:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: It is certain.');
        break;
      case 2:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: It is decidedly so.');
        break;
      case 3:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Without a doubt.');
        break;
      case 4:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Yes, definitely.')
        break;
      case 5:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: As I see it, yes.')
        break;
      case 6:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Most likely.');
        break;
      case 7:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Signs point to yes.');
        break;
      case 8:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Eh, mebby.');
        break;
      case 9:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Perhaps it is so.');
        break;
      case 10:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Indubitably true.');
        break;
      case 11:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Ask again later.');
        break;
      case 12:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Concentrate and ask again.');
        break;
      case 13:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: The answer is debatable.');
        break;
      case 14:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Cannot predict now.');
        break;
      case 15:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Uncertain reaction, try again.');
        break;
      case 16:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Nope.avi');
        break;
      case 17:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: My reply is no.');
        break;
      case 18:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: My sources say no.');
        break;
      case 19:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Very dubious.');
        break;
      case 20:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Are you insane?!?!');
        break;
      case 21:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Well, of course not!');
        break;
      case 22:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: NO - may cause contraction of herpes.');
        break;
      case 23:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Nein.');
        break;
      case 24:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Naw fam.');
        break;
      case 25:
        msg.say(':thinking: ' + msg.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: No dice.');
        break;
    }
  }
};

module.exports = AteBallCommand;
