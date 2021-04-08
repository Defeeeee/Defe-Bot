// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js');
const { DiscordAPIError } = require('discord.js');
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
    const welcomeChannel = member.guild.channels.cache.get('829512647564591125');
    const rulesChannel = member.guild.channels.cache.get('768270470671761438');
    const welcomeEmbed = new Discord.MessageEmbed()
      .setTitle('Nuevo miembro!')
      .setDescription(`<@${member.user.id}>, bienvenid@ a ${member.guild.name}. Acordate de leer las reglas en ${rulesChannel}`);
    welcomeChannel.send(welcomeEmbed)
  }
}