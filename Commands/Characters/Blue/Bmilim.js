const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['milim'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Tyrant of Destruction]** Milim Nava')
            .setThumbnail('https://i.imgur.com/ubazzti.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Unknown' +
            "\n" + ' ' +
            "\n" + '**Passive: The Only Dragonoid, Works in Subslot: No**' +
            "\n" + 'Increases Crit Damage by 8% per hero skill use. (Limit 10 time(s))' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Fire Storm**' +
            "\n" + 'Inflicts **Spike** damage equal to **160%/240%/400%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Knife Wind**' +
            "\n" + 'Inflicts damage equal to **60%/200%/200%** of Attack on **one/one/all** enemy.** Disables Ultimate Move(s)** for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Dragon Burster**' +
            "\n" + 'Inflicts **Detonate** damage equal to **350%/385%/420%/455%/490%/525%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}