const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['gesta'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Elite Demon]** Estarossa of Love')
            .setThumbnail('https://i.imgur.com/LIAkznh.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Courageous Heart, Works in Subslot: Yes**' +
            "\n" + 'Allies have their Debuffs removed when using Stance Skills and gain Debuff Immunity for 2 turn(s). (Excluding Ultimate Moves)' +
            "\n" + ' ' +
            "\n" + '**Commandment of Love**' +
            "\n" + 'Decreases Attack-related stats by 20% for 3 turn(s) upon damaging an enemy with a skill. (Applies to both allies and enemies when entering battle, excluding Death Match)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Guillotine**' +
            "\n" + 'Inflicts **Charge** damage equal to **200%/300%/500** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Full Counter**' +
            "\n" + 'Assumes a Stance for **1/1/2** turn(s) which Taunts enemies and inflicts damage equal to **240%/360%/600%** of Attack when taking attacks.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Blackout**' +
            "\n" + 'Assumes a stance for 1 turn(s) which performs a Preemptive Strike before an ally is attacked, inflicting **300%/330%/360%/390%/420%/450%** of Attack and disabling all skills.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}