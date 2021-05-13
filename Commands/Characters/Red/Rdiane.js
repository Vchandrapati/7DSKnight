const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Eternal Promise]** Holy Knight Diane')
            .setThumbnail('https://i.imgur.com/YZBTLy5.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Giant' +
            "\n" + ' ' +
            "\n" + '**Passive: Giants Pride, Works in Subslot: Yes**' +
            "\n" + 'Increases damage dealt by Giant allies by 40%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Darkness Hand**' +
            "\n" + 'Inflicts damage equal to **220%/220%/360%** of Attack on one enemy. **(Seals for 1/2 turn(s) on r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Bridesmaid**' +   
            "\n" + 'Inflicts damage equal to **120%/120%/180%** of Attack on all enemies. **(Allows the use of only rank 1 skills for 1/2 turn(s) on r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Mother Earth Catastrophe**' +
            "\n" + 'Inflicts damage equal to **525%%/578%/631%/684%/737%/790%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Griamore): Full Swing Impact**' +
            "\n" + 'Inflicts damage equal to **600%/660%/720%/780%/840%/900%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}