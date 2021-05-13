const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['rugal'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[KOF 98]** Omega Rugal')
            .setThumbnail('https://i.imgur.com/rDpP3Nc.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Grounded Confidence, Works in Subslot: No**' +
            "\n" + 'Removes the heros Debuffs, fully heals their HP, and increases all stats by 15% when the hero survives with 50% HP or less. (Limit once)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Gravity Rush**' +
            "\n" + 'Inflicts **Pierce** damage equal to 100%/150%/180% of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Genocide Cutter**' +
            "\n" + 'Inflicts damage equal to **180%/180%/300%** of Attack on one enemy. Decreases Attack-related stats by **20%/30%/40%** for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Gigantic Pressure**' +
            "\n" + 'Inflicts **Charge** damage equal to **700%/770%/840%/910%/980%/1050%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** PIERCE/DEF/HP')
            message.channel.send(Character);
    }
}