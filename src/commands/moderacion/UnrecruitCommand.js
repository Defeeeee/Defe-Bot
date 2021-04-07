const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class UnrecruitCommand extends BaseCommand {
  constructor() {
    super('unrecruit', 'moderacion', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tenes permiso para usar este comando.");
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('No tengo los permisos necesarios');

    const staffRole = message.guild.roles.cache.get('733344436611973220');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!args[0]) return message.channel.send("`e!unrecruit @miembro` o `e!unrecruit ID`");
    if (!mentionedMember) return message.channel.send("El miembro no esta en el server")

    await mentionedMember.roles.remove(staffRole.id).catch(err => message.channel.send("No pude sacar el rol de mod"));
    await mentionedMember.setNickname(mentionedMember.user.username)
  }
}