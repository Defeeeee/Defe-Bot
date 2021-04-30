const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class A350Command extends BaseCommand {
  constructor() {
    super('a350', 'fun', []);
  }

  async run(client, message, args) {
    const airbembed = new Discord.MessageEmbed()
      .setTitle('a350 bois')
      .setImage('https://cdn.discordapp.com/attachments/795095607915053136/837719645603627048/2018_Airbus_A350-1000_Cooling.jpg')
      .setColor('RANDOM')
    
    message.channel.send(airbembed);
  }
}