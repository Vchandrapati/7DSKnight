const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Forest Guardian]** King the Fairy King')
            .setThumbnail('https://i.imgur.com/7lsIoIg.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Fairy' +
            "\n" + ' ' +
            "\n" + '**Passive: Magic Control, Works in Subslot: No**' +
            "\n" + 'Increases Crit Chance by 10% per each Ultimate Move Gauge orb. Increases by an additional 50% if it is completely filled.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Spirit Spear Chastiefol, First Form: Chastiefol**' +
            "\n" + 'Inflicts **Spike** damage equal to **160%/240%/400%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Poisoning Garden**' +
            "\n" + 'Inflicts **Ruin** damage equal to **160%/240%/400%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Spirit Spear Chastiefol, Fourth Form: Sunflower**' +
            "\n" + 'Inflicts **Shatter** damage equal to **420%/462%/504%/546%/588%/630%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Cross Shooting**' +
            "\n" + 'Inflicts **Shatter** damage equal to **480%/528%/576%/624%/672%/720%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/CRIT' +
            "\n" + '**Recommended Substats:** CRIT/DEF/HP')
            message.channel.send(Character);
    }
}