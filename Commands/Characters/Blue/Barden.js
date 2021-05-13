const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[The Pleiades of the Azure Sky]** Holy Knight Arden')
            .setThumbnail('https://i.imgur.com/6kxFxdG.jpg')
            .setDescription('Rarity: SR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: You Mad?, Works in Subslot: Yes**' +
            "\n" + 'Decreases enemies Ultimate Move Gauge by 2 orbs when the hero participates in battle. (Applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Cheap Shoot**' +
            "\n" + 'Inflicts damage equal to **140%/210%/350%** of Attack on all enemies. **Poison** for 3 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Mid-Air Shot**' +
            "\n" + 'Inflicts **Break** damage equal to **160%/240%/400%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Vain**' +
            "\n" + 'Inflicts damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy. Decreases HP-related stats by 40% for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}