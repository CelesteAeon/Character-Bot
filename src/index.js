const CharacterBotClient = require('./Structures/CharacterBotClient');
const config = require('../config.json');

const client = new CharacterBotClient(config);
client.login();