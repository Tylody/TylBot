const commando  = require('discord.js-commando');
const config = require('./config.json');
const client = new commando.Client({
  owner: '248285489902256128',
  commandPrefix: config.commandPrefix,
  unknownCommandResponse: false,
});

client.registry.registerGroup('chat', 'Chat');
client.registry.registerGroup('tool', 'Tool');
client.registry.registerGroup('moderation', 'Moderation');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

client.on('ready', () => {
    console.log('TylBot EXPERIMENTAL is ONLINE')
});

client.on('message', message => {
  let deletewords = ['>say ', '>roast ', '>8ball ','>arrest ', '>choose '];
  let i = 0
  while (i < deletewords.length) {
    if(message.content.toLowerCase().startsWith(deletewords[i])) {
      message.delete();
    }
    i++;
  }
});

client.on('message', message => {
  var args = message.content.split(/[ ]+/);
  if(message.author.bot) return;
  let cont = message.content
  if(cont.toLowerCase() === 'oh') {
    message.channel.send('bama')
  } else if(cont.toLowerCase() === 'bama') {
    message.channel.send('oh')
  }
});

client.on("guildMemberAdd", (member) => {
//  if(getChannel('general')) {
//    message.channel.send(member + ' has joined the server.');
//  } else {
  member.guild.defaultChannel.send(member + ' has joined the server.');
//  }
});

client.on("guildMemberRemove", (member) => {
//  if(getChannel(general)) {
//    message.channel.send(member + ' has left the server.');
//  } else {
  member.guild.defaultChannel.send(member + ' has left the server.');
//  }
});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));
process.on('unhandledRejection', err => console.error(`Uncaught Promise Error: \n${err.stack}`));

client.login(config.token);

/*

if(cont === '^') {
  message.channel.send('^')
} else if(cont.toLowerCase().includes('rekt')) {
  message.channel.send('wow rekt')
} else if(cont.toLowerCase().includes('kawaii')) {
  message.channel.send('(づ✿ロ✿)づ')
} else if(cont.toLowerCase().includes('whats this') || cont.toLowerCase().includes('what\'s this') || cont.toLowerCase().includes('what is this')) {
  message.channel.send('owo')
} else if(cont.toLowerCase().includes('owo')) {
  message.channel.send('what\'s this')
} else if(cont.toLowerCase() === 'you tried') {
  message.channel.send('http://i.imgur.com/228L6ye.png')
  else if(cont.toLowerCase().startsWith('i\'m')) {
    message.channel.send('Hi ' + args.join(" ").substring(4) + ', I\'m dad!')
  } else if(cont.toLowerCase().startsWith('im')) {
    message.channel.send('Hi ' + args.join(" ").substring(3) + ', I\'m dad!')
  } else if(cont.toLowerCase().startsWith('you\'re ') || cont.toLowerCase().startsWith('youre ') || cont.toLowerCase().startsWith('you are ')) {
    message.channel.send('no u')
  }
*/
