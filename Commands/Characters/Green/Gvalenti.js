const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Earthshaker]** Weapon Researcher Valenti')
            .setThumbnail('https://i.imgur.com/pJ1l8qs.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Ingenious Strategy, Works in Subslot: No**' +
            "\n" + 'Decreases all enemies Pierce Rate by the value of the heros Resistance at the start of the battle. (Applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: 2nd Law of Motion**' +
            "\n" + 'Inflicts damage equal to **180%/180%/300%** of Attack on one enemy. Decreases Defense-related stats by **20%/30%/40%** for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Genesis**' +
            "\n" + 'Inflicts damage equal to **120%/120%/150%** of Attack on all enemies. **Decreases Attack-related stats by 20%/30% for 2/3 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Maxwells Goblin**' +
            "\n" + 'Inflicts **Rupture** damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/RES/HP')
            message.channel.send(Character);
    }
}