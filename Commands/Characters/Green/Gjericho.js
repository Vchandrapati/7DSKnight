const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['gjeri'],

    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Godspeed Knight]** Guardian Jericho')
            .setThumbnail('https://i.imgur.com/eeunyrf.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Repeated Cuts, Works in Subslot: No**' +
            "\n" + 'Increases Crit Chance by 10% per hero skill use.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Flash Attack**' +
            "\n" + 'Inflicts **Weak Point** damage equal to 120%/180%/300% of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Flash Strike**' +
            "\n" + 'Inflicts damage equal to **140%/210%/350%** of Attack on one enemy. Makes target(s) **Bleed** for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Silent Split**' +
            "\n" + 'Inflicts **Spike** damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Chain Slash**' +
            "\n" + 'Inflicts **Spike** damage equal to **640%/704%/768%/832%/896%/960%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/CRIT' +
            "\n" + '**Recommended Substats:** CRIT/DEF/HP')
            message.channel.send(Character);
    }
}