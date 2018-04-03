const commando  = require('discord.js-commando'); // commando is required
const config = require('./config.json'); // calls config.json containing bot token and prefix
const client = new commando.Client({
  owner: '248285489902256128', // id of owner can be found by typing \@Owner#1234
  commandPrefix: config.commandPrefix, // calls the commandPrefix entry in the config.json
  unknownCommandResponse: false, // if someone types the prefix and then random characters it will not print unknown command
});

client.registry.registerGroup('chat', 'Chat'); // sorts commands into groups
client.registry.registerGroup('tool', 'Tool');
client.registry.registerGroup('moderation', 'Moderation');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands"); // retrieves folders from this directory

client.on('ready', () => { // when the bot goes online, run this
    console.log('TylBot EXPERIMENTAL is ONLINE') // logs to console when bot goes online
});

client.on('message', message => { // when someone sends a message, run this
  var args = message.content.split(/[ ]+/);
  if(message.author.bot) return; // doesn't do anything when a bot sends the message
  let cont = message.content // i could just type out message.content every time but i'm lazy
  if(cont === '^') { // if the message is only ^
    message.channel.send('^') // self explanatory. sends "^"
  } else if(cont.toLowerCase().includes('rekt')) { // if the message contains rekt when all the characters are made lowercase, doesn't have to be only 'rekt'
    message.channel.send('wow rekt')
  } else if(cont.toLowerCase().includes('kawaii')) {
    message.channel.send('(づ✿ロ✿)づ')
  } else if(cont.toLowerCase().includes('whats this') || cont.toLowerCase().includes('what\'s this') || cont.toLowerCase().includes('what is this')) { // putting || means or
    message.channel.send('owo')
  } else if(cont.toLowerCase() === 'you tried') {
    message.channel.send('http://i.imgur.com/228L6ye.png')
  } else if(cont.toLowerCase() === 'oh') {
    message.channel.send('bama')
  } else if(cont.toLowerCase() === 'bama') {
    message.channel.send('oh')
  } else if(cont.toLowerCase().startsWith('i\'m')) {
    message.channel.send('Hi ' + args.join(" ").substring(4) + ', I\'m dad!')
  } else if(cont.toLowerCase().startsWith('im')) {
    message.channel.send('Hi ' + args.join(" ").substring(3) + ', I\'m dad!')
  }
});

client.on('message', message => {
  let deletewords = ['>say ', '>roast ', '>8ball ','>arrest ', '>choose ']; // an array of commands to delete on send
  let i = 0 // let is just var except i is still undefined outside of this. helps to prevent conflicts
  while (i < deletewords.length) { // for as long as i, 0, is less than the length of deletewords, it will run this
                                   // deletewords is equal to zero as long as there are no words to be deleted
    if(message.content.toLowerCase().startsWith(deletewords[i])) { // opt: includes and endsWith
      message.delete();
    }
    i++; // adds one to i
  }
});

client.on("guildMemberAdd", (member) => { // on the event of a new member, send this message
//  if(getChannel('general')) {
//    message.channel.send(member + ' has joined the server.');
//  } else {
  member.guild.defaultChannel.send(member + ' has joined the server.');
//  }
});

client.on("guildMemberRemove", (member) => { // on the event of a leaving member, send this message
//  if(getChannel(general)) {
//    message.channel.send(member + ' has left the server.');
//  } else {
  member.guild.defaultChannel.send(member + ' has left the server.');
//  }
});

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));
process.on('unhandledRejection', err => console.error(`Uncaught Promise Error: \n${err.stack}`)); // basic debug stuff. logs errors

client.login(config.token); // logs in to the bot account with the token
