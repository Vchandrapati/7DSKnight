const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[The Ten Commandments]** Melascula of Faith')
            .setThumbnail('https://i.imgur.com/l8N3vC5.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Gather Souls, Works in Subslot: No**' +
            "\n" + 'Increases the heros basic stats by 1% for each orb filled in the Ultimate Move Gauges of both allies and enemies.' +
            "\n" + ' ' +
            "\n" + '**Commandment of Faith**' +
            "\n" + 'At the end of every turn, applies 2 Ignite effects for 5 turn(s) on heroes who have not used skills in PVP. (Applies to both allies and enemies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Darkness Whip**' +
            "\n" + 'Inflicts damage equal to **220%/220%/360%** of Attack on one enemy. **(Infects for 1/2 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Demon Flash**' +
            "\n" + 'Inflicts **Detonate** damage equal to **100%/150%/250%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Summon Soul**' +
            "\n" + 'Inflicts damage equal to **560%%/616%/672%/728%/784%/840%** of Attack on one enemy and **Lifesteals** 40% of the damage.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}