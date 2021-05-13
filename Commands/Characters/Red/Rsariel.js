const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[The Four Archangels]** Sariel of Tornado')
            .setThumbnail('https://i.imgur.com/PW7Z9ZR.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Archangel' +
            "\n" + ' ' +
            "\n" + '**Passive: Angelic Volition, Works in Subslot: No**' +
            "\n" + 'Increases the heros damage dealt by 50% when attacking enemies with Bleeding, Poisoned or Shocked Debuff(s).' +
            "\n" + ' ' +
            "\n" + '**Grace of Tornado**' +
            "\n" + 'If a Critical Strike occurs from the heros skill use, ignores 50% of the enemieys Critical Defense.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Sharp Wind**' +
            "\n" + 'Inflicts **Sever** damage equal to **120%/180%/300%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Tornado**' +   
            "\n" + 'Inflicts **Power Strike** damage equal to **190%/285%/475%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Twin Wind Blade**' +
            "\n" + 'Inflicts **Sever** damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/CRIT' +
            "\n" + '**Recommended Substats:** CRIT/DEF/HP')
            message.channel.send(Character);
    }
}