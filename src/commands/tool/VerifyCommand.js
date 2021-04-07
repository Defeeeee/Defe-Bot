const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class VerifyCommand extends BaseCommand {
  constructor() {
    super('verify', 'tool', []);
  }

  async run(client, message, args) {
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Necesito el permiso de administrar roles")

    const role = message.guild.roles.cache.get('733346115948380201')

    await message.member.roles.add(role.id).catch(err => console.log(err));

    message.delete();
  }
}