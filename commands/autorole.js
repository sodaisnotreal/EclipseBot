const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let rol = message.mentions.roles.first()
  let rolk = message.mentions.channels.first()
  
  if (!rol) {
    return message.channel.send(`<a:level:571716736450035742> Mention autorole role!`)
    }
  
  if (!rolk) {
    return message.channel.send(` <a:level:571716736450035742> **Mention the autorole channel!**`)
  }
  
  
  db.set(`otorol_${message.guild.id}`, rol.name)
  db.set(`rolK_${message.guild.id}` ,rolk.name)
  
    message.channel.send(`<a:582119182188019712:590191128180162571> **Otorol \`${rol.name}\`, otorol kanalı ${rolk} olarak ayarlandı.**`)
  
  };
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['autorole'],
    permLevel: 0
}

exports.help = {
    name: 'autorole',
    description: 'Autorole System',
    usage: 'autorole <@role>'
}