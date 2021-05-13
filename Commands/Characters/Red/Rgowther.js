const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[The Goat Sin of Lust]** Holy Knight Gowther')
            .setThumbnail('https://i.imgur.com/Q1l6ANz.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Unknown' +
            "\n" + ' ' +
            "\n" + '**Passive: Trick, Works in Subslot: No**' +
            "\n" + 'Increases all allies Attack by 10% at the start of the next turn if the hero doesnt take damage. (Limit 5 time(s), resets upon taking damage)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Memory Arrow**' +
            "\n" + 'Inflicts damage equal to **120%/120%/180%** of Attack on all enemies. **(Disables Attack Skills for 1/2 turn(s) at r2 and r3)**.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: invasion Arrow**' +
            "\n" + 'Increases Skill Ranks of **one/all/all** ally. **(Increases basic stats by 20% for 3 turn(s))**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Rewrite Light**' +
            "\n" + 'Inflicts damage equal to **350%/385%/420%/455%/490%/525%** of Attack on all enemies and **depletes** 3 Ultimate Move Gauge orb(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Skinny King): Holy Ballista**' +
            "\n" + 'Inflicts damage equal to **400%/440%/480%/520%/560%/600%** of Attack on all enemies and **depletes** 5 Ultimate Move Gauge orb(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}