const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class TempmodCommand extends BaseCommand {
  constructor() {
    super('tempmod', 'moderacion', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tenes permiso para usar este comando.");
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('No tengo los permisos necesarios');

    const staffRole = message.guild.roles.cache.get('733344436611973220');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const staffNick = ' | TempMod'
    let time = args[1];
    const tempmodEmbed = new Discord.MessageEmbed()
      .setTitle(`Nuevo Tempmod ` + mentionedMember.user.username);
    const tempmodEmbed2 = new Discord.MessageEmbed()
      .setTitle(`Tenes moderador temporal en ${message.guild.name}.`)
      .addField(`Duracion: ${time}`)
      .setColor(`RANDOM`)
      .setFooter('Defe Bot desarrollado por Federico Diaz Nemeth');
    const tempmodEmbed3 = new Discord.MessageEmbed
      .setTitle(`Tu moderador temporal en ${message.guild.name} ha finalizado.`)
      .setColor(RANDOM)
      .setTimestamp()
      .setFooter('Defe Bot desarrollado por Federico Diaz Nemeth');

    if (!staffRole) return message.channel.send('No hay ningun rol de Mod');
    if (!args[0]) return message.channel.send("`e!recruit @miembro` o `e!recruit ID`");
    if (!mentionedMember) return message.channel.send("El miembro no esta en el server")
    if (!time) return message.channel.send('Tenes que establecer un tiempo `e!tempmod @miembro tiempo`')

    await mentionedMember.roles.add(staffRole.id).catch(err => message.channel.send("No pude poner el rol de mod"));
    await mentionedMember.setNickname(mentionedMember.user.username + staffNick)
      message.channel.send(tempmodEmbed)
    await mentionedMember.send(tempmodEmbed2).catch(err => console.log(err));

    setTimeout(async function () {
      await mentionedMember.roles.remove(staffRole.id).catch(err => console.log(err));
      await mentionedMember.send(tempmodEmbed3).catch(err => console.log(err));
    }, ms(time));
  }
}