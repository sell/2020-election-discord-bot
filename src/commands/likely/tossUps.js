const { MessageEmbed } = require('discord.js');
const url = 'https://api-election.cbsnews.com/api/public/races2/2020/G?Filter.officeCode=P';
const axios = require('axios');

module.exports = {
    name: 'tossups',
    description: 'toss up states',
    alias: ['toss-ups', 'toss-up'],
    run: async (client, message, args) => {
        let res, data;
        try {
            res = await axios.get(url);
            data = res.data;
        } catch (e) {
            return message.channel.send('an error occured')
        }

        const tossUps = data.filter(d => d.rating === 'Toss-up');
        const tossUpsStates = tossUps.map(state => `**${state.stateName}**`).join(' - ');

        const embed = new MessageEmbed()
            .setTitle('Toss Up Dates')
            .setColor('#ff0000')
            .addField('States', tossUpsStates)
        await message.channel.send(embed)
    }
}
