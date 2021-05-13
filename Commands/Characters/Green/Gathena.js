const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['athena'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[KOF 98]** Asamiya Athena')
            .setThumbnail('https://i.imgur.com/GYk0cl4.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Everyones Pop Star, Works in Subslot: Yes**' +
            "\n" + 'Depletes 2 orb(s) from the Ultimate Move Gauge(s) of all enemies at the end of the turn When an ally hero defeats an enemy during an allied turn in PVP.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Phoenix Arrow**' +
            "\n" + 'Inflicts damage equal to **240%/360%/500%** of Attack on one enemy. **(Stuns and Cancels Stance at r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Psycho Ball**' +
            "\n" + 'Inflicts **Detonate** damage equal to **160%/240%/400%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Crystal Shoot**' +
            "\n" + 'Cancels Stances on one enemy and inflicts damage equal to **700%/220%/840%/910%/980%/1050%** of Attack.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}