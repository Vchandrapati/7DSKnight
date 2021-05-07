const Discord = require('discord.js');

module.exports = {
    category: 'Guides',
    description: 'Kelak Guide',

    callback: async ({ message }) => {

        //#region Guide

        const Kelak = new Discord.MessageEmbed()
        .setColor('#808080')
        .setTitle('Select Difficulty')
        .setDescription('🇳:Normal' + 
        "\n" + '🇭:Hard' +
        "\n" + '🇽:Extreme')

        const KelakN = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Kelak Normal Guide')
            .setDescription('Team: gGow(no link), Deri(Sariel link if he is 4:6+ else BDM), Gustav(no link), Helbram(no link)' +
            "\n" + ' ' +
            "\n" + 'Setup: Deris gear is ATT/CRIT with 5/5 ATT/CRIT rolls, Crit Dmg Food' +
            "\n" + ' ' +
            "\n" + 'Dont put atk item on helbram and gow no weapon too you gonna need maximum deri buffs to maximise her passif remember you can use only 2 slap from deri the third one the boss is dead ' +
            "\n" + ' ' +
            "\n" + 'Notes: u want to finish with 8-9 stacks' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 5.5k+' +
            "\n" + ' ' +
            "\n" + 'https://www.youtube.com/watch?v=1Yarw3rt20s&ab_channel=%E3%83%93%E3%83%BC%E3%83%86%E3%82%A3%E3%83%BC')

        const KelakH = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Kelak Hark Guide')
            .setDescription('Team: gGow, Geri(Sariel Link if 4:6 else BDM link), Elatte, Helbram' +
            "\n" + ' ' +
            "\n" + 'Food: ATT' +
            "\n" + ' ' +
            "\n" + 'Basically the same thing as normal' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 6.5k+' +
            "\n" + ' ' +
            "\n" + 'https://www.youtube.com/watch?v=nuAshb9eZO4&t=127s')

        const KelakX = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Kelak Extreme Guide')
            .setDescription('Team: gGow, Geri(Sariel Link if 4:6 else BDM link), Elatte, Helbram ' +
            "\n" + ' ' +
            "\n" + 'Food: ATT' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 7k+' +
            "\n" + ' ' +
            "\n" + 'https://www.youtube.com/watch?v=m3l-Dlh6mOs')

        //#endregion

        const sentMessage = await message.channel.send(Kelak);
        const reactions = ['🇳', '🇭', '🇽'];      
        for (const reaction of reactions) sentMessage.react(reaction);      
        
        const Nfilter = (reaction, user) => reaction.emoji.name === '🇳' && user.id === message.author.id
        const Hfilter = (reaction, user) => reaction.emoji.name === '🇭' && user.id === message.author.id
        const Xfilter = (reaction, user) => reaction.emoji.name === '🇽' && user.id === message.author.id
        

        const ncollector = sentMessage.createReactionCollector(Nfilter, { time: 5000})
        const hcollector = sentMessage.createReactionCollector(Hfilter, { time: 5000})
        const xcollector = sentMessage.createReactionCollector(Xfilter, { time: 5000})

        ncollector.on('collect', r => {
            message.channel.send(KelakN)
        }); 

        hcollector.on('collect', r => {
            message.channel.send(KelakH)
        }); 

        xcollector.on('collect', r => {
            message.channel.send(KelakX)
        }); 
    }
}