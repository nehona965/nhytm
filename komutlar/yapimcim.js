const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setColor(0x00ffff)
  .addField("**✅ Sahibim ✅**", client.users.get('718711851596120094').tag)
  message.channel.sendEmbed(embed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapimcim'],
  permLevel: 0
}
exports.help = {
  name: 'Yapımcım',
  description: 'Botun Yapımcısını Gösterir',
  usage: ''
}
