const Discord = require('discord.js');
const client = new Discord.Client();

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

function randomNum (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

client.on('ready', () => {
    console.log('Tylbot is ONLINE');
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/);
    // DADDY COMMAND
    if(commandIs("daddy", message)){
        message.channel.sendMessage('`` My Daddy is Tylody#1781 (Tylar) ``');
    }
    // HELP COMMAND
    if(commandIs("help", message)){
        message.channel.sendMessage('Available commands: ``>weeb, >ruroulette, >daddy``')
    }
    // WEEB COMMAND
    if (commandIs("weeb", message)) {
        message.channel.sendMessage('Weeb: Someone that watches too much anime, AKA Payton, Michael, and Gus');
    }
    // SAY COMMAND
    if(commandIs("say", message)){
        if (hasRole(message.member, "Tyrant Hoang")) {
            if (args.length === 1) {
                message.channel.sendMessage('No argument was defined. Usage: ``>say [message to say]``');
            } else {
                message.channel.sendMessage(args.join(" ").substring(5));
            }
        } else {
            message.channel.sendMessage('*You do not have sufficient permission to use that command.*');
        }
    }
    // PURGE COMMAND
    if(commandIs("purge", message)){
        if(hasRole(message.member, "Moderator") || hasRole(message.member, "Tyrant Hoang")){
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

// RUSSIAN ROULETTE
client.on('message', message => {
    var numbers = new Array(3);
    for (var i = 0; i < numbers.length; i++) {
        numbers[i] = randomNum(1,3);
    }
    if(commandIs("ruroulette", message)){
        if(randomNum === 2){
            message.channel.sendMessage('You died lol.')
        } else {
            message.channel.sendMessage('You didn\'t die lol')
        }
    }
});

client.on('message', message => {
    var deletewords = [">say"];
    var i = 0
    while (i < deletewords.length) {
        if (message.content.toLowerCase().includes(deletewords[i])) {
            message.delete();
        }
        i++;
    }
});

client.login('Mjg5OTY0NTYyMzQwNTExNzQ2.C7YPeQ.RyujolFFXjuukXIigMbRx1lzIpM');