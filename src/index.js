require('dotenv').config();

const { Client, Collection } = require('discord.js');
const client = new Client();

client.prefix = 'e!';
client.commands = new Collection();

require('./handler/command')(client);

client.once('ready', () => {
    client.user.setPresence({ activity: { name: '2020 Election Votes'}, status: "dnd"}).then(() => console.log('presence set'));
    client.user.setUsername('2020 Election').then(() => console.log('username set'))
});

client.on('message', (message) => require('./events/message')(client, message));

client.login(process.env.BOT_TOKEN).then(() => console.log('Bot Logged in!'))
