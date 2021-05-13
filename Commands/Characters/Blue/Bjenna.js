const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Sweet Temptation]** Druid Jenna')
            .setThumbnail('https://i.imgur.com/YQwV0Gj.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Admonish, Works in Subslot: No**' +
            "\n" + 'Only 1 Debuff can be on the hero. Increases Attack by 20% when Debuffed.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Flash**' +
            "\n" + 'Inflicts damage equal to **135%/150%/250%** of Attack on one enemy. **(Infects for 1/3 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Bright Shot**' +
            "\n" + '**Cancels Stances** on one enemy and Inflicts damage equal to **180%/300%/500%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Outset Light**' +
            "\n" + 'Inflicts **Break** damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}