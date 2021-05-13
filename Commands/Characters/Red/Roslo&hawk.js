const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Knighthood of Scraps Disposal]** Oslo & Hawk')
            .setThumbnail('https://i.imgur.com/Dkmr6Mt.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Consume, Works in Subslot: No**' +
            "\n" + 'Increases the heros Ultimate Move Gauge by the number of orbs depleted from the enemys ULtimate Move Gauge by the hero.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Charge!**' +
            "\n" + 'Inflicts damage equal to **180%/270%/450%** of Attack on one enemy. Decreases Attack by **30%/40%/60%** for **1/2/3** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Fire the Catapult!**' +   
            "\n" + 'Inflicts damage equal to *150%/150%/250%** of Attack on all enemies. **(Depletes 1/3 Ultimate Move Gauge orb(s) at r2 and r3)**.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Charge Again?!**' +
            "\n" + 'Inflicts damage equal to **660%/726%/792%/858%/924%/990%** of Attack on one enemy. If there are 2 or more enemies, **Expels** the target for 1 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}