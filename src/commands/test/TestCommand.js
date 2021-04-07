const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');


module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('test', 'testing', []);
  }

  async run(client, message, args) {
    const VerifyEmbed = new Discord.MessageEmbed()
      .setTitle(`Bienvenido a ${message.guild.name}`)
      .setDescription('Para acceder a todos los mensajes escribi `e!verify`')
      .setFooter('Defe Bot desarrollado por Federico Diaz Nemeth')
    message.channel.send(VerifyEmbed)
  }
}