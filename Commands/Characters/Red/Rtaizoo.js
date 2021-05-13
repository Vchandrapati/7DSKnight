const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Vaizel Fight Festival]** Champion Taizoo')
            .setThumbnail('https://i.imgur.com/yMYmBZS.jpg')
            .setDescription('Rarity: R' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Champions Pride, Works in Subslot: Yes**' +
            "\n" + 'Decreases allies damage taken in PVP by 20%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Powerful Punch**' +
            "\n" + 'Inflicts **Pierce** damage equal to **160%/240%/400%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Muscle Mania**' +
            "\n" + 'Increases Defense by **100%/150%/250%** and **Reflects 40%/60%/100%** of damage taken for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Full Power Dropkick**' +
            "\n" + 'Inflicts **Charge** damage equal to **700%/770%/840%/910%/980%/1050%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}