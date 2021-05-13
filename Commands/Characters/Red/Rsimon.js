const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Roars of Dawn]** Holy Knight Simon')
            .setThumbnail('https://i.imgur.com/7hCxgye.jpg')
            .setDescription('Rarity: R' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Serenity, Works in Subslot: Yes**' +
            "\n" + 'Increases allies damage dealt by 15% in PVP.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Burning Wind Strike**' +
            "\n" + 'Inflicts **Sever** damage equal to **160%/270%/450%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Yellow Dragon Sky Blade**' +
            "\n" + 'Inflicts **Shatter** damage equal to **120%/180%/300%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Strike Preparation Ring**' +
            "\n" + 'Inflicts **Pierce** damage equal to **350%/385%/420%/455%/490%/525%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}