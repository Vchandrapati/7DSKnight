const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Iron-wall Knight]** Guardian Griamore')
            .setThumbnail('https://i.imgur.com/OjhnFp8.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Strong Will, Works in Subslot: No**' +
            "\n" + 'Increases Attack by a value equal to 30% of the heros Defense at the start of the battle.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Blockade**' +
            "\n" + 'Inflicts damage equal to **120%/120%/180%** of Attack on all enemies. **(Removes Stances and Disables Stance Skills for 1/2 turn(s) at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Wailing Wall**' +
            "\n" + 'Taunts enemies and increases Defense-related stats by **280%/308%/336%/364%/392%/420%** for 4 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Dreyfus): Holy Ballista**' +
            "\n" + 'Taunts enemies and increases Defense-related stats by **320%/352%/384%/416%/448%/480%**for 5 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}