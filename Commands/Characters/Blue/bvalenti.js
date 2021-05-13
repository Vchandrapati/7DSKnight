const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Sunny Vacation]** Weapon Researcher Valenti')
            .setThumbnail('https://i.imgur.com/s0RT4S0.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Powerful Spikes, Works in Subslot: Yes**' +
            "\n" + 'Infects enemies who have used Buff Skills, restricting Recovery-related stats for 2 turn(s). (Excludes Ultimate Moves, applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Positional Energy**' +
            "\n" + 'Inflicts **Detonate** damage equal to **100%/150%/250%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Thunderclap**' +
            "\n" + 'Inflicts damage equal to **180%/270%/450%** of Attack on one enemy. **Prevents Ultimate Move Gauge(s) from filling up** for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Maxwells Goblin**' +
            "\n" + 'Inflicts **Rupture** damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}