const Discord = require('discord.js');

module.exports = {
    category: 'Guides',
    description: 'Shows FB Jeri Guide',
    aliases: ['fbguila', 'fbjeri&guild', 'fbjeriandguila'],
    
    callback: async ({ message }) => {
        const FBGuide = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Final Boss Jericho Guide')
            .setDescription('Team: gGowther, gElizabeth, bEastin, gJillian' +
            "\n" + ' ' +
            "\n" + 'Oaths: All except the 4th one' +
            "\n" + ' ' +
            "\n" + 'Gear: HP/DEF on everyone, c top pieces for gowther, make sure that Eastin has the lowest HP and **use the Highest HP assoc for gLiz NOT FAT KING**' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Merge Whatever card shows up last, Gowther Debuff, Liz Attack' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Get Liz and Gowther Ult for next turn and work towards a r3 Eastin AOE' +
            "\n" + ' ' +
            "\n" + 'Note: r2 Eastin AOE Works as well but it will give less ult gauge so u will have to make up for the extra orb somehow' +
            "\n" + ' ' +
            "\n" + ':three: Turn three' +
            "\n" + ' ' +
            "\n" + 'Gowther Ult, Eastin AOE, Liz Ult' +
            "\n" + ' ' +
            "\n" + 'Note: For maximum score u ideally dont want to kill yet if it does kill then use a r2 AOE' +
            "\n" + ' ' +
            "\n" + ':four: Turn four' +
            "\n" + ' ' +
            "\n" + 'Eastin ult, burn cards or work towards a r3 eastin buff' +
            "\n" + ' ' +
            "\n" + ':five: Turn five' +
            "\n" + ' ' +
            "\n" + 'This is the point at which most runs fail, you want a draw that gives u both liz and gowther ult' +
            "\n" + ' ' +
            "\n" + ':six: Turn six' +
            "\n" + ' ' +
            "\n" + 'Heal, Liz ult, Work towards eastin ult for next turn' +
            "\n" + ' ' +
            "\n" + ':seven: Turn seven' +
            "\n" + ' ' +
            "\n" + '3* Eastin Buff, Gowther and Eastin Ult' +
            "\n" + ' ' +
            "\n" + 'Potential Points: 7k+')

        message.channel.send(FBGuide)
        await message.channel.send('https://www.youtube.com/watch?v=bAuwnIos9TI&t=11s')
    }
}