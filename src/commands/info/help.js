const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'bots commands and more',
    alias: ['h'],
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
            .setTitle('2020 Election Bot Info')
            .setThumbnail('https://emails.illinois.edu/files/264695/electiongraphic_2020.gif')
            .setColor('#ff0000')
            .setFooter('2020 Election Bot Info', 'https://emails.illinois.edu/files/264695/electiongraphic_2020.gif')
            client.commands.forEach(command => embed.addField(`${command.name} - [ ${command.alias.join(', ')} ]`, command.description))
        message.channel.send(embed)
    }
}
