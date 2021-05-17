const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const recon = require('reconlx');
const ReactionPages = recon.ReactionPages;

module.exports = class HorariosCommand extends BaseCommand {
  constructor() {
    super('horarios', 'fun', []);
  }

  //.addField('\u200b', '\u200b')
  async run(client, message, args) {
    const embed1 = new Discord.MessageEmbed()
      .setTitle('Horarios Lunes', '\u200b')
      .addField('Primer bloque (8:05-9:05): Ed Judia', 'Fabiana Mibashan')
      .addField('Segundo Bloque (9:20-10:40): Matematica', 'Betina Szuldman')
      .addField('Tercer Bloque (10:55-12:15): Ingles', 'Claudia Kaminsky')
      .addField('\u200b', '\u200b')
      .addField('Novamoo', '\u200b')
      .setFooter('Defe Bot desarrollado por Federico Diaz Nemeth');
    const embed2 = new Discord.MessageEmbed()
      .setTitle('Horarios Martes', '\u200b')
      .addField('Primer bloque (8:05-9:05): Ed Judia', 'Fabiana Mibashan')
      .addField('Segundo Bloque (9:20-10:40): Lengua', 'Patricia Benavidez')
      .addField('Tercer Bloque (10:55-12:15): Historia', 'Rocio Gomez')
      .addField('\u200b', '\u200b')
      .addField('Almuerzo (12:15-13:10)', '\u200b')
      .addField('Cuarto Bloque (13:10-14:30): Matematica', 'Betina Szuldman')
      .addField('Quinto Bloque (14:40-16:00): Arte', 'Patricio Pascual')
      .addField('\u200b', '\u200b')
      .addField('Novamoo', '\u200b')
      .setFooter('Defe Bot desarrollado por Federico Diaz Nemeth');
    const embed3 = new Discord.MessageEmbed()
      .setTitle('Horarios Miercoles', '\u200b')
      .addField('Primer bloque (8:05-9:05): Educacaion Fisica', 'Ariel Sapir')
      .addField('Segundo Bloque (9:20-10:40): Ingles', 'Claudia Kaminsky')
      .addField('Tercer Bloque (10:55-12:15): Biologia', 'Amancay Ramirez')
      .addField('\u200b', '\u200b')
      .addField('Almuerzo (12:15-13:10)', '\u200b')
      .addField('Cuarto Bloque (13:10-14:30): Matematica', 'Betina Szuldman')
      .addField('Quinto Bloque (14:40-16:00): Lengua', 'Patricia Benavidez')
      .addField('\u200b', '\u200b')
      .addField('Novamoo', '\u200b')
      .setFooter('Defe Bot desarrollado por Federico Diaz Nemeth');
    const embed4 = new Discord.MessageEmbed()
      .setTitle('Horarios Jueves', '\u200b')
      .addField('Primer bloque (8:05-9:05): Etica', 'Alberto Plosker')
      .addField('Segundo Bloque (9:20-10:40): Ingles', 'Claudia Kaminsky')
      .addField('Tercer Bloque (10:55-12:15): Biologia', 'Amancay Ramirez')
      .addField('\u200b', '\u200b')
      .addField('Almuerzo (12:15-13:10)', '\u200b')
      .addField('Cuarto Bloque (13:10-14:30): Tecnologia', 'Sergio Coppa')
      .addField('Quinto Bloque (14:40-16:00): Tecnologia', 'Sergio Coppa')
      .addField('\u200b', '\u200b')
      .addField('Novamoo', '\u200b')
      .setFooter('Defe Bot desarrollado por Federico Diaz Nemeth');
    const embed5 = new Discord.MessageEmbed()
      .setTitle('Horarios Viernes', '\u200b')
      .addField('Primer bloque (8:05-9:05): Educacaion Fisica', 'Ariel Sapir')
      .addField('Segundo Bloque (9:20-10:40): Historia', 'Rocio Gomez')
      .addField('Tercer Bloque (10:55-12:15): Hebero', 'Fabiana Mibashan')
      .addField('Cuarto Bloque (12:30-13:30): Geografia', 'Pablo Sharpe')
      .addField('\u200b', '\u200b')
      .addField('Novamoo', '\u200b')
      .setFooter('Defe Bot desarrollado por Federico Diaz Nemeth');

    const pages = [embed1, embed2, embed3, embed4, embed5];
    const emojis = ['⬅️', '➡️'];

    ReactionPages(message, pages, true, emojis);
    }
  }