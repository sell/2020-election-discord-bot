const { MessageEmbed } = require('discord.js');
const url = 'https://api-election.cbsnews.com/api/public/races2/2020/G?Filter.officeCode=P';
const axios = require('axios');

module.exports = {
    name: 'likely-rep',
    description: 'likely rep states',
    alias: ['likely-red', 'likelyred', 'likelyrep'],
    run: async (client, message, args) => {
        let res, data;
        try {
            res = await axios.get(url);
            data = res.data;
        } catch (e) {
            return message.channel.send('an error occured')
        }

        const likelyRed = data.filter(d => d.rating === 'Likely Rep');
        const likelyRedStates = likelyRed.map(state => `**${state.stateName}**`).join(' - ');

        const embed = new MessageEmbed()
            .setTitle('Likely Republican States')
            .setColor('#ff0000')
            .addField('States', likelyRedStates)
        await message.channel.send(embed)
    }
}
