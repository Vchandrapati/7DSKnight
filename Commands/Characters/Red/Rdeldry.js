const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[The Pleiades of the Azure Sky]** Holy Knight Deldry')
            .setThumbnail('https://i.imgur.com/eTE8Xjz.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Slave of Love, Works in Subslot: No**' +
            "\n" + 'Applies 1 Charm effect on one enemy in PVP. When the charmed enemy uses a skill which inflicts damage to Deldry, it will miss. (Applies when entering battle, excludes Ultimate Moves)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Unhappy Hit**' +
            "\n" + 'Inflicts **Spike** damage equal to **160%/240%/400%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Blow Kiss**' +
            "\n" + '**Taunts** one ally and increases HP-related stats by **10%/20%/30%** for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Legendary Knight**' +
            "\n" + 'Inflicts damage equal to **360%/396%/432%/468%/504%/540%** of Attack on all enemies. **Seals** for 1 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}