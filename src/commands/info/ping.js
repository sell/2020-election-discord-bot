const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'ping the bot',
    alias: ['p'],
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Pinging government HQ...')
        const msg = await message.channel.send(embed)

        await new Promise((resolve) => setTimeout(resolve, 500));
        embed.setTitle('Pinging https://www.mielection.us')
        await msg.edit(embed)

        await new Promise((resolve) => setTimeout(resolve, 500));
        embed.setTitle('Pinging https://www.electionreturns.pa.gov/')
        await msg.edit(embed)

        await new Promise((resolve) => setTimeout(resolve, 1500));
        embed.setTitle('Finding missing ballots...')
        await msg.edit(embed)

        await new Promise((resolve) => setTimeout(resolve, 2000));
        embed.setTitle('Dead People Voting Detected...')
        await msg.edit(embed)

        await new Promise((resolve) => setTimeout(resolve, 2500));
        embed.setTitle('Voter Fraud Detected...')
        await msg.edit(embed)

        await new Promise((resolve) => setTimeout(resolve, 3000));
        embed.setTitle('Pong, recount happening...')
        await msg.edit(embed)
    }
}
