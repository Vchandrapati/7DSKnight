const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Elite Demon]** Melascula of Faith')
            .setThumbnail('https://i.imgur.com/JnEY9w6.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Return of the Dead, Works in Subslot: No**' +
            "\n" + 'Revives an ally that dies. The revived allys HP is fixed at 1 for 3 turn(s). (Limit once, effect is removed when the hero dies. Applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Commandment of Faith**' +
            "\n" + 'At the end of every turn, applies 2 Ignite effects for 5 turn(s) on heroes who have not used skills in PVP. (Applies to both allies and enemies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Death Stab**' +
            "\n" + 'Inflicts **Blaze** damage equal to **160%/240%/600%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Spirit Consume**' +
            "\n" + '**Inhales 8%/12%/20%** of max HP of all enemies for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Summon Soul**' +
            "\n" + 'Inflicts damage equal to **560%%/616%/672%/728%/784%/840%** of Attack on one enemy and **Lifesteals** 40% of the damage.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}