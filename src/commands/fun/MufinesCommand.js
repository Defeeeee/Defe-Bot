const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class MufinesCommand extends BaseCommand {
  constructor() {
    super('mufines', 'fun', []);
  }
    
async run(client, message, args) {
  const tatisemembed = new Discord.MessageEmbed()
    .setTitle('tatisem')
    .setImage('https://campus.belgrano.ort.edu.ar/static/archivos/usuarioperfil/86917')
    .setColor('RANDOM')
    
    message.channel.send(tatisemembed);
  }
}