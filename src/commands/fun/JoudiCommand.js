const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
const discord = require('discord.js')
const ms = require('ms')
const client = new Discord.Client();

module.exports = class JoudiCommand extends BaseCommand {
  constructor() {
    super('joudi', 'fun', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('No tenes permiso master');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("No tengo persmisos suficientes para usar ese comando");

    const muteRole = message.guild.roles.cache.get('750366174633656320');
    const memberRole = message.guild.roles.cache.get('733346115948380201');
    const joudi = message.guild.members.cache.find(user => user.id === "681223576032247872");
    const modrole = message.guild.roles.cache.get('733344436611973220');
    const masterrole = message.guild.roles.cache.get('733344476034236516');
    const pepolrole = message.guild.roles.cache.get('733346115948380201'); 
    const JoudiNick = joudi.user.username;
    let time = args[0];
    let reason = args.slice(2).join(" ");

    if (!time) return message.channel.send("Especificá un tiempo")

    const tempmuteEmbed = new discord.MessageEmbed()
      .setTitle(`nt joudi`)
      .addField(`Duracion ${time}`, `Razon: ${reason}`)
      .setColor('RANDOM')
      .setTimestamp()
      .setFooter(`Defe Bot desarrollado por Federico Diaz Nemeth`);
      
    const tempmutefinishedEmbed = new discord.MessageEmbed()
      .setTitle(`gg joudi`)
      .setColor('RANDOM')
      .setTimestamp()
      .setFooter(`Defe Bot desarrollado por Federico Diaz Nemeth`);

    await joudi.roles.add(muteRole).catch(err => console.log(err));
      await joudi.roles.remove(modrole).catch(err => console.log(err));
      await joudi.roles.remove(masterrole).catch(err => console.log(err));
      await joudi.roles.remove(pepolrole).catch(err => console.log(err));
      await joudi.send(tempmuteEmbed).catch(err => console.log(err)); message.channel.send(`${joudi} fue joudieado`);
      await joudi.setNickname(JoudiNick)

    setTimeout(async function () {
      await joudi.roles.remove(muteRole).catch(err => console.log(err));
      await joudi.roles.add(memberRole).catch(err => console.log(err)); message.channel.send(`${joudi} Fue desjoudieado`)
      await joudi.send(tempmutefinishedEmbed).catch(err => console.log(err));

    }, ms(time));
  }
}