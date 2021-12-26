const Discord = require('discord.js');


exports.run = function(client, message) {

	const embed = new Discord.RichEmbed()
		.setDescription("**Yak Yak Yak**")
		.setImage("https://c.tenor.com/XIqcApG3jA4AAAAd/polat-alemdar-sigara.gif")
	
	message.channel.send(embed)
  message.react('🚬')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sigara',
  description: 'Sigara iç belki sürpriz olabilir :)',
  usage: 'sigara'
};
