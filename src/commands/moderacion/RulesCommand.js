const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class RulesCommand extends BaseCommand {
  constructor() {
    super('rules', 'moderacion', []);
  }

  run(client, message, args) {
    //{ name: '', value: ''}
    ////.addField('\u200b', '\u200b')
    const rulesEmbed = new Discord.MessageEmbed()
      .setTitle('Reglas')
      .addFields(
        { name: 'Regla 1', value: ':white_check_mark: Ser respetuoso con todos'},
        { name: 'Regla 2', value: ':white_check_mark: Ser amable con todos'},
        { name: 'Regla 3', value: ':white_check_mark: Si algo sale mal con el Defe Bot avisarle a @Defe#8799'},
        { name: 'Regla 4', value: ':white_check_mark: Notificarle a los moderadores si hay algun problema'},
        { name: 'Regla 5', value: ':white_check_mark: Usar cada canal para su proposito'},
        { name: 'Regla 6', value: ':white_check_mark: Tener nicknames que se entiendan y que no sean ofensivos.'},
        { name: 'Regla 7', value: ':no_entry_sign:Insultar, atacar o realizar una accion malhiriente, ya sea por privado o por el sevidor = 1 Warn'},
        { name: 'Regla 8', value: ':no_entry_sign:Realizar spam = Muteada temporal por 30 minutos'},
        { name: 'Regla 9', value: ':no_entry_sign:Abusar de tu rol'},
        { name: 'Regla 10', value: ':no_entry_sign: Enviar contenido NSFW o GORE = Ban por 24Hs'},
        { name: 'Regla 11', value: ':no_entry_sign: Molestar en un canal de voz = Muteada por 30 minutos'},
      )
      .setFooter('Alberto Bot desarrollado por Federico Diaz Nemeth')
      .setTimestamp();
    
    message.channel.send(rulesEmbed);
  }
}