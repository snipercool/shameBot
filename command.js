const {prefix} = require('./config.json')
module.exports = (Client, aliases, callback) => {
    if (typeof aliases === 'string') {
        aliases = [aliases]
    }

    Client.on('message', message => {
        const { content } = message;

        aliases.forEach(alias => {
            const command = `${prefix}${alias}`
            
            if (content.startsWith(`${command} `) || content === command) {
                console.log(`running ${command}`);
                callback(message)
            }
        
        });
    })
}