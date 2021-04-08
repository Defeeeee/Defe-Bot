// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberRemove
const Discord = require('discord.js');
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberRemoveEvent extends BaseEvent {
  constructor() {
    super('guildMemberRemove');
  }

  async run(client, member) {
    const leaveChannel = member.guild.channels.cache.get('829512602388398110');
    const leaveEmbed = new Discord.MessageEmbed()
      .setTitle('Se nos fue un miembro :(')
      .setDescription(`<@${member.user.id}> Se fue (o l@ banearon/kickearon) del server :(`);
    leaveChannel.send(leaveEmbed)
  }
}