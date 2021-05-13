const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[The Fox Sin of Greed]** Adventurer Ban')
            .setThumbnail('https://i.imgur.com/kyhThP5.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Extort Life, Works in Subslot: No**' +
            "\n" + 'Decreases all enemies HP-related stats by 10% at the start of the next turn if the hero doesnt take damage. (Limit 5 time(s), resets upon taking damage)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Drain**' +
            "\n" + 'Inflicts damage equal to **150%/150%/250%** of Attack on on all enemies. **(Lifesteals for 30% on r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Snatch**' +
            "\n" + '**Extort**, **20%/30%/50%** Attack and Defense from all enemies for **2/2/3** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Fox Hunt**' +
            "\n" + 'Inflicts damage equal to **350%/385%/420%/455%/490%/525%** of Attack on one enemy. **Extort**, 50% Attack and Defense for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Jericho): Fake Strike**' +
            "\n" + 'Inflicts damage equal to **400%/440%/480%/520%/560%/600%** of Attack on one enemy. **Extort**, 50% Attack and Defense for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}