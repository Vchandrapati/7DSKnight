const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Beard of the Mountain Cat]** Member Alioni')
            .setThumbnail('https://i.imgur.com/YWyHYwa.jpg')
            .setDescription('Rarity: R' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Assault Knights!, Works in Subslot: Yes**' +
            "\n" + 'Increases HP attribute allies Attack-related stats by 10%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Charge Forward!**' +
            "\n" + 'Inflicts **Shatter** damage equal to **180%/270%/450%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Ah! Emergency!**' +
            "\n" + 'Assumes a Stance which **Taunts** enemies and decreases damage taken by **30%/45%/75%** when attacked for 1 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Beard of the Mountain Cat, Assemble!**' +
            "\n" + '**Cancels Stances** on one enemy, inflicts damage equal to **700%/770%/840%/910%/980%/1050%** of Attack.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}