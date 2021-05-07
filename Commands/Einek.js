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
            "\n" + ':pencil:You want the boss to focus on Gil, instead of the other characters.' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Youre looking for a turn 2 in which you can apply a level 3 attack seal, if you cant do that just reset ( unless your cards are amazing and you feel like you can try your for 1 more turn.' +
            "\n" + ' ' +
            "\n" + ':pencil:You want the boss to keep focusing on Gil.' +
            "\n" + '' +
            "\n" + ':three:  Turn 3+' +
            "\n" + ' ' +
            "\n" + 'From now and going forward you start stacking Derieri, you MUST to keep the boss attack sealed so that he doesnt remove your Derieri buffs. Theres a couple turns when it can be worth it to gamble and not attack seal. Like when the boss only has 1 attack card to use that turn, you can try your luck on the 50/50 on which card the boss will use, if its the buff removal you need to restart, if its the ranged attack you just won your coin toss. ' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 2.4k+');

        const EinekH = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Einek Hard Guide')
            .setDescription('Team: Green Gowther,  G Helbram, R Slater, R Derieri' +
            "\n" + ' ' +
            "\n" + ':one: Turn 1' +
            "\n" + ' ' +
            "\n" + 'Helbram Poison, Slater ATK , rank up Deri, move Gowther card making sure to keep the helbram buff on the left' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + '2* Deri Att, Gowther Debuff, Slater seal, Either Move Gowther card or play a trash card' +
            "\n" + ' ' +
            "\n" + ':pencil:The boss will regenerate his shield at the end of the turn, so dont waste your good damage cards. Remember to use at least one card so the ultimate can be drawn.' +
            "\n" + ' ' +
            "\n" + ':three:  Turn 3' +
            "\n" + ' ' +
            "\n" + 'Get Gowthers ult ready for turn 5 and keep stacking deri and removing trash cards Reset if you didnt get decent cards (deri/rankup)' +
            "\n" + ' ' +
            "\n" + ':four:  Turn 4' +
            "\n" + ' ' +
            "\n" + 'Gowther Ult, Slater Debuff, Get Helbram ult ready for next turn, Deri Buff' +
            "\n" + ' ' +
            "\n" + ':five:  Turn 5' +
            "\n" + ' ' +
            "\n" + 'Helbram Ult (You can optionally ult next turn), Continue Stacking Deri' +
            "\n" + ' ' +
            "\n" + ':six:  Turn 6' +
            "\n" + ' ' +
            "\n" + '3* Deri Buff, 3* Helbram Buff ult' +
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
            "\n" + 'Move Derieri card twice, use Slater and Helbram attack cards.' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Get Derieri ult by moving her cards 3 times, throw out an unneeded card' +
            "\n" + ' ' +
            "\n" + ':three:  Turn 3' +
            "\n" + ' ' +
            "\n" + 'Use helbram buff, rank up Derieri, use her buff and then her ult. Make sure you break 500k damage here to get the +200p from reaching that damage value and keep in mind that damage against the shield isnt taken into consideration. ( if youre 6/6 you dont need to use helbram buff, only derieri buff and 1 attack card should be enough)' +
            "\n" + ' ' +
            "\n" + ':two:  Phase 2' +
            "\n" + ' ' +
            "\n" + ':four:  Turn 4+' +
            "\n" + ' ' +
            "\n" + 'Use your level 2 Deri slap + whatever you might need to break the shield and use Slaters debuff.' +
            "\n" + ' ' +
            "\n" + 'You need to keep the boss debuffed with Slater so that you can keep stacking Derieri and you control the boss ult gauge with Gowther debuff + ult  ( remember that not the boss ult deranks all your cards and removes ult gauge based on cards deranked so that can kill your run, not to mention that it does a lot of damage so thats a big point loss at the end.)' +
            "\n" + ' ' +
            "\n" + 'You want to ult with Helbram before Derieri ult in order to remove the boss +30% defense related buff, remember that the boss is immune to buff removal until you break the shield, so you can only use helbram ult after that.' +
            "\n" + ' ' +
            "\n" + 'You want to finish around turn 7-8 ideally, with as many Derieri passive stacks as you can.' +
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
                message.channel.send(EinekX)
                message.channel.send(EinekXC)
            }); 
        }
    }
}
