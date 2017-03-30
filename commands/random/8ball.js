const commando = require('discord.js-commando');

class AteBallCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: '8ball',
      group: 'random',
      memberName: '8ball',
      description: 'Ask the magic 8 ball a question. Usage: ``>8ball [question]``',
    });
  }

  async run(message, args) {
    var args = message.content.split(/[ ]+/);
    var roll = Math.floor(Math.random() * 25) + 1;
    if(roll === 1) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: It is certain.')
    } if(roll === 2) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: It is decidedly so.')
    } if(roll === 3) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Without a doubt.')
    } if(roll === 4) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Yes, definitely.')
    } if(roll === 5) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: As I see it, yes.')
    } if(roll === 6) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Most likely.')
    } if(roll === 6) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Signs point to yes.')
    } if(roll === 8) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Eh, mebby.')
    } if(roll === 9) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Perhaps it is so.')
    } if(roll === 10) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Indubitably true.')
    } if(roll === 11) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Ask again later.')
    } if(roll === 12) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Concentrate and ask again.')
    } if(roll === 13) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: The answer is debatable')
    } if(roll === 14) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Cannot predict now.')
    } if(roll === 15) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Uncertain reaction, try again.')
    } if(roll === 16) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Nope.avi')
    } if(roll === 17) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: My reply is no.')
    } if(roll === 18) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: My sources say no.')
    } if(roll === 19) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Very dubious.')
    } if(roll === 20) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Are you insane?!?!')
    } if(roll === 21) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Well, of course not!')
    } if(roll === 22) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: NO - may cause contraction of herpes.')
    } if(roll === 23) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Nein.')
    } if(roll === 24) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: Naw fam.')
    } if(roll === 25) {
      message.channel.sendMessage(':thinking: ' + message.author + ' asks: ' + args.join(" ").substring(7) + '\n:8ball: Answer: No dice.')
    }
  }
};

module.exports = AteBallCommand;
