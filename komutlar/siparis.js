const Discord = require('discord.js');

exports.run = (client, message, args, member) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send(':x: Lütfen Siparişinizi Yazınız');
  let incidentchannel = message.guild.channels.find(`id`, "544932004630757386");
    if(!incidentchannel) return message.channel.send(":x: **siparişler** kanalını bulamıyorum.");

    incidentchannel.send(`<@440103666519900162>  | **Sipariş**\n\n- ${mesaj} ***\n Sipariş Veren: ${message.author}***`);
    message.channel.send(':white_check_mark: Siparişiniz <@440103666519900162> İletildi. Teşekkürler')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['siparis'],
  permLevel: 2
};

exports.help = {
  name: 'sipariş',
  description: 'Siparis',
  usage: 'sipariş <mesaj>'
};