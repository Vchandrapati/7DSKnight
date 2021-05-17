const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['festking', 'festivalking'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Signs of Maturity]** New Wings King')
            .setThumbnail('https://i.imgur.com/iBDe6Ew.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Fairy' +
            "\n" + ' ' +
            "\n" + '**Passive: Awakened Power, Works in Subslot: No**' +
            "\n" + 'Enemies with 2 or more of the effects Poison, Bleed, Shock, and Corrosion becomes unable to remove Debuffs using Recovery Skills. If there are three of the above Debuffs, additionally decreases 1 orb from the Ultimate Move Gauge at the end of allies turn.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Guardian Punch**' +
            "\n" + 'Inflicts damage equal to **180%/270%/450%** of Attack on one enemy and releases **80%/100%/130%**.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: True Spirit Spear Chastiefol, Fifth Form: Increase**' +
            "\n" + 'Inflicts damage equal to **82%/123%/205%** of Attack on all enemies. **Poisons** for 3 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Tyrant Tempest**' +
            "\n" + 'Inflicts damage equal to **300%/330%/360%/390%/420%/450%** of Attack on all enemies. Gains **Abyss 30%/36%/42%/48%/54%/60%** effect and takes 50% less damage for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}