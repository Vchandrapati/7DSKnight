const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['kyo'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[KOF 98]** Kusanagi Kyo')
            .setThumbnail('https://i.imgur.com/VlKe56S.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: A Mans Spirit, Works in Subslot: No**' +
            "\n" + 'At the beginning of every turn, 2 Ignite effects are applied on all enemies for 3 turn(s), reducing damage dealt to allies by 5% for each Ignite effect on an enemy. (Excluding Death Match, applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: 115 Shiki: Dokugami**' +
            "\n" + 'Inflicts **Co-destruction** damage equal to **170%/225%/425%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Ura 108 Shiki: Orochinagi**' +
            "\n" + 'Inflicts **Blaze** damage equal to **100%/150%/250%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Saishuu Kessen Ougi: Mu Shik**' +
            "\n" + 'Inflicts damage equal to **490%/539%/588%/637%/686%/725%** of Attack on one enemy. Applies 2 **Ignite** effects for 3 turn(s) on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}