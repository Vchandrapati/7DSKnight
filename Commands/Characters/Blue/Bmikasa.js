const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Greatest Soldier]** Mikasa Ackermann')
            .setThumbnail('https://i.imgur.com/YnE5BbJ.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Versatility, Works in Subslot: No**' +
            "\n" + 'Increases all stats of the hero by 3% for each ally that takes damage. (Limit 10 time(s)).' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Get Out of My Way or Die**' +
            "\n" + 'Inflicts damage equal to **140%/210%/350%** of Attack on one enemy. Makes target(s) **Bleed** for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: I Will Win**' +
            "\n" + 'Inflicts **Secret Technique** damage equal to **80%/120%/200%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Look Closely**' +
            "\n" + 'Increases the heros basic stats by 50% for 3 turn(s) and inflicts **420%/462%/504%/546%/588%/630%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}