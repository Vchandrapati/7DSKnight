const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['jim'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Stranger Things]** Jim Hoppers')
            .setThumbnail('https://i.imgur.com/5slZJUK.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Marksman, Works in Subslot: No**' +
            "\n" + 'At the beginning of the allies turn, randomly applies Direct Hit on 2 enemies for 1 turn. Enemies with Direct Hit take 40% more damage and becomes Poisoned for 1 turn when attacked by collab heroes. (Activates when entering battle, excludes Death Match)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Aimed Shot**' +
            "\n" + 'Inflicts damage equal to **120%/300%/450%** of Attack on one enemy and **depletes 1/1/3** Ultimate Move Gauge orb(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Kick & Shoot**' +
            "\n" + 'Inflicts damage equal to **200%/200%/250%%** of Attack on one enemy. **(Stuns for 1/2 turn(s) on r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Macho Chief**' +
            "\n" + 'Inflicts **Weak Point** damage equal to **385%/424%/463%/502%/541%/578%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}