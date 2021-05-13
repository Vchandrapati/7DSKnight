const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[The Pleiades of the Azure Sky]** Holy Knight Dogedo')
            .setThumbnail('https://i.imgur.com/CDMzMSA.jpg')
            .setDescription('Rarity: SR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Overwhelming Power, Works in Subslot: Yes**' +
            "\n" + 'Increase the Defense-related stats of Strength Attribute allies by 30%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Nitro Rush**' +
            "\n" + 'Inflicts damage equal to **180%/270%/450%** of Attack on one enemy. **Prevents Ultimate Move Gauge(s) from filling up** for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Burst Combination**' +
            "\n" + 'Inflicts **Ruin** damage equal to **160%/240%/400%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Boost Hammer**' +
            "\n" + '**Cancels Buffs and Stances** on one enemy, inflicts damage equal to **490%/539%/588%/637%/686%/735%** of Attack, then **Stuns** for 1 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}