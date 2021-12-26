const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.name === "《👑》 Rol ve İsim Yetkilisi"); // verilecek rol ismi (isterseniz "role.name" yerine "role.id" yapıp "ROL" yazan yere rol id de yazabilirsiniz.
  if (message.member.roles.has(role.id)) return message.channel.send("<a:tik:635393991533264898> Zaten bu role sahipsin.")
  message.member.addRole(role);
  message.channel.send(`<a:onaytiki:632596585410199582> Rol ve İsim Yetkilisi Adlı Rol Başarıyla Verildi.  :)`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['discord.js','javascript'],
  permLevel: 0
};

exports.help = {
  name: 'yetki',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'yetki'
};