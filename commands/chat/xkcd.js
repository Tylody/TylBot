const commando = require('discord.js-commando');

class XKCDCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'xkcd',
      group: 'chat',
      memberName: 'xkcd',
      description: 'Have TylBot pull up a random xkcd comic from xkcd.com. Usage: ``>xkcd``',
    });
  }

  async run(msg) {
    msg.say('http://xkcd.com/' + Math.floor((Math.random() * 1970) + 1))
  }
};

module.exports = XKCDCommand;
