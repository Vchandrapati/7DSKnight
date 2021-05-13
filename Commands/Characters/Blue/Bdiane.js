const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[The Serpent Sin of Envy]** Holy Knight Diane')
            .setThumbnail('https://i.imgur.com/DzUpCRm.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Giant' +
            "\n" + ' ' +
            "\n" + '**Passive: Giants Will, Works in Subslot: No**' +
            "\n" + 'Increases the heros Attack by 6% at the end of every turn. (Limit 5 time(s))' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Rush Rock**' +
            "\n" + 'Inflicts damage equal to **220%/220%/360%** of Attack on one enemy. **(Disables Attack for 1/2 turn(s) on r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Lightning Blade**' +
            "\n" + 'Inflicts **Rupture** damage equal to **100%/150%/250%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Mother Earth Catastrophe**' +
            "\n" + 'Inflicts damage equal to **525%%/578%/631%/684%/737%/790%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Griamore): Full Swing Impact**' +
            "\n" + 'Inflicts damage equal to **600%/660%/720%/780%/840%/900%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}