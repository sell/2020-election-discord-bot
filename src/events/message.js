module.exports = (client, message) => {
    if (!message.content.startsWith(client.prefix) || message.author.bot) return;

    const args = message.content.slice(client.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const commands = client.commands.get(command)
        || client.commands.find(cmd => cmd.alias.includes(command))

    try {
        commands.run(client, message, args)
    } catch (e) {
        message.channel.send("Command Doesn't Exist")
    }
}
