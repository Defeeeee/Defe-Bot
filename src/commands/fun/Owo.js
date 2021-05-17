const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class OwoCommand extends BaseCommand {
  constructor() {
    super('owo', 'fun', []);
  }
    
async run(client, message, args) {
  const owoembed = new Discord.MessageEmbed()
    .setTitle('Theo owo')
    .setImage('https://campus.belgrano.ort.edu.ar/static/archivos/usuarioperfil/85489')
    .setColor('RANDOM')
    
    message.channel.send(owoembed);
  }
}