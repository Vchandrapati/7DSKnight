const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[The Ten Commandments]** Zeldris of Piety')
            .setThumbnail('https://i.imgur.com/BEIfFYQ.jpgrs')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Demon Kings Deputy, Works in Subslot: No**' +
            "\n" + 'ncreases the heros Crit Damage by 30% for each orb removed from the Ultimate Move Gauge. (Limit 3 time(s), excludes depletion from Ultimate Move use)' +
            "\n" + ' ' +
            "\n" + '**Commandment of Piety**' +
            "\n" + 'removes Debuffs from allies and enemies that moved skill(s) and depletes the Ultimate Move Gauge orb(s) by 1. (Excluding Death Match)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Slash Hack**' +
            "\n" + 'Inflicts **Spike** damage equal to **160%/240%/400%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Invisible Blade**' +
            "\n" + 'Inflicts **Despair** damage equal to **130%/195%/325%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Reckless Line**' +
            "\n" + 'Inflicts **Spike** damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/CRIT' +
            "\n" + '**Recommended Substats:** CRIT/DEF/HP')
            message.channel.send(Character);
    }
}