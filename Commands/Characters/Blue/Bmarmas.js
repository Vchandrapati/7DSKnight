const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Boom Boom Pow]** Holy Knight Marmas')
            .setThumbnail('https://i.imgur.com/CckdQYw.jpg')
            .setDescription('Rarity: R' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Gravitational Field, Works in Subslot: Yes**' +
            "\n" + 'Increases Speed attribute allies HP by 30%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Maraca Smash**' +
            "\n" + 'Inflicts damage equal to **120%/120%/180%** of Attack on on all enemies. **(Disables Buff and Debuff Skills for 1/2 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Gravity x10**' +
            "\n" + 'Decreases Defense of all enemies by **30%/45%/75%** for **3/3/4** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Hyper Gravity**' +
            "\n" + '**Decreases Defense-related stats** of all enemies by **40%/44%/48%/52%/56%/60%** for 3 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}