const commando  = require('discord.js-commando');
const config = require('./config.json');
const client = new commando.Client({
  owner: '248285489902256128',
  commandPrefix: config.commandPrefix,
  unknownCommandResponse: false,
});

client.registry.registerGroup('random', 'Random');
client.registry.registerGroup('reply', 'Reply');
client.registry.registerGroup('moderation', 'Moderation');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

client.on('ready', () => {
    console.log('TylBot EXPERIMENTAL is ONLINE')
});

//client.on('ready', () => {
//  client.user.setGame(config.commandPrefix + 'help')
//})

client.on('message', message => {
  var deletewords = ['tyl!say ', 'tyl!roast ', 'tyl!8ball ','tyl!arrest '];
  var i = 0
  while (i < deletewords.length) {
    if(message.content.toLowerCase().includes(deletewords[i])) {
      message.delete();
    }
    i++;
  }
});

process.on('unhandledRejection', err => console.error(`Uncaught Promise Error: \n${err.stack}`));
client.login(config.token);
