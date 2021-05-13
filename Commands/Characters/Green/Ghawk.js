const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Knighthood of Scraps Disposal]** Captain Hawk')
            .setThumbnail('https://i.imgur.com/dUoJjnY.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Unknown' +
            "\n" + ' ' +
            "\n" + '**Passive: Sir Captain Hawk, Works in Subslot: No**' +
            "\n" + 'Increases all stats of the hero by 15%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Charging Body**' +
            "\n" + 'Inflicts **Pierce** damage equal to **160%/240%/400%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Hind Leg**' +
            "\n" + 'Inflicts damage equal to **200%/240%/400%** of Attack on one enemy and **Explodes** after **2/1/1** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Hectic Blow**' +
            "\n" + 'Inflicts damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy. Decreases HP-related stats by 40% for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}