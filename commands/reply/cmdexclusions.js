const commando = require('discord.js-commando')

class CMDExclusionsCommand extends commando.Command {
  constructor(client) {
    super(client, {
        name: 'cmdexclusions',
        group: 'reply',
        memberName: 'cmdexclusions',
        description: 'Check the list of commands allowed in all channels. Usage: ``tyl!cmdexclusions``',
    });
  }

  run(msg) {
    msg.author.send('The commands allowed in any text channel (excluding logs) are tyl!roast, -reminder, tyl!arrest, tyl!8ball, and tyl!choose [note: spam rules apply in the other channels]');
  }
};

module.exports = CMDExclusionsCommand;
