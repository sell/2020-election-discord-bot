const { promisify } = require('util')
const glob = promisify(require('glob'));

module.exports = async (client) => {

    const files = await glob(__dirname + '/../commands/**/*.js').catch(e =>  console.log(e));

    for (const file of files) {
        const command = require(file);
        client.commands.set(command.name, command)
    }

}
