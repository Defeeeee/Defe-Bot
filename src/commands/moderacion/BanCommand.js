const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'moderacion', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tenes permiso master")
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No tengo los permisos necesarios");
    let reason = args.slice(1).join(" ");
    const mentionedMember = message.mentions.members.first();
    if (!reason) reason = 'No hay razon'
    if (!args[0]) return message.channel.send('Tenes que especificar a quien queres banear `e!ban @usuario razon`');
    if (!mentionedMember) return message.channel.send('El miembro no esta en el server');
    if (!mentionedMember.bannable) return message.channel.send('No puedo banear a ese miembro');
    const banEmbed = new Discord.MessageEmbed()
      .setTitle(`Fuiste baneado de ${message.guild.name}`)
      .setDescription(`Fuiste baneado por: ${reason}`)
      .setColor('#0B97B9')
      .setTimestamp();

    await mentionedMember.send(banEmbed).catch(err => console.log(err));
    await mentionedMember.ban({
      dias: 7,
      reason: reason
    }).catch(err => console.log(err)).then(() => message.channel.send(mentionedMember.user.tag + " Ha sido banead@"));
  }
}