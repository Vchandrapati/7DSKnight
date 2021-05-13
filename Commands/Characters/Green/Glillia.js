const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Doombringer]** Mage Lillia')
            .setThumbnail('https://i.imgur.com/tUnWHy2.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Dark Design, Works in Subslot: Yes**' +
            "\n" + 'Decreases all enemies Attack by 16% in PVP.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: La Sylphide**' +
            "\n" + 'Inflicts damage equal to **180%/180%/300%** of Attack on one enemy. Decreases Attack-related stats by **20%/30%/40%** for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Requiem**' +
            "\n" + 'Increases damage taken by all enemies by **20%/30%/50%** for **2/2/3** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Star Link**' +
            "\n" + 'Inflicts damage equal to **350%/385%/420%/455%/490%/525%** of Attack on all enemies, decreases skill ranks, then depletes the Ultimate Move Gauge by the number of skill rank decreases.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}