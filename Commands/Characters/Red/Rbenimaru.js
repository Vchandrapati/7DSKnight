const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Kijin]** Benimaru')
            .setThumbnail('https://i.imgur.com/SXJRXNd.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Unknown' +
            "\n" + ' ' +
            "\n" + '**Passive: Indomitable Pride, Works in Subslot: No**' +
            "\n" + 'Increases damage dealt by 3% per hero skill use. (Limit 10 time(s))' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Fire Slash**' +
            "\n" + 'Inflicts **Weak Point** damage equal to **120%/180%/300%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Mana Drain**' +
            "\n" + 'Decreases Defense-related stats of all enemies by **20%/30%/40%** for **2/2/3** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Hell Flare**' +
            "\n" + 'Inflicts damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy, decreases skill ranks, then **depletes** the Ultimate Move Gauge by the number of skill rank decreases.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}