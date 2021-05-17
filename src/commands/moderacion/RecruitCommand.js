const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class RecruitCommand extends BaseCommand {
  constructor() {
    super('recruit', 'moderacion', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tenes permiso para usar este comando.");
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('No tengo los permisos necesarios');

    const staffRole = message.guild.roles.cache.get('843609484550078486');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const staffNick = ' | MOD'
    const modEmbed = new Discord.MessageEmbed()
      .setTitle("Nuevo mod " + mentionedMember.user.username);
    const modEmbed1 = new Discord.MessageEmbed()
      .setTitle(`Ahora sos mod en ${message.guild.name}`);

    if (!staffRole) return message.channel.send('No hay ningun rol de Mod');
    if (!args[0]) return message.channel.send("`e!recruit @miembro` o `e!recruit ID`");
    if (!mentionedMember) return message.channel.send("El miembro no esta en el server")

    await mentionedMember.roles.add(staffRole.id).catch(err => message.channel.send("No pude poner el rol de mod"));
    await mentionedMember.setNickname(mentionedMember.user.username + staffNick)
      message.channel.send(modEmbed)
    await mentionedMember.send(modEmbed1).catch(err => console.log(err));
  }
}