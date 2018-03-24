const commando = require('discord.js-commando');

class RRCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'rr',
      group: 'chat',
      memberName: 'rr',
      description: 'Play russian roulette. Usage: ``>rr``',
    });
  }

  run(msg, args) {
    var random = Math.floor(Math.random() * 6) + 1;
    msg.say('You load a single bullet into your Colt Single Action Army.');
    msg.say('Slapping the cylinder back in place, you spin the cylinder, then place the barrel of the gun up to your head.')
    msg.say('You pull the trigger.');
    if(random >= 2) {
      msg.say('You survive. To the disdain of everyone in the room.');
    } if(random <= 1) {
      msg.say('Your brain is emptied inside out as the bullet travels through your head, leaving nothing but a heap of blood.');
    }
  }
};

module.exports = RRCommand;
