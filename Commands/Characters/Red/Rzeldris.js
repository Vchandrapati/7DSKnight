const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {    
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Elite Demon]** Zeldris of Piety')
            .setThumbnail('https://i.imgur.com/16XwMVn.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Leader of the Ten Commandments, Works in Subslot: Yes**' +
            "\n" + 'Increases allies basic stats by 6% for each ally or enemy with a Commandment.' +
            "\n" + ' ' +
            "\n" + '**Commandment of Piety**' +
            "\n" + 'removes Debuffs from allies and enemies that moved skill(s) and depletes the Ultimate Move Gauge orb(s) by 1. (Except Death Match)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Indicate Abyss**' +
            "\n" + 'Inflicts damage equal to **120%/300%/450%** of Attack on one enemy and **depletes 1/1/3** Ultimate Move Gauge orb(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Nimble Thread**' +
            "\n" + 'Inflicts damage equal to **220%/220%/360%** of Attack on one enemy. **Disables Recovery Skills** for **1/2/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Reckless Line**' +
            "\n" + 'Inflicts **Spike** damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}