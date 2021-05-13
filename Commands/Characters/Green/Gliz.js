const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Memory Fragment]** Knight of Danafor Liz')
            .setThumbnail('https://i.imgur.com/Uo3Ongq.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Goddess' +
            "\n" + ' ' +
            "\n" + '**Passive: Easy to Befriend, Works in Subslot: No**' +
            "\n" + 'If all allies are HP Attribute heroes in Death Match, their Skill Ranks are increased at the start of the turn. (Applies when entering battle, limit once)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Cross Cut**' +
            "\n" + 'Inflicts damage equal to **240%/300%/500%** of Attack on one enemy. **(Fills Ultimate Move Gauge by 1/2 orb(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Angry Attack**' +
            "\n" + 'Inflicts damage equal to **160%/210%/400%** of Attack on one enemy and decreases skill ranks. **(decreases skill ranks, then depletes the Ultimate Move Gauge by the number of skill rank decreases at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Last Attack**' +
            "\n" + 'Inflicts **Shatter** damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}