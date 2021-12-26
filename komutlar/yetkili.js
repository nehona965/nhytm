const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://media.discordapp.net/attachments/914530914380443696/921867862208020540/tenor_22.gif")
  .setTitle("**Yetkili**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**👔 Yetkili Komutları 👔**", `\`n!mod-log-ayarla\` = Log Kanalını Ayarlar 🛠 \n \`n!sunucu-kur\` = Otomatik Sunucu Kurar! 🛠 \n \`n!otorol\` = Otorol Ayarlamınızı Sağlar. 🛠 \n \`n!rol\` = Rol vermenizi sağlar. 🛠 \n \`n!mesajküçült\` = Mesajınızı Küçültür. 🛠 \n \`n!ban\` = İstediğiniz kişiyi sunucudan banlar. 🛠 \n \`n!kick\` = İstediğiniz kişiyi sunucudan kickler. 🛠 \n \`n!unban\` = İstediğiniz kişinin banını kaldırır. 🛠 \n \`n!sustur\` = İstediğiniz kişiyi susturur. 🛠 \n \`n!oylama\` = Oylama açar 🛠 \n \`n!duyuru\` = Güzel bir duyuru görünümü sağlar.🛠 \n \`n!panelkur\` = Sunucu paneli kurar. 🛠 \n \`n!vote\` = Bota Oy Verirsiniz. 🛠 \n \`n!gç-ayarla\` = Resimli Giriş Çıkış Not : Bozuktur. 🛠`)
  
  .setImage("https://media.discordapp.net/attachments/922046953544646692/922079921352892456/standard_2.gif")
  
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
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
  aliases: ['yet', 'ye', '2'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Yetkili Komutlarını Gösterir.',
  usage: 'yetkili'
};
