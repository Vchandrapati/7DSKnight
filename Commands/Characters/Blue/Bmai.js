const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['mai'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[KOF 98]** Shiranui Mai')
            .setThumbnail('https://i.imgur.com/Dl7NrCY.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Mature Beauty, Works in Subslot: No**' +
            "\n" + 'Increases the heros basic stats by 15% for 2 turn(s) if their skill ranks up.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Sui Chou no Mai**' +
            "\n" + 'Inflicts damage equal to **120%/300%/450%** of Attack on one enemy and **depletes 1/1/3** Ultimate Move Gauge orb(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Ryuuenmbu**' +
            "\n" + 'Inflicts **Amplify** damage equal to **100%/150%/250%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Chou Hissatsu Shinobi-bachi**' +
            "\n" + 'Inflicts damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy. Increases the ranks of all of the heros skills.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}