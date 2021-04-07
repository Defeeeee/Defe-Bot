const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class UnbanCommand extends BaseCommand {
  constructor() {
    super('unban', 'moderation', []);
  }

  async run(client, message, args) {
   if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No tenes permiso para desbanear gente ")
   if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send ("No tengo permiso para desbanear gente")

   let reason = args.slice(1).join(" ")
   let userID = args[0];

  if (!reason) reason = ('No hay razon');
  if (!args[0]) return message.channel.send("Tenes que poner a un usuario para desbanear `e!unban ID razon`")
  if (isNaN(args[0])) return message.channel.send("El ID no es un numero `e!unban ID razon`")

  message.guild.fetchBans().then(async bans => {
    if (bans.size == 0) return message.channel.send('No hay nadie baneado en el server');
    let bUser = bans.find(b => b.user.id == userID);
    if (!bUser) return message.channel.send('Ese ID no esta baneado');
    await message.guild.members.unban(bUser.user, reason).catch(err => {
      console.log(err);
      return message.channel.send('Algo salio mal intentando desbanear a ese usuario');
    }).then(() => {
      message.channel.send(`Se ha desbaneado a ${args[0]} correctamente`);
    })
  })
  }
}