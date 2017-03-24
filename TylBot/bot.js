const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Tylbot is ONLINE');
});

client.on('message', message => {
    if(message.content === '>daddy'){
        message.channel.sendMessage('`` My Daddy is Tylody#1781 (Tylar) ``');
    }
});

client.on('message', message => {
    if (message.content === '>weeb') {
        message.channel.sendMessage('Weeb: Someone that watches too much anime, AKA Payton, Michael, and Gus');
    }
});



client.login('Mjg5OTY0NTYyMzQwNTExNzQ2.C7YPeQ.RyujolFFXjuukXIigMbRx1lzIpM');