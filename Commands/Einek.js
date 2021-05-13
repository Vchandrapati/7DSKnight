const Discord = require('discord.js')

module.exports = {
    category: 'Guides',
    description: 'Einek Guide',
    
    callback: async ({ message }) => {

        //#region guide

        const Einek = new Discord.MessageEmbed()
        .setColor('#808080')
        .setTitle('Select Difficulty')
        .setDescription('🇳:Normal' + 
        "\n" + '🇭:Hard' +
        "\n" + '🇽:Extreme');

        const EinekN = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Einek Normal Guide')
            .setDescription('Team: Rgow, Rderi, Rtwigo, Rzeldris' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Use Double twigo card, Zeldris debuff, zeldris drain. ' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'You are looking for a rank 3 attack seal otherwise reset, otherwise burn cards and start stacking deri' +
            "\n" + ' ' +
            "\n" + ':three:  Turn 3+' +
            "\n" + ' ' +
            "\n" + 'From this turn on u start stacking deri and making sure the boss is constantly attack sealed so u dont lose the buffs' +
            "\n" + ' ' +
            "\n" + 'Note: Ideally u want to finish turn 5-6' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 2.4k+');

        const EinekH = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Einek Hard Guide')
            .setDescription('Team: Green Gowther,  G Helbram, R Slater, R Derieri' +
            "\n" + ' ' +
            "\n" + ':one: Turn 1' +
            "\n" + ' ' +
            "\n" + 'Helbram Poison, Slater ATK, rank up Deri, move Gowther card making sure to keep the helbram buff on the left' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + '2* Deri Att, Gowther Debuff, Slater seal, Either Move Gowther card or play a trash card' +
            "\n" + ' ' +
            "\n" + ':three:  Turn 3' +
            "\n" + ' ' +
            "\n" + 'Get Gowthers ult ready for next turn and keep stacking deri and burn cards' +
            "\n" + ' ' +
            "\n" + ':four:  Turn 4' +
            "\n" + ' ' +
            "\n" + 'Gowther Ult, Slater Debuff, Get Helbram ult ready for next turn, Deri Buff' +
            "\n" + ' ' +
            "\n" + ':five:  Turn 5' +
            "\n" + ' ' +
            "\n" + 'Continue Stacking Deri and burn cards' +
            "\n" + ' ' +
            "\n" + ':six:  Turn 6' +
            "\n" + ' ' +
            "\n" + 'helbram ult, 3* Deri Buff, 3* Helbram Buff, deri ult' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 3.5k+');

        const EinekXC = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Einek Extreme Crit Guide')
            .setDescription('Team: Green Gowther,  G Helbram, R Slater, R Derieri' +
            "\n" + ':one:  Phase 1' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Move Deri 3 times and play Helbram AOE' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Move Deri 2 times, gowther debuff and move gowther' +
            "\n" + ' ' +
            "\n" + ':three:  Turn 3' +
            "\n" + ' ' +
            "\n" + 'Use helbram buff, deri buff, deri ult, burn card.' +
            "\n" + ' ' +
            "\n" + ':two:  Phase 2' +
            "\n" + ' ' +
            "\n" + ':four:  Turn 4+' +
            "\n" + ' ' +
            "\n" + 'Keep boss sealed with slater while u stack deri and work towards a helbram ult and 3* Buff' +
            "\n" + ' ' +
            "\n" + 'Note: Remember you have to helbram ult' +
            "\n" + ' ' +
            "\n" + 'Note: You ideally want to finish around turn 7-8' +
            "\n" + ' ' +
            "\n" + 'https://www.youtube.com/watch?v=9BnzzJAmU8g' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 6k+');

            const EinekX = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Einek Extreme HP Guide')
            .attachFiles("https://i.imgur.com/mRIOQPz.png")
            .attachFiles("https://i.imgur.com/otizTK9.png")
            .attachFiles("https://i.imgur.com/PJKFgF3.png")


            //#endregion

        if (message.author.bot) return;
        else 
        {        
            const sentMessage = await message.channel.send(Einek);
            const reactions = ['🇳', '🇭', '🇽'];      
            for (const reaction of reactions) sentMessage.react(reaction);      
            
            const Nfilter = (reaction, user) => reaction.emoji.name === '🇳' && user.id === message.author.id
            const Hfilter = (reaction, user) => reaction.emoji.name === '🇭' && user.id === message.author.id
            const Xfilter = (reaction, user) => reaction.emoji.name === '🇽' && user.id === message.author.id
            

            const ncollector = sentMessage.createReactionCollector(Nfilter, { time: 5000})
            const hcollector = sentMessage.createReactionCollector(Hfilter, { time: 5000})
            const xcollector = sentMessage.createReactionCollector(Xfilter, { time: 5000})

            ncollector.on('collect', r => {
                message.channel.send(EinekN)
            }); 

            hcollector.on('collect', r => {
                message.channel.send(EinekH)
            }); 

            xcollector.on('collect', r => {
                message.channel.send(EinekXC)
            }); 
        }
    }
}
