const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['dp'],

    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[The Pleiades of the Azure Sky]** Holy Knight Deathpierce')
            .setThumbnail('https://i.imgur.com/VMTl1j1.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Tonal Range Tuning, Works in Subslot: Yes**' +
            "\n" + 'Decreases enemies Crit Resistance and Crit Defense by 30%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Accelerando**' +
            "\n" + 'Inflicts damage equal to 220% of Attack on one enemy. **(Disables Buff and Debuff skill at r2 for 1 turn and removes buffs on r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Grazioso**' +
            "\n" + 'Inflicts **Shatter** damage equal to **180%/270%/450%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Brillante**' +
            "\n" + 'Inflicts damage equal to **300%/330%/360%/390%/420%/450%** of Attack on all enemies. Decreases Attack-related stats by 30% for 3 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}