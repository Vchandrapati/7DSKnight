const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['mike'],
    
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Stranger Things]** Mike Wheelers')
            .setThumbnail('https://i.imgur.com/Fr0hyHK.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Act of Bravery, Works in Subslot: No**' +
            "\n" + 'If the hero inflicts damage on an enemy using a single-target attack, applies an effect which decreases Attack-related stats by 30% for 2 turns.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Light Slash**' +
            "\n" + 'Inflicts damage equal to **200%/220%/360%** of Attack on one enemy. **(Infects for 1/2 turn(s).)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Shield Smash**' +
            "\n" + 'Inflicts damage equal to **240%/300%/500%** of Attack on one enemy. **(Fills Ultimate Move Gauge by 1/2 orb(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Holy Sword**' +
            "\n" + '**Cancels Buffs and Stances on one enemy**, inflicts damage equal to **490%/539%/588%/637%/686%/735%** of Attack, then **Stuns** for **1** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}