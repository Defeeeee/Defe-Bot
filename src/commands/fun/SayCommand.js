const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'fun', []);
  }

  async run(client, message, args) {
    const messageToSay = args.join(" ");
    const sayEmbed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag} dice: ${messageToSay}`)
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setColor("#0B97B9")
      .setTimestamp();
    try {
      await message.channel.send(sayEmbed)
    } catch (err) {
      console.log(err);
      message.channel.send('No pude decir el mensaje')
    }
  }
}