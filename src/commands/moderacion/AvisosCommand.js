const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
const bot = new Discord.Client();

module.exports = class AvisosCommand extends BaseCommand {
  constructor() {
    super('avisos', 'moderacion', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission(ADMINISTRATOR)) return message.channel.send('No podes usar esto master')
    const messageToSay = args.join(" ");
    const avisosEmbed = new Discord.MessageEmbed()
      .setTitle('Aviso')
      .setDescription(`@everyone ${messageToSay}`)
      .setColor('RANDOM');
    
    message.channel.send(avisosEmbed);

    message.delete();
  }
}