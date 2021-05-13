const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Swift Sword]** Foreign Swordsman Nanashi')
            .setThumbnail('https://i.imgur.com/Bsx7Hfn.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Lost Power, Works in Subslot: Yes**' +
            "\n" + 'At the start of allies\' turn, applies a buff to allies with 2 or less skill cards, increasing Max HP, Crit Resistance and Crit Defense by 20% for 1 turn that additionally reduces the attacking enemy\'s Ultimate Move Gauge by 1 orb per turn.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Gale Weasel**' +
            "\n" + 'Inflicts damage equal to **220%/220%/3600%** of Attack on one enemy. **(removes 1/2 orb(s) from the taget\'s Ultimate Move Gauge, and Deletes 1/2 skill(s) at random at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Thunderclap**' +
            "\n" + 'Inflicts **Despair** damage equal to **130%/195%/325%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Leaf Slash**' +
            "\n" + 'Inflicts **Amplify** damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}