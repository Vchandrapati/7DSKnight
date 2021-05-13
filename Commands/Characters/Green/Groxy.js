const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Halloween]** Queen of Explosions Roxy')
            .setThumbnail('https://i.imgur.com/F5P3CJQ.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Youe Like Me, Works in Subslot: No**' +
            "\n" + 'Increases the her Attack-related stats by 15% for each ally of the same race participating in battle.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Chain Smash**' +
            "\n" + 'Inflicts damage equal to **240%/300%/500%** of Attack on one enemy. **(Cancels Stance at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Surprise Jack O Lantern**' +
            "\n" + 'Inflicts **Charge** damage equal to **130%/195%/325%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Volcano Ash**' +
            "\n" + 'Inflicts damage equal to **700%/770%/840%/910%/980%/1050%** of Attack on one enemy and **fills** the Ultimate Move Gauge by 2 orb(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}