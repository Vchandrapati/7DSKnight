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
            .setDescription('Team: gEsta, rZeldris, gMonspeet, AM' +
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
            "\n" + 'You are looking to get Monspeets ult again for next turn, for this u need a merge of some sor' +
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
            "\n" + 'Gear: HP/DEF on everyone' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Move Kyo AOE, use it and both Howzers cards' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Youre looking for a draw that gives you an easy Kyo ultimate on, while allowing to work towards Twigo and Howzer ultimates.' +
            "\n" + ' ' +
            "\n" + ':three: Turn three' +
            "\n" + ' ' +
            "\n" + 'Use Kyo ultimate, get Howzer and Twigos ultimates up. The boss will have his ult up now, he does a lot of damage and removes 3 ultimate orbs so you want him to hit Kyo, since he already ulted while  also having the highest lifesteal out of any of your units so he will easily get back to full hp. Arthur getting hit its still okay, but not optimal.' +
            "\n" + ' ' +
            "\n" + ':four: Turn four' +
            "\n" + ' ' +
            "\n" + 'Finish with the remaining ultimates. Try to make sure you dont kill any of the arms before you kill the main body, as youll be missing out on damage points. (About 15p)' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 2k+')

        const AkumuNLV = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Akumu Normal LV Guide')
            .setDescription('Team: Kyo, LV, Twigo, rArthur' +
            "\n" + ' ' +
            "\n" + 'Food: HP' +
            "\n" + ' ' +
            "\n" + 'Gear: HP/DEF on everyone' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Move Kyo/Howzer cards 4 times (to get more points, you can move cards 3 times and use it afterwards, thanks to this you get a 1/4 chance of getting another LV card which will give more damage on the ultimate)' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Use Kyo/Howzer card to get his ultimate, use LV Melis Gold Single Target and move his AOE twice to charge the ultimate.' +
            "\n" + ' ' +
            "\n" + ':three: Turn three' +
            "\n" + ' ' +
            "\n" + 'Use Kyo/Howzers ultimate, Buff LV with Arthur and LVs Ultimate.' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 1.9k+')

        const AkumuHI = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Akumu Hard Ignite Guide')
            .setDescription('Team: rZeldris, rMonspeet, Kyo, Twigo' +
            "\n" + ' ' +
            "\n" + 'Food: HP' +
            "\n" + ' ' +
            "\n" + 'Gear: HP/DEF on everyone' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Move Monspeet card and use his AOE. If you get a merge on your single target after this turn its amazing because it gives you an extra ult orb on the level 2.' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Get Monspeet ult ready for next turn and start building Kyo and Twigo ult.' +
            "\n" + ' ' +
            "\n" + ':three: Turn 3' +
            "\n" + ' ' +
            "\n" + 'Use Monspeet ult, keep building Kyo and Twigo ult.' +
            "\n" + ' ' +
            "\n" + ':three: Turn 4' +
            "\n" + ' ' +
            "\n" + 'Work towards getting Monspeet ult back up.' +
            "\n" + ' ' +
            "\n" + ':three: Turn 5-6' +
            "\n" + ' ' +
            "\n" + 'Ult with Kyo, followed by Monspeet and then finish with Twigo.' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 1.8k+')

        const AkumuHD = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Akumu Hard Deri Guide')
            .setDescription('Team: Deri, Ellate, gGowther, bEastin' +
            "\n" + ' ' +
            "\n" + 'Both your Derieri and Ellatte need to be able to patience the boss drains while it has both his arms up.' +
            "\n" + ' ' +
            "\n" + 'Here you just want to rush Ellatte ult for turn 3 while starting to stack Derieri, and make sure you have at least a level 1 buff + Ellatte ult on Derieri so that she can survive the sword strike.' +
            "\n" + ' ' +
            "\n" + 'After turn 4, kill the shield with Derieri ult and then kill the sword with Deri slaps while getting everything you need ready for a big damage finish. The perfect conditions to end with is an Eastin level 3 buff, Ellatte level 3 debuff, Ellatte ult on and a level 3 Derieri buff with evasion for the extra buff.' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 4.5k+')

        const AkumuXLV = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Akumu Extreme LV Guide')
            .setDescription('Team: LV, Twigo, sr rLiz, rArthur' +
            "\n" + ' ' +
            "\n" + 'Setup: LV, ATT/DEF with 5/5 ATT/CRIT rolls, HP Food' +
            "\n" + ':warning::pencil:LV ult needs to be able to hit over 212k on a non crit with a bunch of cards in hand. Want to finish around turn 6-7.' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Target the shield,  use all the useless attack cards.' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2 till when you\'re ready to kill phase 1 (ideally turn 4)' +
            "\n" + ' ' +
            "\n" + 'Manage your cards while using the LV single targets to get his ult, get Liz ult ready and if you also need for the mission, get the level 3 buff from Arthur ready, be aware that if this is the case, the boss might debuff Arthur blocking his buff, so if you see an opportunity to use it and remove 8 debuffs with it, just use it then.' +
            "\n" + ' ' +
            "\n" + ':four:  Turn 4' +
            "\n" + ' ' +
            "\n" + 'Finish with all your ults except Liz\'s, make sure you have it up if you still dont have ready, you MUST use Liz ult next turn, to keep you at max hp until the end of the run.' +
            "\n" + ' ' +
            "\n" + 'Phase 2' +
            "\n" + ' ' +
            "\n" + ':five:  Turn 5' +
            "\n" + ' ' +
            "\n" + 'Use Liz ult, buff LV, and throw his aoe cards... be careful that you don\'t want to bring the shield hp to low now or you\'ll risk killing it with the aoe destroying your run. If you got single target cards from LV throw them at the sword and not the shield. You want the sword to die asap so the main body loses def related stats.' +
            "\n" + ' ' +
            "\n" + ':six:  Turn 6' +
            "\n" + ' ' +
            "\n" + 'Since the shield already set up his stance, you don\'t have to worry about killing it anymore, just use all the LV aoe you can until it\'s dead. Don\'t worry if you need 1 more turn' +
            "\n" + ' ' +
            "\n" + 'Potential Points 4.5k+' +
            "\n" + ' ' +
            "\n" + ':pencil:You need to crit for at least 10.5million for a good score' +
            "\n" + ':pencil:Best case scenario you end with 16 stacks')

        const AkumuXD = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Akumu Extreme Deri Guide')
            .setDescription('Team: Deri, Ellate, gGowther, bEastin' +
            "\n" + ' ' +
            "\n" + 'https://youtu.be/RpLg311LAeA' +
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
            message.channel.send(AkumuNLV)
            message.channel.send(AkumuNMR)
        }); 

        hcollector.on('collect', r => {
            message.channel.send(AkumuHD)
            message.channel.send(AkumuHI)
        }); 

        xcollector.on('collect', r => {
            message.channel.send(AkumuXD)
            message.channel.send(AkumuXLV)
        }); 
    }
}