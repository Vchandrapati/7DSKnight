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
    client.user.setUsername("Kana");
    client.user.setActivity(`Watching for ${prefix}Help`);
    client.user.setAvatar("https://i.imgur.com/69FLt5A.jpg")
    
    new WOKCommands(client, {
        commandsDir:'Commands',
        featuresDir:'Features'
    })
    
    .setMongoPath(MONGO_URI)
    .setDisplayName("Kana")
    .setCategorySettings([
    {
        name: 'Moderation',
        emoji: '🔨'
    },
    {
        name: 'Fun & Games',
        emoji: '🎮'
    },
    {
        name: 'Test',
        emoji: '⚠️'
    }])
})

if (process.pid) {
    console.log('This process is your pid ' + process.pid);
}

client.login(token);
