const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const url = 'https://api-election.cbsnews.com/api/public/races2/2020/G?Filter.officeCode=P';
module.exports = {
    name: 'rep',
    description: 'Republicans 2020 Election Info',
    alias: ['republicans', 'republican'],
    run: async (client, message, args) => {
        let res, data;
        try {
            res = await axios.get(url);
            data = res.data;
        } catch (e) {
            return message.channel.send('an error occured')
        }

        const red = data.filter(d => d.rating === 'Rep Win');
        const redStates = red.map(state => `**${state.stateName}**`).join(' - ');
        const redElectoralVotes = red.reduce((a, b) => a += b.electoralVotes, 0);
        const donaldTrumpVotes = data.find(d => d.stateName === 'All United States');

        const embed = new MessageEmbed()
            .setTitle('Republican 2020 Election Info')
            .setColor('#ff0000')
            .addField('Total Electoral Votes', redElectoralVotes)
            .addField('Electoral Votes Needed', 270 - redElectoralVotes)
            .addField('Total Votes', donaldTrumpVotes.candidates[1].vote.toLocaleString())
            .addField('States Won', redStates)
        await message.channel.send(embed)
    }
}

