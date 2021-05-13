const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Undead]** Prisoner Ban')
            .setThumbnail('https://i.imgur.com/iLsgRtt.jpg')
            .setDescription('Rarity: SR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Extort HP, Works in Subslot: No**' +
            "\n" + 'Increases Lifesteal by 30% when using a skill when the heros HP is below 50%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Eliminate Spirit**' +
            "\n" + 'Inflicts damage equal to **120%/300%/450%** of Attack on one enemy and depletes **1/1/3** Ultimate Move Gauge orb(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Mana Drain**' +
            "\n" + 'Assumes a Stance for 1 turn(s) and heals **30%/50%/50%** of diminished HP at the start of the next turn. **(Debuff Immunity at r2 and Evade at r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Power Hunt Effect**' +
            "\n" + 'Inflicts **Charge** damage equal to **700%/770%/840%/910%/980%/1050%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}