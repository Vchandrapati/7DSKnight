const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Fang of the Land]** Mercenary Matrona')
            .setThumbnail('https://i.imgur.com/957MIGE.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Giant Power, Works in Subslot: Yes**' +
            "\n" + 'Increases Giant allies basic stats by 25%. (Exclude PVP)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Geokinesis**' +
            "\n" + 'Inflicts damage equal to **220%/220%/360%** of Attack on one enemy. **(Disables Attack Skills for 1/2 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Arieal Stem**' +
            "\n" + 'Inflicts damage equal to **140%/140%/210%** of Attack on all enemies. **(Removes Buffs at r2 and Cancels Buffs and Stances at r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Prison Grip**' +
            "\n" + 'Inflicts damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy, **decreases skill ranks**, then **depletes** the Ultimate Move Gauge by the number of skill rank decreases.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}