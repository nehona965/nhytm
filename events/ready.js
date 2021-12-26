const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
console.log(`BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
 client.user.setActivity("Nyhtm = Kullanıcılar ♥♥♥♥");
 client.user.setActivity("n!yardım | Yardım Menüsünü Gösterir"); 
 client.user.setActivity("n!yetkili | Yetkili Komutları Gösterir"); 
 client.user.setActivity("n!eğlence | Eğlenceli Komutları Gösterir"); 
 client.user.setActivity("n!eğlence2 | Eğlenceli Komutların Devamını Gösterir"); 
  var oyun = [
        "👑 n!yardım | n!hakkında 👑"
]; 

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+0)+0);

        client.user.setGame(oyun[random], "");
        }, 2 * 2500);
};

