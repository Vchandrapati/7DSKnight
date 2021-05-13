const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Camelots Sword]** New King Arthur')
            .setThumbnail('https://i.imgur.com/f7qOeHB.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Charisma, Works in Subslot: Yes**' +
            "\n" + 'Increase Human allies HP-related stats by 15%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Light Pillar**' +
            "\n" + 'Inflicts damage equal to **220%/220%/360%** of Attack on one enemy. **Disables Recovery Skills** for **1/2/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Royal Sword **' +
            "\n" + 'Increases the basic stats of one ally **(all allies at r2 and r3)** by **20%/20%/30%** for **2/2/3** turn(s). **(Grants Debuff Immunity at r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Legendary Knight**' +
            "\n" + 'Inflicts Sever damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}