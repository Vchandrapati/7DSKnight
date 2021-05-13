const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Fairy Kings Forest]** Guardian Elaine')
            .setThumbnail('https://i.imgur.com/MKCTF6E.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Fairy' +
            "\n" + ' ' +
            "\n" + '**Passive: Saints Blessing, Works in Subslot: Yes**' +
            "\n" + 'Increase Fairy allies HP-related stats by 15%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Wind of the Fairy Kings Forest**' +
            "\n" + 'Inflicts damage equal to **160%/210%/400%** of Attack on one enemy and decreases skill ranks. **(Depletes the Ultimate Move Gauge by the number of skill rank decreases. on r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Wrath of the Gentle Breeze**' +
            "\n" + 'Inflicts damage equal to **150%/150%/250%** of Attack on all enemies. **(Depletes 1/3 Ultimate Move Gauge orb(s) on r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Wrath of the Autumn Wind**' +
            "\n" + 'Cancels Buffs and Stances on one enemy, inflicts damage equal to **490%/539%/588%/637%/686%/735%** of Attack, then Stuns for 1 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}