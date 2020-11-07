const { MessageEmbed } = require('discord.js');
const url = 'https://api-election.cbsnews.com/api/public/races2/2020/G?Filter.officeCode=P';
const axios = require('axios');

module.exports = {
    name: 'dem',
    description: 'Democrats 2020 Election Info',
    alias: ['democrats', 'democrat'],
    run: async (client, message, args) => {
        let res, data;
        try {
            res = await axios.get(url);
            data = res.data;
        } catch (e) {
            return message.channel.send('an error occured')
        }

        const blue = data.filter(d => d.rating === 'Dem Win');
        const blueStates = blue.map(state => `**${state.stateName}**`).join(' - ');
        const blueElectoralVotes = blue.reduce((a, b) => a += b.electoralVotes, 0);
        const joeBidenVotes = data.find(d => d.stateName === 'All United States')

        const embed = new MessageEmbed()
            .setTitle('Democrats 2020 Election Info')
            .setColor('#0000ff')
            .addField('Total Electoral Votes', blueElectoralVotes)
            .addField('Electoral Votes Needed', 270 - blueElectoralVotes)
            .addField('Total Votes', joeBidenVotes.candidates[0].vote.toLocaleString())
            .addField('States Won', blueStates)
        await message.channel.send(embed)
    }
}
