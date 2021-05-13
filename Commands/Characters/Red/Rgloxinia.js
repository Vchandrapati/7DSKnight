const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Elite Demon]** Gloxinia of Repose')
            .setThumbnail('https://i.imgur.com/bkwKiGl.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Fairy' +
            "\n" + ' ' +
            "\n" + '**Passive: One Protected by the Sacred Tree, Works in Subslot: No**' +
            "\n" + 'Fills the ULtimate Move Gauge by 1 more orb when the heros skill ranks up. (Excludes rank increase from skill or Unqiue effects)' +
            "\n" + ' ' +
            "\n" + '**Commandment of Repose**' +
            "\n" + 'Decreases ATK-related stats of heroes who use 2 or more skills in 1 turn by 30% for 2 turns in PVP. (Applies to both allies and enemies when entering battle. Applies before the second skill is activated)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Pierce Stick**' +
            "\n" + 'Inflicts damage equal to **120%/120%/180%** of Attack on all enemies. **(Allows the use of only Rank 1 Skills for 1/2 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Spirit Spear Basquias, Seventh Form: Moon Rose**' +
            "\n" + 'Removes Debuffs from all allies. **(Heals HP of all allies equal to 240%/300% of Attack at r2 and r3, Grants Debuff Immunity for 2 turn(s) at r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Spirit Spear Basquias, First Form: Basquias**' +
            "\n" + 'Inflicts **Ruin** damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}