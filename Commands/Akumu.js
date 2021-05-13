const Discord = require('discord.js')

module.exports = {
    category: 'Guides',
    description: 'Akumu Guide',

    callback: async ({ message }) => {

        //#region guides
        const Akumu = new Discord.MessageEmbed()
        .setColor('#808080')
        .setTitle('Select Difficulty')
        .setDescription('🇳:Normal' + 
        "\n" + '🇭:Hard' +
        "\n" + '🇽:Extreme')

        const AkumuNAM = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Akumu Normal AM Guide')
            .setDescription('Team: gEsta, rZeldris, rMonspeet, AM' +
            "\n" + ' ' +
            "\n" + 'Food: HP' +
            "\n" + ' ' +
            "\n" + 'Gear: HP/DEF on everyone, c top pieces on everyone except AM' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Move Monspeet 3 times and use weakpoint u want the ult ready for turn 3' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Use trash cards such as esta swipe or taunt and move monspeet ult' +
            "\n" + ' ' +
            "\n" + ':three: Turn three' +
            "\n" + ' ' +
            "\n" + 'Monspeet Ult, use a trash card and move AM twice' +
            "\n" + ' ' +
            "\n" + ':four: Turn four' +
            "\n" + ' ' +
            "\n" + 'You are looking to get Monspeets ult again for next turn, for this u need a merge of some sorts' +
            "\n" + ' ' +
            "\n" + ':five: Turn five' +
            "\n" + ' ' +
            "\n" + 'Play monspeet ult, get AM ult ready' +
            "\n" + ' ' +
            "\n" + ':six: Turn six' +
            "\n" + ' ' +
            "\n" + 'move monspeet 4 times' +
            "\n" + ' ' +
            "\n" + ':seven: Turn seven' +
            "\n" + ' ' +
            "\n" + 'play monspeet card and move cards' +
            "\n" + ' ' +
            "\n" + ':eight: Turn eight' +
            "\n" + ' ' +
            "\n" + 'monspeet ult, AM ult' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 2.5k+' +
            "\n" + ' ' +
            "\n" + 'https://youtu.be/OkWyKzlmsBQ')

        const AkumuNMR = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Akumu Normal Mono Red Guide')
            .setDescription('Team: Kyo, Twigo, Howzer, rArthur' +
            "\n" + ' ' +
            "\n" + 'Food: HP' +
            "\n" + ' ' +
            "\n" + 'Gear: HP/DEF on everyone, c top pieces on arthur' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Twigo AOE, Howzer Sever, Move Howzer, Arthur Slash' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Move Kyo twice, Kyo Single Target, Move Howzer, Burn Card' +
            "\n" + ' ' +
            "\n" + ':three: Turn three' +
            "\n" + ' ' +
            "\n" + 'Work towards howzer twigo and kyo ult' +
            "\n" + ' ' +
            "\n" + ':four: Turn four+' +
            "\n" + ' ' +
            "\n" + 'If u have all 3 ults, then use twigo, kyo, buff howzer and howzer ult otherwise rush for next turn' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 1.8k+')

        const AkumuNI = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Akumu Normal Ignite Guide')
            .setDescription('Team: rZeldris, rMonspeet, Kyo, Twigo' +
            "\n" + ' ' +
            "\n" + 'Food: HP' +
            "\n" + ' ' +
            "\n" + 'Gear: HP/DEF on everyone with C attack pieces' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Triple move monspeet and use AOE' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Monspeet Ult, double move twigo and use twigo AOE' +
            "\n" + ' ' +
            "\n" + ':three: Turn 3' +
            "\n" + ' ' +
            "\n" + 'Double move monspeet, double move kyo' +
            "\n" + ' ' +
            "\n" + ':four: Turn 4' +
            "\n" + ' ' +
            "\n" + 'Get Monspeet and Kyo Ult ready for next turn' +
            "\n" + ' ' +
            "\n" + ':five: Turn 5-6' +
            "\n" + ' ' +
            "\n" + 'Kyo ult, Monspeet Ult, Twigo Ult' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 2k+')

        const AkumuHD = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Akumu Hard Deri Guide')
            .setDescription('Team: Deri, Ellate, gGowther, bEastin' +
            "\n" + ' ' +
            "\n" + 'Food: Resistance' +
            "\n" + ' ' +
            "\n" + 'Gear: ATT/CRIT Deri, Triple DEF Ellate with UR middle pieces and max resistance Rolls and HP/DEF on everyone else' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'gowther debuff, ellate swipe, ellate ball, Eastin AOE.' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Move ellate twice, ellate swipe and deri buff.' +
            "\n" + ' ' +
            "\n" + ':three: Turn 3' +
            "\n" + ' ' +
            "\n" + 'ellate ult, double deri swipe and move deri' +
            "\n" + ' ' +
            "\n" + 'Note: Deri has to tank the rupture' +
            "\n" + ' ' +
            "\n" + ':four: Turn 4' +
            "\n" + ' ' +
            "\n" + 'deri card, ellate card' +
            "\n" + ' ' +
            "\n" + ':five: Turn 5' +
            "\n" + ' ' +
            "\n" + 'gowther debuff, deri ult' +
            "\n" + ' ' +
            "\n" + ':six: Turn 6' +
            "\n" + ' ' +
            "\n" + 'Note: You need level 3 Eastin to kill both arms next turn' +
            "\n" + ' ' +
            "\n" + 'double move ellate, burn card, deri card' +
            "\n" + ' ' +
            "\n" + ':seven: Turn 7' +
            "\n" + ' ' +
            "\n" + 'kill both arms with level 3 Eastin, deri card, ellate ult' +
            "\n" + ' ' +
            "\n" + ':eight: Turn 8' +
            "\n" + ' ' +
            "\n" + 'burn cards while stacking deri and getting her ult for next turn' +
            "\n" + ' ' +
            "\n" + 'Note: Note: need deri ult for next turn' +
            "\n" + ' ' +
            "\n" + ':nine: Turn 9' +
            "\n" + ' ' +
            "\n" + 'ellate ball, deri buff, Eastin buff, ult ' +
            "\n" + ' ' +
            "\n" + 'Note: you ideally want to crit for 12m+' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 4.5k+')

        const AkumuXLV = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Akumu Extreme LV Guide')
            .setDescription('Team: LV, Twigo, sr rLiz, rArthur' +
            "\n" + ' ' +
            "\n" + 'Food: HP' +
            "\n" + ' ' +
            "\n" + 'Gear: ATT/DEF LV with HP/DEF on everyone else' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Target the shield and burn liz, arthur and both twigo attacks.' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2 till when you\'re ready to kill phase 1 (ideally turn 4)' +
            "\n" + ' ' +
            "\n" + 'Move LV and place single target, AOE and burn a card' +
            "\n" + ' ' +
            "\n" + 'Note: You need LV Ult for next turn' +
            "\n" + ' ' +
            "\n" + ':three:  Turn 3' +
            "\n" + ' ' +
            "\n" + 'LV Ult, Use cards to get Liz Ult for next turn, and if theres room left burn a card' +
            "\n" + ' ' +
            "\n" + 'Phase 2' +
            "\n" + ' ' +
            "\n" + ':five:  Turn 5' +
            "\n" + ' ' +
            "\n" + 'Use Liz ult, buff LV, and use both AOE Cards' +
            "\n" + ' ' +
            "\n" + ':six:  Turn 6' +
            "\n" + ' ' +
            "\n" + 'Use all of LVs Cards and if room burn a card' +
            "\n" + ' ' +
            "\n" + ':seven:  Turn 7' +
            "\n" + ' ' +
            "\n" + 'Buff LV and use AOEs to Finish him off' +
            "\n" + ' ' +
            "\n" + 'Note: Ideally Finish turn 6-7' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 4.5k+')

        const AkumuXD = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Akumu Extreme Deri Guide')
            .setDescription('Team: Deri, Ellate, gGowther, bEastin' +
            "\n" + ' ' +
            "\n" + 'Food: Resistance' +
            "\n" + ' ' +
            "\n" + 'Gear: ATT/CRIT Deri, Triple DEF Ellate with UR middle pieces and max resistance Rolls and HP/DEF on everyone else' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Move ellate card and play both ball and slash, gowther debuff.' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Move deri twice and burn eastin AOEs and gowther buffs' +
            "\n" + ' ' +
            "\n" + 'Note: You need Eastin AOE for next turn' +
            "\n" + ' ' +
            "\n" + ':three: Turn 3' +
            "\n" + ' ' +
            "\n" + 'buff and use eastin ult ideally hitting for 600k+' +
            "\n" + ' ' +
            "\n" + ':two: Phase 2' +
            "\n" + ' ' +
            "\n" + ':four: Turn 4' +
            "\n" + ' ' +
            "\n" + 'ellate ult, deri buff, swipe and burn card' +
            "\n" + ' ' +
            "\n" + 'Note: You need Deri ult for next turn' +
            "\n" + ' ' +
            "\n" + ':five: Turn 5' +
            "\n" + ' ' +
            "\n" + 'Ellate swipe, Deri Ult, Deri Swipe, burn card' +
            "\n" + ' ' +
            "\n" + ':six: Turn 6' +
            "\n" + ' ' +
            "\n" + 'Deri swipe, ellate swipe, burn 2 cards' +
            "\n" + ' ' +
            "\n" + 'Note: At this point both arms should be down' +
            "\n" + ' ' +
            "\n" + ':seven: Turn 7' +
            "\n" + ' ' +
            "\n" + 'deri buff, gowther debuff, gowther debuff if u have otherwise burn' +
            "\n" + ' ' +
            "\n" + 'Note: At this point u should have ellate ult again' +
            "\n" + ' ' +
            "\n" + ':eight: Turn 8' +
            "\n" + ' ' +
            "\n" + 'deri swipe, ellate ult, burn 2 cards' +
            "\n" + ' ' +
            "\n" + 'Note: You need to have gowthers ult for next turn' +
            "\n" + ' ' +
            "\n" + ':nine: Turn 9' +
            "\n" + ' ' +
            "\n" + 'deri swipe, gowther ult, ellate ball' +
            "\n" + ' ' +
            "\n" + 'Note: You need to have deris ult and 3* buffs and ellate ball for next turn' +
            "\n" + ' ' +
            "\n" + ':one::zero: Turn 10' +
            "\n" + ' ' +
            "\n" + 'buffs, ball, ult' +
            "\n" + ' ' +
            "\n" + 'Note: you ideally want to crit for 12m+' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 8k+')

        //#endregion

        const sentMessage = await message.channel.send(Akumu);
        const reactions = ['🇳', '🇭', '🇽'];      
        for (const reaction of reactions) sentMessage.react(reaction);      
        
        const Nfilter = (reaction, user) => reaction.emoji.name === '🇳' && user.id === message.author.id
        const Hfilter = (reaction, user) => reaction.emoji.name === '🇭' && user.id === message.author.id
        const Xfilter = (reaction, user) => reaction.emoji.name === '🇽' && user.id === message.author.id
        

        const ncollector = sentMessage.createReactionCollector(Nfilter, { time: 5000})
        const hcollector = sentMessage.createReactionCollector(Hfilter, { time: 5000})
        const xcollector = sentMessage.createReactionCollector(Xfilter, { time: 5000})

        ncollector.on('collect', r => {
            message.channel.send(AkumuNAM)
            message.channel.send(AkumuNMR)
            message.channel.send(AkumuNI)
        }); 

        hcollector.on('collect', r => {
            message.channel.send(AkumuHD)
        }); 

        xcollector.on('collect', r => {
            message.channel.send(AkumuXD)
            message.channel.send(AkumuXLV)
        }); 
    }
}