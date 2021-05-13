const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Liones]** Princess Elizabeth')
            .setThumbnail('https://i.imgur.com/Or83HC1.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Goddess' +
            "\n" + ' ' +
            "\n" + '**Passive: Desperate Resolve, Works in Subslot: No**' +
            "\n" + 'Fills the heros Ultimate Move Gauge by 2 orb(s) at the start of the battle.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Punishing Strike**' +
            "\n" + 'Removes Buffs from one enemy and inflicts damage equal to **220%/300%/400%** of Attack. **(Cancels Buffs and Stances at r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Healing Grace**' +
            "\n" + 'Heals HP of all allies equal to **200%/240%/400%** of Attack. **(Removes Debuffs on r2 and r3)**' +
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