const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['emilia'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Re:Zero]** [Re:Zero] Ruler Candidate Emilia')
            .setThumbnail('https://i.imgur.com/1KalRnC.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Unknown' +
            "\n" + ' ' +
            "\n" + '**Passive: Spirit User, Works in Subslot: Yes**' +
            "\n" + 'When the hero receives attack from the same enemy 2 or more times during enemy\'s turn, cleanse all Debuffs from allies and Freezes the enemy for 2 turns.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Puck, Please!**' +
            "\n" + 'Freezes one enemy for 1 turn(s). **(Inflicts damage equal to 220%/360% of Attack on one enemy and Freezes for 1/2 turn(s). When the Freeze is removed by using Skills, Ultimate Moves or after turns have passed, inflict damage equal to 20%/40% of the remaining HP at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Al Huma**' +
            "\n" + 'Inflicts damage equal to **120%/120%/180%** of Attack on all enemies. **Depletes 1/2/2** Ultimate Move Gauge orb(s) at the end of the enemies turn for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Bond with the Great Spirit**' +
            "\n" + 'Inflicts **Secret Technique 20%/28%/36%/44%/52%/60%** damage equal to **300%/330%/360%/390%/420%/450%** of Attack on all enemies and deals damage with attribute advantage regardless of attribute.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}