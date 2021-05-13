const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['bjeri'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[New Legend]** Guardian Jericho')
            .setThumbnail('https://i.imgur.com/2bz5VS7.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Sharp Intuition, Works in Subslot: Yes**' +
            "\n" + 'If a Critical Strike occurs from an allys skill use against an enemy, each allys Crit Chance is increased by 5%. (Limit 10 time(s))' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Swift Dash**' +
            "\n" + 'Inflicts damage equal to **200%/240%/400%** of Attack on one enemy. **(Explodes after 2/1/1 turn(s).)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Tornado Slash**' +
            "\n" + 'Inflicts damage equal to **180%/180%/300%** of Attack on one enemy. Decreases HP-related stats by **15%/15%/30%** for **1/2/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Silent Split**' +
            "\n" + 'Inflicts **Spike** damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Chain Slash**' +
            "\n" + 'Inflicts **Spike** damage equal to **640%/704%/768%/832%/896%/960%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/CRIT' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}