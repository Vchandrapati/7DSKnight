const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['will'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Stranger Things]** Will Byers')
            .setThumbnail('https://i.imgur.com/Jj3Hhwu.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Another World, Works in Subslot: No**' +
            "\n" + 'If an allies HP falls below 50% due to enemy skill use, they will have all of their stats decreased by 20%, Ultimate Move Gauge sealed, and applies 1 Superpower, which grants immunity to all damage for 1 turn. (Applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Fireball**' +
            "\n" + 'Inflicts damage equal to **180%/270%/450%** of Attack on one enemy. **Prevents Ultimate Move Gauge(s) from filling up** for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Blizzard Rain**' +
            "\n" + 'Inflicts **Flood** damage equal to **100%/150%/250%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Magic Explosion**' +
            "\n" + 'Inflicts **Sever** damage equal to **420%/462%/504%/546%/588%/630%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}