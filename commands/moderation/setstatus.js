const commando = require('discord.js-commando');

class SetStatusCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'setstatus',
      group: 'moderation',
      memberName: 'setstatus',
      description: 'Owner only. Usage: ``>setstatus [online|away|dnd]``',
    });
  }

  async run(msg, args) {
    function error() {
      return console.log('error')
    }
    var args = msg.content.split(/[ ]+/);
    if(msg.author.id === '248285489902256128') {
      if(args.length === 1) {
        msg.say('No argument was defined. Usage: ``>setstatus [online|away]``')
      } else if(args[1] === 'online') {
        msg.client.user.setStatus('online')
        msg.say('Set status to ``online``.')
      } else if(args[1] === 'away') {
        msg.client.user.setStatus('idle');
        msg.say('Set status to ``away``.');
      } else if(args[1] === 'dnd') {
        msg.client.user.setStatus('dnd');
        msg.say('Set status to ``dnd``.');
      } else if(args[1] === 'invisible') {
        msg.client.user.setStatus('invisible');
        msg.say('Set status to ``invisible``.');
      } else {
        msg.say('An invalid argument was defined.')
      }
    } else {
      msg.say('*You do not have sufficient permission to use this command*')
    }
  }
};

module.exports = SetStatusCommand;
