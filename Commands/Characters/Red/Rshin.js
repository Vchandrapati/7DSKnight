const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Halloween]** Gamer Shin')
            .setThumbnail('https://i.imgur.com/RVQjwHB.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Configure Target, Works in Subslot: No**' +
            "\n" + 'Attacking an enemy with a Debuff results in a Critical Strike..' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Hero Laser**' +
            "\n" + 'Inflicts **Spike** damage equal to **140%/240%/400%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Smile Jack O Lantern**' +
            "\n" + 'Inflicts damage equal to **120%/120%/180%** of Attack on all enemies. **(Allows the use of only Rank 1 Skills for 1/2 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Satellite Cannon**' +
            "\n" + 'Inflicts **Shatter** damage equal to **420%/462%/504%/546%/588%/630%** of Attack on all enemies' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}