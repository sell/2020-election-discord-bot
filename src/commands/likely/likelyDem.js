const { MessageEmbed } = require('discord.js');
const url = 'https://api-election.cbsnews.com/api/public/races2/2020/G?Filter.officeCode=P';
const axios = require('axios');

module.exports = {
    name: 'likely-dem',
    description: 'likely dem states',
    alias: ['likely-blue', 'likelyblue', 'likelybem'],
    run: async (client, message, args) => {
        let res, data;
        try {
            res = await axios.get(url);
            data = res.data;
        } catch (e) {
            return message.channel.send('an error occured')
        }

        const likelyBlue = data.filter(d => d.rating === 'Likely Dem');
        const likelyBlueStates = likelyBlue.map(state => `**${state.stateName}**`).join(' - ');

        const embed = new MessageEmbed()
            .setTitle('Likely Democratic States')
            .setColor('#0000ff')
            .addField('States', likelyBlueStates)
        await message.channel.send(embed)
    }
}
