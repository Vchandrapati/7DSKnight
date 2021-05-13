const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['rem'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Re:Zero]** Twin Maid Sister Rem')
            .setThumbnail('https://i.imgur.com/o2BFIrQ.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Unknown' +
            "\n" + ' ' +
            "\n" + '**Passive: Survivor of the Oni Clan, Works in Subslot: No**' +
            "\n" + 'When the hero uses skill or moves skills to Rank Up a skill and gain Ultimate Move Gauge orb, increases Attack-related stats by 5% for 3 turn(s) up to 5 times. If there are 5 or more Ultimate Move Gauge orbs, recovers 30% of Max HP.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Crushing Hit**' +
            "\n" + 'Inflicts **Amplify** damage equal to **180%/270%/450%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Boisterous Dance of Oni**' +
            "\n" + 'Inflicts **Shatter** damage equal to **130%/195%/325%** of Attack on all enemies, **decreases Ultimate Move damage** by **20%/30%/50%** for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Night Parade of the Blue Oni**' +
            "\n" + 'Inflicts damage equal to **420%/462%/504%/546%/588%/630%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}