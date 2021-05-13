const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[The Ten Commandments]** Gloxinia of Repose')
            .setThumbnail('https://i.imgur.com/5Fqw4bS.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Fairy' +
            "\n" + ' ' +
            "\n" + '**Passive: The Kings Virtue, Works in Subslot: No**' +
            "\n" + 'Increases the hero’s Defense-related stats by 5% for every alive ally. Increases Attack-related stats by 5% when an ally dies. (Applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Commandment of Repose**' +
            "\n" + 'Decreases ATK-related stats of heroes who use 2 or more skills in 1 turn by 30% for 2 turns in PVP. (Applies to both allies and enemies when entering battle. Applies before the second skill is activated)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Vine Stab**' +
            "\n" + 'Inflicts damage equal to **140%/210%/350%** of Attack on one enemy. Makes target(s) **Bleed** for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Spirit Spear Basquias, Ninth Form: Death Thorn**' +
            "\n" + 'Inflicts damage equal to **120%/120%/180%** of Attack on all enemies. **(Disables Attack Skills for 1/2 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Spirit Spear Basquias, First Form: Basquias**' +
            "\n" + 'Inflicts **Ruin** damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}