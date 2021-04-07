const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class ComandosCommand extends BaseCommand {
  constructor() {
    super('comandos', 'tools', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send("No podes usar ese comando");
    if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send("No tengo permisos para usar ese comando")
    
    //      .addField('')//
    const commmandEmbed = new Discord.MessageEmbed()
      .setTitle(`Comandos`)
      .addField('')
      .addField(`Diversion`)
      .addField('Say: Basicamente sirve para que el bot diga cualquier cosa `e!say [lo que quieras]`')
      .addField('Horarios: [PrOxImAmEnTe]')
      .addField('')
      .addField('Moderacion')
      .addField('Ban: Para banear miembros `e!ban @usuario {razon}`')
      .addField('Kick: Para expulsar a miembros `e!kick @usuario {razon}`')
      .addField('Nickname: Para cambiar el nick de un miembro `e!nickname @usuario {razon}`')
      .addField('Nuke: borra todos los mensajes del canal donde se escriba, borra el canal y crea uno con los mismos permisos, `e!nuke {razon}` este comando esta puesto para que solo los roles que tengan el permiso "ADMINISTRADOR" lo puedan usar')
      .addField('Purge: Borra los mensajes indicados en el comando dentro de el mismo canal en el rango de 2 a 100 mensajes, `!purge numero`')
      .addField('Recruit: para sumar nuevos mods, `e!recruit @user`')
      .addField('Tempmod: Para sumar mods temporales, `e!tempmod @user tiempo`')
      .addField('Tempmute: Para mutear temporalmente, `e!tempmute @user tiempo`')
      .addField('Unban: Para desbanear miembros, `e!unban ID`')
      .addField('modout o Unrecruit: Para sacar mods, `e!unrecruit @user`')
      .setFooter('Defe Bot desarrollado por Federico Diaz Nemeth');

    message.channel.send(commmandEmbed)
  }
}