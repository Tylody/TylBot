const commando = require('discord.js-commando')

class CMDExclusionsCommand extends commando.Command {
  constructor(client) {
    super(client, {
        name: 'cmdexclusions',
        group: 'reply',
        memberName: 'cmdexclusions',
        description: 'Check the list of commands allowed in all channels. Usage: ``>cmdexclusions``',
    });
  }

  async run(message, msg) {
    message.author.sendMessage('The commands allowed in any text channel (excluding logs) are >roast, -reminder, >arrest, >8ball, and >choose [note: spam rules apply in the other channels]');
  }
};

module.exports = CMDExclusionsCommand;
