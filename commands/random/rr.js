const commando = require('discord.js-commando');

class RRCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'rr',
      group: 'random',
      memberName: 'rr',
      description: 'Play russian roulette. Usage: ``tyl!rr``',
    });
  }

  async run(message, args) {
    var random = Math.floor(Math.random() * 6) + 1;
    msg.say('You load one bullet into your trusty .357 and spin the barrel.');
    msg.say('You pull the trigger.');
    if(random >= 2) {
      msg.say('You survive. The mob boss gives you the money he owes while grumbling to himself.');
    } if(random <= 1) {
      msg.say('Your brain is emptied inside out as the bullet leaves your head, and it splatters across the wall in a bloody mess. The mob men sitting around the table have a good chuckle at a fool idiotic enough to play Russian Roulette with them. The mob boss loots your corpse, taking your wallet with your id and credit cards, and your .357.');
    }
  }
};

module.exports = RRCommand;
