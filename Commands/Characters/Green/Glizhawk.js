const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Mascot]** Hawk & Elizabeth')
            .setThumbnail('https://i.imgur.com/cpjcaSU.jpg')
            .setDescription('Rarity: SR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Goddess' +
            "\n" + ' ' +
            "\n" + '**Passive: Tavern Mascot, Works in Subslot: Yes**' +
            "\n" + 'Increases allies HP-related stats by 10%. (Excluding PVP and Death Match)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Super Pork Loin Illusion**' +
            "\n" + 'Inflicts damage equal to **180%/180%/300%** of Attack on one enemy. **Decreases Defense-related stats** by **20%/30%/40%** for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Super Hawk Illusion**' +
            "\n" + 'Inflicts **Pierce** damage equal to **100%/150%/250%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Final Pork Stomping**' +
            "\n" + '**Cancels Stances** on one enemy and inflicts damage equal to **700%/770%/840%/910%/980%/1050%** of Attack.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}