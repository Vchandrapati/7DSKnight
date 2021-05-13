const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Liones Hero]** Holy Knight Gowther')
            .setThumbnail('https://i.imgur.com/JqNpyBy.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Unknown' +
            "\n" + ' ' +
            "\n" + '**Passive: Auto recovery, Works in Subslot: Yes**' +
            "\n" + 'Allies recover 15% of diminished HP for each Debuff removed from self.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Pain Edition Fear**' +
            "\n" + 'Inflicts **Weak Point** damage equal to **80%/110%/170%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Blackout**' +
            "\n" + 'Disable Debuff Skills of all enemies for 1 turn(s). **(Disable Buff and Debuff Skills for 2 turn(s) at r2 and Disable everything but Attack Skill for 2 turn(s) at r3.)**' +
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