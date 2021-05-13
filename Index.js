const Discord = require('discord.js');

const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION']
});  

const process = require('process');
const WOKCommands = require('wokcommands')

const {
    prefix,
    token,  
    MONGO_URI
} = require(`./Config.json`);

client.once('ready', () => {
    console.log('Bot Start!!!');
    client.user.setUsername("7DS Knight");
    client.user.setActivity(`Watching for 7Help`);
    client.user.setAvatar('https://i.imgur.com/z5Aq1fc.jpg')
    
    new WOKCommands(client, {
        commandsDir:'Commands',
    })
    
    .setMongoPath(MONGO_URI)
    .setDefaultPrefix('7')
    .setCategorySettings([
    {
        name: 'Guides',
        emoji: '📜'
    },
    {
        name: 'Test',
        emoji: '⚠️'
    },
    {
        name: 'Character Info',
        emoji: '⚔️'
    }])
})

if (process.pid) {
    console.log('This process is your pid ' + process.pid);
}

client.login(token);
