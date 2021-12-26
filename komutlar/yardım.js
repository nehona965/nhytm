const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://media.discordapp.net/attachments/914530914380443696/921867862208020540/tenor_22.gif")
  .setTitle("🌐Komutlar🌐")
  .setDescription('')
  .setColor(0x00ffff)
  .addField(" 👋 **Hoşgeldin Mesajı Aktif Etme**",  ` n!kur Komutuyla Gerekli Kanalları Oluşturun. ✅`) 
    .addField(" 🎧 **Müzik komutları**  ", `n!çal <şarkı> 🎧`) 
  .addField(" 🎉 **Eğlence komutları için [n!1]** ", `Eğlence Komutlarını Gösterir. (n!eğlence) 🎉`)
  .addField(" 🎊 **Eğlence komutları 2 için ** **[n!4]**", `Eğlence Komutlarının Devamını Gösterir. (n!eğlence2) 🎊`)
  .addField(" 👔 **Yetkili komutları için [n!2]**", `Yetkili Komutlarını Gösterir. (n!yetkili) 👔`) 
  .addField(" 🌐 **Ana komutlar için** **[n!3]**", `Ana Komutları Gösterir. (n!anakomutlar) ✅`)
  
  .setImage("https://media.discordapp.net/attachments/922046953544646692/922079921352892456/standard_2.gif")
   
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
    message.react('✅')
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
 