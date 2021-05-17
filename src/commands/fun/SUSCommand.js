const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js');

module.exports = class SUSCommand extends BaseCommand {
  constructor() {
    super('SUS', 'fun', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('No tenes permisos para usar ese comando')
    
    const SUSRole = message.guild.roles.cache.get('837139025646714883');
    const modrole = message.guild.roles.cache.get('733344436611973220');
    const masterrole = message.guild.roles.cache.get('733344476034236516');
    const pepolrole = message.guild.roles.cache.get('733346115948380201');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const SUSNick = 'SUS'
    const SUSEmbed = new discord.MessageEmbed()
      .setTitle(`${mentionedMember.user.tag} IS KINDA SUS`)
      .setDescription('sus')
      .setColor('RANDOM');
    const SUSEmbed1 = new discord.MessageEmbed()
      .setTitle(`Te calificaron como kinda sus 🙃`)
      .setDescription('SUS')
      .setColor('RANDOM');

    await mentionedMember.roles.add(SUSRole).catch(err => console.log(err));
      await mentionedMember.roles.remove(modrole).catch(err => console.log(err));
      await mentionedMember.roles.remove(masterrole).catch(err => console.log(err));
      await mentionedMember.roles.remove(pepolrole).catch(err => console.log(err));
      await mentionedMember.setNickname(SUSNick)
    
    message.channel.send(SUSEmbed);
    await mentionedMember.send(SUSEmbed1).catch(err => console.log(err));
  }
}