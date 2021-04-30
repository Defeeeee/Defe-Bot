const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class A350Command extends BaseCommand {
  constructor() {
    super('a350', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('a350 command works');
  }
}