const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
        .setColor('#1187C2')
        .setTitle('**[Ruler of Stormy Seas]** Noblesse Eastin')
        .setThumbnail('https://i.imgur.com/cIA5bnB.jpg')
        .setDescription('Rarity: SSR' + 
        "\n" + 'Attribute: Blue' +
        "\n" + 'Race: Human' +
        "\n" + ' ' +
        "\n" + '**Passive: Blue Wave, Works in Subslot: No**' +
        "\n" + 'Increases the heros basic stats by 5% for each Buff on allies and enemies. (Limit 5 time(s))' +
        "\n" + ' ' +
        "\n" + '**Skill 1: Quebrar**' +
        "\n" + 'Inflicts damage equal to **150%/180%/300%** of Attack on all enemies. **(Fills Gauge by 1/2 on r2 and r3))**' +
        "\n" + ' ' +
        "\n" + '**Skill 2: La Sed**' +
        "\n" + 'Increases Attack-related stats of all allies by **15%/20%/30%** for 2 turn(s).' +
        "\n" + ' ' +
        "\n" + '**Ultimate: Triste Fin**' +
        "\n" + 'Inflicts **Spike** damage equal to **350%/385%/420%/455%/490%/525%** of Attack on all enemies.' +
        "\n" + ' ' +
        "\n" + '**Recommended Gear:** HP/DEF' +
        "\n" + '**Recommended Substats:** ATT/DEF/HP')
        message.channel.send(Character);
    }
}