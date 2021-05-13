const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Harlequin]** King the Fairy King')
            .setThumbnail('https://i.imgur.com/QqfwN4Q.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Fairy' +
            "\n" + ' ' +
            "\n" + '**Passive: Wrath of the Sacred Treasure, Works in Subslot: Yes**' +
            "\n" + 'Reduces all enemies current Pierce Rate by half in PVP.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Lightning Beast Chase**' +
            "\n" + 'Inflicts damage equal to **120%/120%/180%** of Attack on all enemies. **(Disables Recovery Skills for 1/2 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Fight Fire with Fire**' +   
            "\n" + 'Inflicts damage equal to **100%/150%/200%** of Attack on all enemies and Explodes after **2/1/1** turn(s).' +
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