const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Halloween]** Holy Knight Gowther')
            .setThumbnail('https://i.imgur.com/3iN8rT2.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Unknown' +
            "\n" + ' ' +
            "\n" + '**Passive: The Beauty of Differences, Works in Subslot: No**' +
            "\n" + 'Increases allies Attack-related stats by 7% at the start of the every turn if allies in battle are all from different races. (Limit 5 time(s), applies when entering battle, resets when two of the same race appear' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Darkness Halloween**' +
            "\n" + 'Inflicts damage equal to **120%/120%/180%** of Attack on all enemies. **Depletes 1/2/2** Ultimate Move Gauge orb(s) at the end of the enemies turn for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: invasion Arrow**' +
            "\n" + 'Increases Skill Ranks of **one/all/all** ally. **(Increases basic stats by 20% for 3 turn(s))**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Rewrite Light**' +
            "\n" + 'Inflicts damage equal to **350%/385%/420%/455%/490%/525%** of Attack on all enemies and **depletes** 3 Ultimate Move Gauge orb(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Skinny King): Holy Ballista**' +
            "\n" + 'Inflicts damage equal to **400%/440%/480%/520%/560%/600%** of Attack on all enemies and **depletes** 5 Ultimate Move Gauge orb(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}