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
      message.channel.sendMessage(':8ball: It is certain.')
    } if(roll === 2) {
      message.channel.sendMessage(':8ball: It is decidedly so.')
    } if(roll === 3) {
      message.channel.sendMessage(':8ball: Without a doubt.')
    } if(roll === 4) {
      message.channel.sendMessage(':8ball: Yes, definitely.')
    } if(roll === 5) {
      message.channel.sendMessage(':8ball: As I see it, yes.')
    } if(roll === 6) {
      message.channel.sendMessage(':8ball: Most likely.')
    } if(roll === 7) {
      message.channel.sendMessage(':8ball: Signs point to yes.')
    } if(roll === 8) {
      message.channel.sendMessage(':8ball: Eh, mebby.')
    } if(roll === 9) {
      message.channel.sendMessage(':8ball: Perhaps it is so.')
    } if(roll === 10) {
      message.channel.sendMessage(':8ball: Indubitably true.')
    } if(roll === 11) {
      message.channel.sendMessage(':8ball: Ask again later.')
    } if(roll === 12) {
      message.channel.sendMessage(':8ball: Concentrate and ask again.')
    } if(roll === 13) {
      message.channel.sendMessage(':8ball: The answer is debatable')
    } if(roll === 14) {
      message.channel.sendMessage(':8ball: Cannot predict now.')
    } if(roll === 15) {
      message.channel.sendMessage(':8ball: Uncertain reaction, try again.')
    } if(roll === 16) {
      message.channel.sendMessage(':8ball: Nope.avi')
    } if(roll === 17) {
      message.channel.sendMessage(':8ball: My reply is no.')
    } if(roll === 18) {
      message.channel.sendMessage(':8ball: My sources say no.')
    } if(roll === 19) {
      message.channel.sendMessage(':8ball: Very dubious.')
    } if(roll === 20) {
      message.channel.sendMessage(':8ball: Are you insane?!?!')
    } if(roll === 21) {
      message.channel.sendMessage(':8ball: Well, of course not!')
    } if(roll === 22) {
      message.channel.sendMessage(':8ball: NO - may cause contraction of herpes.')
    } if(roll === 23) {
      message.channel.sendMessage(':8ball: Nein.')
    } if(roll === 24) {
      message.channel.sendMessage(':8ball: Naw fam.')
    } if(roll === 25) {
      message.channel.sendMessage(':8ball: No dice.')
    }
  }
};

module.exports = AteBallCommand;
