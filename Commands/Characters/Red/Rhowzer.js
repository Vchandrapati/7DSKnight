const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Tempest]** Holy Knight Howzer')
            .setThumbnail('https://i.imgur.com/mFD30kK.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Leadership Qualities, Works in Subslot: Yes**' +
            "\n" + 'Increases Human allies basic stats by 8%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Rising Storm**' +
            "\n" + 'Inflicts **Pierce** damage equal to **100%/150%/250%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Super Cyclone**' +
            "\n" + 'Inflicts **Sever** damage equal to **120%/180%/300%** of Attack on all enemies' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Rising Tornade**' +
            "\n" + 'Inflicts damage equal to **350%/385%/420%/455%/490%/525%** of Attack on all enemies, decreases skill ranks, then depletes the Ultimate Move Gauge by the number of skill rank decreases.' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Jericho): Dragon Castle**' +
            "\n" + 'Inflicts damage equal to **400%/440%/480%/520%/560%/600%** of Attack on all enemies, decreases skill ranks, then depletes the Ultimate Move Gauge by the number of skill rank decreases.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** PIERCE/DEF/HP')
            message.channel.send(Character);
    }
}