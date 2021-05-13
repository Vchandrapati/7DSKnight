const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Chivalrous]** Holy Knight Gilthunder')
            .setThumbnail('https://i.imgur.com/mFeqzHe.jpg')
            .setDescription('Rarity: SR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: The Lightning Kings Magic, Works in Subslot: Yes**' +
            "\n" + 'Increases allies Defense-related stats by 30% in PVP.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Lightning**' +
            "\n" + 'Inflicts **Rupture** damage equal to **100%/150%/250%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Lightning Power**' +
            "\n" + '**Increases Attack** of all allies by **30%/40%/60%** for **2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Lightning King Decapitation**' +
            "\n" + 'Inflicts damage equal to **560%/616%/672%/728%/784%/840%** of Attack on all enemies. **Shocks** for **4** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}