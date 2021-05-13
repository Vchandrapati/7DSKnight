const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Champion]** Ranger Griamore')
            .setThumbnail('https://i.imgur.com/bfWH6dZ.jpg')
            .setDescription('Rarity: SR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Champions Dignity, Works in Subslot: Yes**' +
            "\n" + 'Increases allies HP-related stats by 15% in PVP.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Burning Strike**' +
            "\n" + 'Inflicts damage equal to **240%/360%/600%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Wall**' +
            "\n" + 'Creates a barrier around all allies equal to **150%/225%/375%** of Attack for **2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Rising Tornade**' +
            "\n" + 'Inflicts damage equal to **300%/330%/360%/390%/420%/450%** of Attack on all enemies. **Decreases Attack-related stats** by **30%** for **3** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}