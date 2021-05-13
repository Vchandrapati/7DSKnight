const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Ashen Desire]** Demon Hendrickson')
            .setThumbnail('https://i.imgur.com/fBEcz23.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Malice, Works in Subslot: Yes**' +
            "\n" + 'Increases allies damage dealt with Debuff Attack Skills by 50%. (Excludes Death Match)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Dark Nebula**' +
            "\n" + 'Inflicts damage equal to **86%/129%/215%** of Attack on one enemy. **Shocks** for 4 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Dark Snow**' +
            "\n" + 'Inflicts damage equal to **76%/114%/190%** of Attack on one enemy. **Bleed** for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Dead End**' +
            "\n" + 'Inflicts **Weak Point** damage equal to **385%/424%/463%/502%/541%/578%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}