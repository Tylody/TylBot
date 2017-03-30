const commando  = require('discord.js-commando');
const client = new commando.Client({
  owner: 'Tylody#1781',
  commandPrefix: '<'
});

client.registry.registerGroup('random', 'Random');
client.registry.registerGroup('reply', 'Reply');
client.registry.registerGroup('moderation', 'Moderation');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

function commandIs(str, msg) {
    return msg.content.toLowerCase().startsWith(">" + str)
}

function pluck(array) {
    return array.map(function (item) { return item["name"]; });
}

function hasRole(mem, role) {
    if (pluck(mem.roles).includes(role)) {
        return true;
    } else {
        return false;
    }
}

client.on('ready', () => {
    console.log('Tylbot EXPERIMENTAL is ONLINE');
});

client.on('ready', () =>{
  client.user.setGame('very unstably.')
});

client.on('message', message => {
    var deletewords = ['>say ', '>roast ', '>8ball ','>arrest '];
    var i = 0
    while (i < deletewords.length) {
        if (message.content.toLowerCase().includes(deletewords[i])) {
            message.delete();
        }
        i++;
    }
});

client.on('message', message => {
  var args = message.content.split(/[ ]+/);
  if(commandIs("say", message)){
      if (hasRole(message.member, "Tyrant Hoang") || hasRole(message.member, "admin")) {
          if (args.length === 1) {
              message.channel.sendMessage('No argument was defined. Usage: ``>say [message to say]``');
          } else {
              message.channel.sendMessage(args.join(" ").substring(5));
          }
      } else {
          message.channel.sendMessage('*You do not have sufficient permission to use that command.*');
      }
  }
  if(commandIs("purge", message)){
      if(hasRole(message.member, "Moderator") || hasRole(message.member, "Tyrant Hoang") || hasRole(message.member, "admin")){
          if(args.length >= 3){
              message.channel.sendMessage('Too many arguments were defined. Usage: ``>purge [number of messages to delete]');
          } else {
              var msg;
              if(args.length === 1){
                  msg=2;
              } else {
                  msg=parseInt(args[1]) + 1;
              }
              message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
          }
      } else {
          message.channel.sendMessage('*You do not have sufficient permission to use that command.*')
      }
  }
});

client.login('Mjk1OTUyMDE4NDAzNDkxODUx.C7rKVA.2_V6mQrzHGUy_he5JlqvRk_gewQ');
