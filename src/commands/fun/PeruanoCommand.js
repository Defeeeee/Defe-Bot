const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class PeruanoCommand extends BaseCommand {
  constructor() {
    super('peruano', 'fun', []);
  }

  async run(client, message, args) {
    const peruanoRole = message.guild.roles.cache.get('837683157753921587');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const peruEmbed = new Discord.MessageEmbed()
      .setTitle('Ataque peruano en curso')
      .setColor('RANDOM');
    const peruEmbed1 = new Discord.MessageEmbed()
      .setTitle(`peruano ${mentionedMember.user.tag}`)
      .setColor('RANDOM');
    const peruEmbed2 = new Discord.MessageEmbed()
      .setTitle('proceso de peruanizacion iniciado!')
      .setColor('RANDOM');
    const peruEmbed3 = new Discord.MessageEmbed()
      .setTitle('Bienvenido a peru! :flag_pe:')
      .setColor('RANDOM');

    if (!message.member.roles.cache.has(peruanoRole.id)) return message.channel.send('no podes usar este comando porque no sos un peruano');
    if (!mentionedMember) return message.channel.send('Tenes que mencionar un usuario para peruanizar');

    message.channel.send(peruEmbed);
    await mentionedMember.send(peruEmbed2).catch(err => console.log(err));
    await mentionedMember.send(peruEmbed1).catch(err => console.log(err));
    await mentionedMember.send(peruEmbed1).catch(err => console.log(err));
    await mentionedMember.send(peruEmbed1).catch(err => console.log(err));
    await mentionedMember.send(peruEmbed1).catch(err => console.log(err));
    await mentionedMember.send(peruEmbed1).catch(err => console.log(err));
    await mentionedMember.send(peruEmbed1).catch(err => console.log(err));
    await mentionedMember.send(peruEmbed1).catch(err => console.log(err));
    await mentionedMember.send(peruEmbed1).catch(err => console.log(err));
    await mentionedMember.send(peruEmbed3).catch(err => console.log(err));
  }
}