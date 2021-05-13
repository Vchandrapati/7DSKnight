const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['beatrice'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Re:Zero]** [Re:Zero] Caretaker of the Forbidden Library Beatrice')
            .setThumbnail('https://i.imgur.com/Z5krWT0.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Unknown' +
            "\n" + ' ' +
            "\n" + '**Passive: Caretaker of the Forbidden Library, Works in Subslot: No**' +
            "\n" + 'Increases the hero\'s HP-related stats by 5% for each Unknown ally in battle. Recover HP of Unknown allies by 60% of the amount the hero recovers when using skills. (Applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Mana Collection**' +
            "\n" + 'Inflicts damage equal to **180%/270%/400%** of Attack on one enemy and **Lifesteals 40%/60%/100%** of the damage.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: I Wonder If I Should Let You Know**' +
            "\n" + 'Inflicts **Despair** damage equal to **130%/195%/325%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Expert of Yin Magic**' +
            "\n" + 'Inflicts damage equal to **350%/385%/420%/455%/490%/525%** of Attack on all enemies and **Lifesteals 30%** of the damage.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}