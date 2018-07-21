const commando = require('discord.js-commando');
const Discord = require('discord.js');

class WeatherCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'weather',
      group: 'tool',
      memberName: 'weather',
      description: 'Check the weather. Usage: ``>weather [zip code]`` OR ``>weather City, State``',
      throttling: {
        usages: 1,
        duration: 10,
      },
    });
  }

  async run(msg, args) {
    var args = msg.content.split(/[ ]+/);
    if(args.length === 1) {
/*      const embed = new RichEmbed();
        .setDescription('Weather data for ' + location)
        .setAuthor(msg.author.username, msg.author.displayAvatarURL)
        .setColor(2408959)
        .setTimestamp()
        .setTitle('Weather')
      return msg.embed(embed) */
      msg.say('Not enough arguments defined. Usage: ``>weather City,Country Code``');
    } else {
      var request = require('request');
      let location = args.join("%20").substring(11);
      console.log(location)
      request('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=160abc062ce4814fbcc573c55212bb77', function (error, response, body) {
        if (!error) {
          var info = JSON.parse(body)
          if(info.main !== undefined) {
            let mrfahrenheit = Math.round((info.main.temp * 1.8) - 459.67)
            let mrcelsius = Math.round(info.main.temp - 273.15)
            let mrhumidity = info.main.humidity
            let mrfmax = Math.round((info.main.temp_max * 1.8) - 459.67)
            let mrcmax = Math.round(info.main.temp_max - 273.15)
            let mrsfmin = Math.round((info.main.temp_min * 1.8) - 459.67)
            let mrscmin = Math.round(info.main.temp_min - 273.15)
            const embed = new Discord.RichEmbed()
              .setTitle('Weather')
              .setAuthor(msg.client.user.username, msg.client.user.avatarURL)
              .setColor(3384319)
              .setDescription('The weather for: ' + args.join(" ").substring(9))
              .addField('Temperature', 'The current temperature is ' + mrfahrenheit + '°F, or ' + mrcelsius + '°C')
              .addField('High', 'The projected high for today is ' + mrfmax + '°F, or ' + mrcmax + '°C')
              .addField('Low', 'The projected low for today is ' + mrsfmin + '°F, or'  + mrscmin + '°C')
              .addField('Humidity', 'The current humidity is ' + mrhumidity + '%')
              .setFooter('https://openweathermap.org/')
              .setTimestamp()
            return msg.embed(embed)
          } else {
            msg.say('An error has occured. Check your command request for any typos.')
          }
        }
      });
    }
  }
};

module.exports = WeatherCommand;

/*
{"coord":{"lon":-117.16,"lat":32.72},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":290.65,"pressure":1012,"humidity":72,"temp_min":289.15,"temp_max":292.15},"visibility":16093,"wind":{"speed":6.7,"deg":170},"clouds":{"all":90},"dt":1518299760,"sys":{"type":1,"id":473,"message":0.0046,"country":"US","sunrise":1518273325,"sunset":1518312644},"id":5391811,"name":"San Diego","cod":200}
*/
