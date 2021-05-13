const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[The Four Archangels]** Ludociel of Flash')
            .setThumbnail('https://i.imgur.com/qdzAGNE.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Goddess' +
            "\n" + ' ' +
            "\n" + '**Passive: Supplication of Blessings, Works in Subslot: No**' +
            "\n" + 'Decreases Defense-related stats of enemy heroes with a Combat Class lower than the hero by 40% for 3 turn(s) in PVP. (Applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Grace of Flash**' +
            "\n" + 'Evades skills with Petrify, Freeze or Stun effects for 2 turn(s) at the start of the battle. (Includes Uniques and Commandment effects, excludes Ultimate Moves, does not apply to Death Match)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Blue Shine Blade**' +
            "\n" + 'Inflicts damage equal to **240%/360%/600%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Holy Beam**' +
            "\n" + 'Inflicts **Rupture** damage equal to **100%/150%/250%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Goddess Holy Ark**' +
            "\n" + 'Inflicts damage equal to **350%/385%/420%/455%/490%/525%** of Attack on all enemies and creates a barrier equal to **20%/30%/40%/50%/60%/80%** of the damage.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}