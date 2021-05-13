const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[The Six Knights of Black]** Captain Bellion')
            .setThumbnail('https://i.imgur.com/tq8ZFaw.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Dark Aura, Works in Subslot: No**' +
            "\n" + 'Recovers by 30% of diminished HP for each Debuff removed from the hero.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Rage Attack**' +
            "\n" + 'Inflicts **Shatter** damage equal to **120%/180%/300%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Lightning Blade**' +
            "\n" + 'Inflicts damage equal to **120%/300%/450%** of Attack on one enemy and **depletes** **1/1/3** Ultimate Move Gauge orb(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Earth Strike**' +
            "\n" + 'Inflicts damage equal to **525%/578%/631%/684%/737%/790%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}