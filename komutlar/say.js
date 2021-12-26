const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      const emoji = client.emojis.find(emoji => emoji.name === "tik");
  const arvelosembed = new Discord.RichEmbed()
  .setColor("black")
  .setAuthor('Bilgi', `${message.author.displayAvatarURL}`)
        .addField(`❃ Ses kanallarında ${count} kişi bulunmaktadır.`, `❃ Sunucuda ${message.guild.memberCount} kişi bulunmaktadır.`)
        .setThumbnail("https://media2.giphy.com/media/vybWlRniCXzZC/giphy.gif")
        .setTimestamp()
        .setFooter(`❃ Nyhtm Bot`, `https://media2.giphy.com/media/vybWlRniCXzZC/giphy.gif`)
 
  message.channel.sendEmbed(arvelosembed)
  message.react(emoji)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'kullanıcıyı susturur.',
  usage: '(d!say'
};