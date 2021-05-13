const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[The Grizzly Sin of Sloth]** King the Fairy King')
            .setThumbnail('https://i.imgur.com/hIAQn0I.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Fairy' +
            "\n" + ' ' +
            "\n" + '**Passive: Fairy King, Works in Subslot: Yes**' +
            "\n" + 'Increases Fairy allies basic stats by 8%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Spirit Spear Chastiefol, Third Form: Fossilization**' +
            "\n" + 'Inflicts damage equal to **200%/200%/250%** of Attack on one enemy. **(Petrifies for 1/2 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Spirit Spear Chastiefol, Eighth Form: Pollen Garden**' +
            "\n" + '**Removes Debuffs** from all allies. **(Heals diminished HP of all allies by 30%/50% at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Spirit Spear Chastiefol, Fourth Form: Sunflower**' +
            "\n" + 'Inflicts **Shatter** damage equal to **420%/462%/504%/546%/588%/630%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Cross Shooting**' +
            "\n" + 'Inflicts **Shatter** damage equal to **480%/528%/576%/624%/672%/720%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}