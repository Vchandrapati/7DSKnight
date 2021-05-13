const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',

    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Light of Hope]** Seven Deadly Sins Grand Cross Arthur')
            .setThumbnail('https://i.imgur.com/zQc24JV.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Justice, Works in Subslot: No**' +
            "\n" + 'Increases allies damage dealt by 35% and decreases allies damage taken by 35% if all allies are alive. (Applies when entering battle, excludes PVP and Death Match)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Typhoon Slash**' +
            "\n" + 'Inflicts damage equal to 220% of Attack on one enemy. **(Disables Buff and Debuff skill for 1/2 turn(s) at r2/r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Silent Slash**' +
            "\n" + 'Inflicts damage equal to **150%/225%/375%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Legendary Knight**' +
            "\n" + 'Inflicts Sever damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}