const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Roars of Dawn]** Holy Knight Hugo')
            .setThumbnail('https://i.imgur.com/rcWz5zF.jpg')
            .setDescription('Rarity: R' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Tanker, Works in Subslot: No**' +
            "\n" + 'Increases all allies Defense-related stats by 20% when the heroes Ultimate Move Gauge is completely filled.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Wind Destroy**' +
            "\n" + 'Inflicts **Rupture** damage equal to **180%/270%/450%** of Attack on one enemy.' +
            "\n" + ' ' +        
            "\n" + '**Skill 2: Tornado Shot**' +
            "\n" + 'Inflicts **Weak Point** damage equal to **120%/180%/300%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Chaos Blast**' +
            "\n" + 'Inflicts damage **Weak Point** equal to **385%/424%/463%/502%/541%/578%** of Attack.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear: **ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}