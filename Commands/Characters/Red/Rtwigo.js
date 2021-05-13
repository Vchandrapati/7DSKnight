const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Confirmation]** Apprentice Holy Knight Twigo')
            .setThumbnail('https://i.imgur.com/2t4kamJ.jpg')
            .setDescription('Rarity: R' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Confirmed!, Works in Subslot: Yes**' +
            "\n" + 'Increases Strength attribute allies HP by 30%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Blood Strike**' +
            "\n" + 'Inflicts damage equal to **240%/360%/600%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Strike Decision**' +
            "\n" + 'Inflicts damage equal to **150%/225%/375%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Extermination Strike**' +
            "\n" + 'Inflicts **Sever** damage equal to **350%/385%/420%/455%/490%/525%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}