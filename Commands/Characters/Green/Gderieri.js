const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['gderi'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Elite Demon]** Derieri of Purity')
            .setThumbnail('https://i.imgur.com/Lvs9PiS.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Selfish Power, Works in Subslot: No**' +
            "\n" + 'No enemies can fill Ultimate Move Gauge by moving skills. (Applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Commandment of Purity**' +
            "\n" + 'Decreases the damage of ranged skills by 35% in PVP. (Applies to both allies and enemies when entering battle, excludes Ultimate Moves)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Chain Strike**' +
            "\n" + 'Inflicts damage equal to **120%/300%/450%** of Attack on one enemy and depletes **1/1/3** Ultimate Move Gauge orb(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Leap Shock**' +
            "\n" + 'Inflicts damage equal to 150% of Attack on all enemies. **(Fills ult gauge by 1/2 at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Combo Star**' +
            "\n" + 'Inflicts **Amplify** damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}