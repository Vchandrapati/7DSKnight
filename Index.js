const Discord = require('discord.js');

const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION']
});  

const process = require('process');
const WOKCommands = require('wokcommands')

const {
    prefix,
    token,  
} = require(`./Config.json`);

client.once('ready', () => {
    console.log('Bot Start!!!');
    client.user.setUsername("7DS Knight");
    client.user.setActivity(`Watching for 7Help`);
    
    new WOKCommands(client, {
        commandsDir:'Commands',
    })
    
    .setDefaultPrefix('7')
    .setCategorySettings([
    {
        name: 'Guides',
        emoji: '📜'
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
