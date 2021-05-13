const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[The Four Archangels]** Tarmiel of Ocean')
            .setThumbnail('https://i.imgur.com/JKZTJpc.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Archangel' +
            "\n" + ' ' +
            "\n" + '**Passive: Angelic Wrath, Works in Subslot: No**' +
            "\n" + 'Decreases all enemies Max HP by the value of 200% of the heros Defense. (Applies when entering battle, excludes Death Match)' +
            "\n" + ' ' +
            "\n" + '**Grace of Ocean**' +
            "\n" + 'When the hero takes damage on enemies turn, recovers HP equal to 150% of Defense at the start of allies turn.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Ark Beam**' +
            "\n" + 'Inflicts damage equal to **120%/300%/450%** of Attack on one enemy and depletes **1/1/3** Ultimate Move Gauge orb(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Ark Shield**' +
            "\n" + 'Assumes a Stance for **1/2/3** turn(s) which reduces the final damage taken by **40%/50%/65%** when an ally is attacked, Tarmiel takes **40%/35%/30%** of the reduced damage.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Ark**' +
            "\n" + 'Inflicts damage equal to **420%/462%/504%/546%/588%/630%** of Defense on all enemies and restores the HP of all allies by 30% of damage dealt.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** DEF/DEF/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}