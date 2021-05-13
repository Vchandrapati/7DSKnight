const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['levi'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Greatest Soldier]** Levi Ackerman')
            .setThumbnail('https://i.imgur.com/fRoZcbJ.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: A Choice Without Regrets, Works in Subslot: No**' +
            "\n" + 'Attacking the enemy with the lowest percentage of HP results in a critical strike. (Activates even when attacking the last remaining enemy or when there are two enemies with the same HP percentage)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: I Will Exterminate Them**' +
            "\n" + 'Inflicts **Spike** damage equal to **160%/240%/400%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: I Can Do It Myself**' +
            "\n" + 'Inflicts **Despair** damage equal to **130%/195%/325%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: I Will Be the One**' +
            "\n" + '**Cancels Buffs and Stances** on one enemy and inflicts damage equal to **630%/693%/756%/819%/882%/945%** of Attack.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/CRIT' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}