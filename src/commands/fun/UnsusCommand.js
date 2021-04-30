const { DiscordAPIError } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js');

module.exports = class UnsusCommand extends BaseCommand {
  constructor() {
    super('unsus', 'fun', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('No podes usar ese comando')
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('No tengo permisos suficientes')

    const SUSRole = message.guild.roles.cache.get('837139025646714883');
    const pepolrole = message.guild.roles.cache.get('733346115948380201');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const unsusNick = mentionedMember.user.username
    const unsusEmbed = new discord.MessageEmbed()
      .setTitle(`${mentionedMember} ya no es mas SUS`)
      .setColor('RANDOM');
    const unsusEmbed1 = new discord.MessageEmbed()
      .setTitle(`Ya no sos SUS en ${message.guild.name}!`)
      .setColor('RANDOM');
    
    await mentionedMember.roles.remove(SUSRole).catch(err => console.log(err));
    await mentionedMember.roles.add(pepolrole).catch(err => console.log(err));
    await mentionedMember.setNickname(unsusNick)
    await mentionedMember.send(unsusEmbed1).catch(err => console.log(err));
    message.channel.send(unsusEmbed);
  }
}