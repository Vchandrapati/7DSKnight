const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[New Legend]** Princess Elizabeth')
            .setThumbnail('https://i.imgur.com/8EoSgs0.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Goddess' +
            "\n" + ' ' +
            "\n" + '**Passive: Shared Warmth, Works in Subslot: No**' +
            "\n" + 'Increases allies Recovery Rate by 10% every time the hero heals an allys HP. (Limit 10 time(s))' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Royal Dignity**' +
            "\n" + 'Inflicts damage equal to **130%/200%/300%** of Attack on all enemies and restores the HP of the ally with the lowest HP by **80%/30%/40%** of damage dealt. **(Heal HP of all allies at r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Blessing Light**' +
            "\n" + 'Removes Debuffs from all allies. **(Increases Defense-related stats by **50%/80%** for 3 turn(s) on r2 and r3 and Grants Debuff Immunity at r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Life Authority**' +
            "\n" + 'Heals HP of all allies equal to **420%/462%/504%/546%/588%/630%** of Attack and fills the Ultimate Move Gauge by 2 orb(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Fat King): Goddess Garden**' +
            "\n" + 'Heals HP of all allies equal to **480%/528%/576%/624%/672%/720%** of Attack and fills the Ultimate Move Gauge by 2 orb(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}