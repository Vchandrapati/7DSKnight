const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Advent of Destruction]** Human Weapon Mono')
            .setThumbnail('https://i.imgur.com/g0hjDuM.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Assassination Timing, Works in Subslot: No**' +
            "\n" + 'Increases the hero\'s damage dealt by 30% for each orb in the target\'s Ultimate Move Gauge. (Excludes PVP)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Blade Dance**' +
            "\n" + '**Removes Buffs** from one enemy and inflicts damage equal to **220%/300%/400%** of Attack. **(Cancels Buffs and Stances at r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Shadow Cut**' +
            "\n" + 'Inflicts damage equal to **120%/120%/180%** of Attack on all enemies. **(Prevents Ultimate Move Gauge(s) from filling up for 1/2 turn(s) at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Endless Pain**' +
            "\n" + 'Inflicts damage equal to **455%/501%/546%/592%/637%/683%** of Attack on one enemy. Makes target(s) **Bleed** for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}