const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Three Millennia of Memories]** Aide Gerharde')
            .setThumbnail('https://i.imgur.com/r9zEKTU.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Fairy' +
            "\n" + ' ' +
            "\n" + '**Passive: Protection of Fairies, Works in Subslot: No**' +
            "\n" + 'Heals allies HP by 1% of max HP for every 1 orb in allies Ultimate Move Gauges at the end of the allies turn. (Applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Natures Cage**' +
            "\n" + 'Inflicts damage equal to **140%/150%/250%** of Attack on one enemy. **(Cancels Stances at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Lying Hand**' +
            "\n" + 'Heals HP of all allies equal to **200%/200%/300%** of Attack. **(fills the Ultimate Move Gauge by 1/2 orb(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Piercing Roots**' +
            "\n" + '**Cancels Buffs and Stances** on one enemy, inflicts damage equal to **630%/693%/756%/819%/882%/945%** of Attack.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}