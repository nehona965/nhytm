const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**aç**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + message.author.username + ' hacked')
    .addField('HACKED', '<@718711851596120094>')
    .addField('HACKED', '<@718711851596120094>')
    .addField('HACKED', '<@718711851596120094>')
    .addField('HACKED', '<@718711851596120094>')
    .addField('HACKED', '<@718711851596120094>')
    .addField('HACKED', '<@718711851596120094>')
    .addField('HACKED', '@everyone')
    .addField('HACKED', '@everyone')
    .addField('HACKED', '@everyone')
    .addField('HACKED', '@everyone')
    .addField('HACKED', '@everyone')
    .addField('HACKED', '@everyone')
    .addField('HACKED', '@everyone')
    .addField('HACKED', '@everyone')
    .addField('HACKED', '@everyone')
    .addField('HACKED', '@everyone')
    .addField('HACKED', '@everyone')
    .addField('HACKED', '@everyone')
    .addField('HACKED', '@everyone')
    .addField('HACKED', '@everyone')
    .addField('HACKED', '@everyone')
    .addField('HACKED', '@everyone')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'spam',
  description: 'Bot spam yapar',
  usage: 'spam'
};
