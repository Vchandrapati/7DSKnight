const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[The Seven Deadly Sins]** Holy Knight Diane')
            .setThumbnail('https://i.imgur.com/vmtD4tt.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Giant' +
            "\n" + ' ' +
            "\n" + '**Passive: Unwavering Will, Works in Subslot: No**' +
            "\n" + 'Increases allies Defense-related stats by 10% for every Debuff on the hero.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Accelerando**' +
            "\n" + 'Inflicts damage equal to **150%/225%/375%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Shockwave**' +
            "\n" + 'Inflicts damage equal to **140%/150%/250%** of Attack on all enemies. **(Cancel Stances at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Mother Earth Catastrophe**' +
            "\n" + 'Inflicts damage equal to **525%%/578%/631%/684%/737%/790%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Griamore): Full Swing Impact**' +
            "\n" + 'Inflicts damage equal to **600%/660%/720%/780%/840%/900%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}