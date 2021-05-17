const Discord = require('discord.js')

module.exports = {
    category: 'Guides',
    description: 'Bergius Guide',

    callback: async ({ message }) => {

        //#region guides
        const Bergius = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Select Difficulty')
            .setDescription('🇳:Normal' + 
            "\n" + '🇭:Hard' +
            "\n" + '🇽:Extreme')

        const BergiusN = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Bergius Normal Guide')
            .setDescription('Team: rZeldris, rMonspeet, Kyo, Twigo' +
            "\n" + ' ' +
            "\n" + 'Food: HP' +
            "\n" + ' ' +
            "\n" + 'Gear: ATT/DEF on everyone' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Diane Single Target on White Sword, Drole and Matrona Single Target on Black Sword, Move Diane' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Burn cards while working towards Matrona and Drole Ult' +
            "\n" + ' ' +
            "\n" + ':three: Turn 3' +
            "\n" + ' ' +
            "\n" + 'Get Camilla and Diane Ult for turn 5' +
            "\n" + ' ' +
            "\n" + ':four: Turn 4' +
            "\n" + ' ' +
            "\n" + 'Rush Diane Ult for next turn' +
            "\n" + ' ' +
            "\n" + ':five: Turn 5' +
            "\n" + ' ' +
            "\n" + 'Get Matrona Ult for next turn and use Camilla and Diane Ult' +
            "\n" + ' ' +
            "\n" + ':six: Turn 6' +
            "\n" + ' ' +
            "\n" + 'Drole, Matrona Ult and any other cards that will kill' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 1.5k+')

        const BergiusHG = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Bergius Hard Gloxinia Guide')
            .setDescription('Team: gGerhearde, bMerlin, rGlox, rCamilla' +
            "\n" + ' ' +
            "\n" + 'Food: Ult Gauge' +
            "\n" + ' ' +
            "\n" + 'Gear: ATT/DEF' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Move Merlin 3 times and use the Single Target' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Merlin Ult, Burn Cleanse, Merlin AOE, Camilla AOE' +
            "\n" + ' ' +
            "\n" + ':three: Turn 3' +
            "\n" + ' ' +
            "\n" + 'Note: You want a draw that can get the Gerhearde and Camilla ult next turn otherwise reset' +
            "\n" + ' ' +
            "\n" + 'Rush Gerhearde and Camilla Ult ' +
            "\n" + ' ' +
            "\n" + ':four: Turn 4' +
            "\n" + ' ' +
            "\n" + 'Note: You want a draw that can get the Gloxinia and Merlin ult next turn otherwise reset' +
            "\n" + ' ' +
            "\n" + 'Gerhearde and Camilla Ult get Gloxinia and Merlin ult ready for next turn' +
            "\n" + ' ' +
            "\n" + ':five: Turn 5' +
            "\n" + ' ' +
            "\n" + 'Play both ults in a way that you kill both swords' +
            "\n" + ' ' +
            "\n" + ':six: Turn 6' +
            "\n" + ' ' +
            "\n" + 'Note: You need a draw that will get Gloxinia ult and level 2 Gerhearde AOE for next turn' +
            "\n" + ' ' +
            "\n" + 'Rush Glox ult, Burn cards' +
            "\n" + ' ' +
            "\n" + ':seven: Turn 7' +
            "\n" + ' ' +
            "\n" + 'Level 2 Gerhearde AOE and stack debuffs and play Gloxinia ult' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 2.5k+')

        const BergiusHM = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Bergius Hard Camilla Guide')
            .setDescription('Team: rDiane, gGerhearde, rCamilla, gMerlin ' +
            "\n" + ' ' +
            "\n" + 'Food: Ult Gauge' +
            "\n" + ' ' +
            "\n" + 'Gear: ATT/DEF' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Triple Move Diane and play Single target on the Main Body' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Diane Ult, Burn Cleanse, Diane AOE, Camilla AOE' +
            "\n" + ' ' +
            "\n" + ':three: Turn 3' +
            "\n" + ' ' +
            "\n" + 'Get Diane, Camilla Ult ready for Turn 5' +
            "\n" + ' ' +
            "\n" + ':four: Turn 4' +
            "\n" + ' ' +
            "\n" + 'Note: You want a draw that gets you a Level 2 Gerhearde AOE for next turn' +
            "\n" + ' ' +
            "\n" + 'Note: You want Merlin and Gerhearde Ult for turn 5' +
            "\n" + ' ' +
            "\n" + 'Continue getting Diane and Camilla Ult ready for next turn' +
            "\n" + ' ' +
            "\n" + ':five: Turn 5' +
            "\n" + ' ' +
            "\n" + 'Note: You want Merlin and Gerhearde Ult for next turn' +
            "\n" + ' ' +
            "\n" + 'Camilla Ult, Level 2 Gerhearde AOE, Diane Ult' +
            "\n" + ' ' +
            "\n" + ':six: Turn 6' +
            "\n" + ' ' +
            "\n" + 'Merlin and Gerhearde Ult and any other cards that will kill' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 3.2k+')

        const BergiusHR = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Bergius Hard Ram Guide')
            .setDescription('Team: gRam, bGowther, rGlox, gMerlin' +
            "\n" + ' ' +
            "\n" + 'Food: Attack' +
            "\n" + ' ' +
            "\n" + 'Gear: ATT/DEF on everyone' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Gowther AOE, Cleanse, Move Merlin, Merlin Attack on Dark Sword' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Note: You need a Level 2 Gowther Debuff this turn or reset' +
            "\n" + ' ' +
            "\n" + 'Rush Gloxinia and Gowther Ult for next turn Playing Level 2 Gowther Debuff' +
            "\n" + ' ' +
            "\n" + ':three:  Turn 3' +
            "\n" + ' ' +
            "\n" + 'Stack Some Debuffs while rushing Merlin Ult for next turn, Gowther and Gloxinia Ult' +
            "\n" + ' ' +
            "\n" + 'Note: Boss will put shield up next turn' +
            "\n" + ' ' +
            "\n" + ':four:  Turn 4' +
            "\n" + ' ' +
            "\n" + 'Merlin Ult, Rush Ram Ult for next turn' +
            "\n" + ' ' +
            "\n" + ':five:  Turn 5' +
            "\n" + ' ' +
            "\n" + 'Ram Ult and play any other cards that will kill' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 3k+')

        const BergiusXG = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Bergius Extreme Gerhearde Guide')
            .setDescription('Team: rDiane, bMatrona, gDrole, gGerhearde' +
            "\n" + ' ' +
            "\n" + 'Food: HP' +
            "\n" + ' ' +
            "\n" + 'Gear: ATT/DEF on everyone, ATT/DEF Matrona' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Diane Single Target targeting the White Sword, Matrona AOE, Drole Detonate targeting Black Sword and Gerhearde Cleanse' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Drole Detonate targeting the Black Sword, Gerhearde Cleanse, Diane AOE, Move Gerhearde Card' +
            "\n" + ' ' +
            "\n" + ':three:  Turn 3' +
            "\n" + ' ' +
            "\n" + 'Get Gerhearde and Diane Ult for next turn' +
            "\n" + ' ' +
            "\n" + 'Note: Boss will put shield up next turn which means u also want a level 2 Gerhearde AOE else reset' +
            "\n" + ' ' +
            "\n" + ':four:  Turn 4' +
            "\n" + ' ' +
            "\n" + 'Level 2 Gerhearde AOE, Rush Matrona, Matrona AOE, Diane Ult' +
            "\n" + ' ' +
            "\n" + 'Note: You want Matrona Ult for next turn otherwise reset' +
            "\n" + ' ' +
            "\n" + 'Note: Both arms should be dead now' +
            "\n" + ' ' +
            "\n" + ':five:  Turn 5' +
            "\n" + ' ' +
            "\n" + 'Rush Drole ult, Matrona ult and burn cards' +
            "\n" + ' ' +
            "\n" + ':six:  Turn 6' +
            "\n" + ' ' +
            "\n" + 'Gerhearde and Drole Ult, burn cards' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 4.2k+')

        const BergiusXM = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Bergius Extreme Merlin Guide')
            .setDescription('Team: rDiane, bMatrona, gDrole, gMerlin' +
            "\n" + ' ' +
            "\n" + 'Food: Ult Gauge' +
            "\n" + ' ' +
            "\n" + 'Gear: ATT/DEF on everyone, ATT/DEF Matrona' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Diane Single Target targeting the White Sword, Move Diane, Diane AOE, Drole Detonate targeting Black Sword' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Diane Ult, Rush Drole Ult, burn cards' +
            "\n" + ' ' +
            "\n" + ':three:  Turn 3' +
            "\n" + ' ' +
            "\n" + 'Note: You want a draw that gets u Merlin and Matrona Ult for next turn' +
            "\n" + ' ' +
            "\n" + 'Rush Merlin and Matrona Ult, Drole Ult' +
            "\n" + ' ' +
            "\n" + 'Note: Boss will put shield up next turn' +
            "\n" + ' ' +
            "\n" + ':four:  Turn 4' +
            "\n" + ' ' +
            "\n" + 'Matrona, Merlin Ult, Burn Cards' +
            "\n" + ' ' +
            "\n" + ':five:  Turn 5' +
            "\n" + ' ' +
            "\n" + 'Note: Boss Will have Max Ult Gauge now' +
            "\n" + ' ' +
            "\n" + 'Play cards to kill ideally Drole Detonate Cards' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 4.5k+')

        const BergiusXF = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Bergius Extreme Fest King Guide')
            .setDescription('Team: rHelbram, bFestKing, gMerlin, bGowther' +
            "\n" + ' ' +
            "\n" + 'Food: Ult Gauge' +
            "\n" + ' ' +
            "\n" + 'Gear: ATT/DEF on everyone, ATT/DEF Matrona' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Move King, King AOE, King Punch Dark Sword, Gowther AOE' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Rush Gowther Ult, Gowther Debuff, King Ult, Burn Helbram' +
            "\n" + ' ' +
            "\n" + ':three:  Turn 3' +
            "\n" + ' ' +
            "\n" + 'Gowther Ult, King AOE, Rush Helbram Ult' +
            "\n" + ' ' +
            "\n" + 'Note: Boss will put shield up next turn' +
            "\n" + ' ' +
            "\n" + ':four:  Turn 4' +
            "\n" + ' ' +
            "\n" + 'Helbram Ult, Rush Merlin Ult, Burn Cards' +
            "\n" + ' ' +
            "\n" + ':five:  Turn 5' +
            "\n" + ' ' +
            "\n" + 'Play Merlin Ult and any other cards to kill' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 2.5k+')
        //#endregion

        const sentMessage = await message.channel.send(Bergius);
        const reactions = ['🇳', '🇭', '🇽'];      
        for (const reaction of reactions) sentMessage.react(reaction);      
        
        const Nfilter = (reaction, user) => reaction.emoji.name === '🇳' && user.id === message.author.id
        const Hfilter = (reaction, user) => reaction.emoji.name === '🇭' && user.id === message.author.id
        const Xfilter = (reaction, user) => reaction.emoji.name === '🇽' && user.id === message.author.id
        

        const ncollector = sentMessage.createReactionCollector(Nfilter, { time: 5000})
        const hcollector = sentMessage.createReactionCollector(Hfilter, { time: 5000})
        const xcollector = sentMessage.createReactionCollector(Xfilter, { time: 5000})

        ncollector.on('collect', r => {
            message.channel.send(BergiusN)
        }); 

        hcollector.on('collect', r => {
            message.channel.send(BergiusHG)
            message.channel.send(BergiusHM)
            message.channel.send(BergiusHR)
        }); 

        xcollector.on('collect', r => {
            message.channel.send(BergiusXG)
            message.channel.send(BergiusXM)
            message.channel.send(BergiusXF)
        }); 
    }
}