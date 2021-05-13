const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Sunny Vacation]** Noblesse Eastin')
            .setThumbnail('https://i.imgur.com/ESoUpHp.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Beach Girl, Works in Subslot: No**' +
            "\n" + 'Increases allies\' Pierce Rate, Crit Chance and Crit Damage by 5% for every Debuff applied on enemies. (Limit 8 time(s), applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Faisceau d\'eau**' +
            "\n" + 'Inflicts **Weak Point** damage equal to **120%/180%/300%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Vague de Dauphin**' +
            "\n" + '**Disables Recovery Skills** of all enemies for **2/2/3** turn(s). **(Prevents Ultimate Move Gauges from filling up at r2 and Decreases Attack by 20% at r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Triste Fin**' +
            "\n" + 'Inflicts **Spike** damage equal to **350%/385%/420%/455%/490%/525%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}