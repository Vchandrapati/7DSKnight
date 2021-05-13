const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
        .setColor('#1187C2')
        .setTitle('**[King of Prophecies]** Adventurer Arthur')
        .setThumbnail('https://i.imgur.com/wEsby0A.jpg')
        .setDescription('Rarity: SR' + 
        "\n" + 'Attribute: Blue' +
        "\n" + 'Race: Human' +
        "\n" + ' ' +
        "\n" + '**Passive: The Kings Will, Works in Subslot: No**' +
        "\n" + 'Increases HP-related stats by 6% at the start of the next turn if the hero takes damage. (Limit 5 time(s))' +
        "\n" + ' ' +
        "\n" + '**Skill 1: Sharp Blade**' +
        "\n" + 'Inflicts **Detonate** damage equal to **160%/240%/400%** of Attack on all enemies.' +
        "\n" + ' ' +
        "\n" + '**Skill 2: Covering Fire**' +
        "\n" + 'Inflicts damage equal to **120%/120%/180%** of Attack on all enemies. **(Disables Recovery Skills for 1/2 turn(s) at r2 and r3)**.' +
        "\n" + ' ' +
        "\n" + '**Ultimate: Cross Blade**' +
        "\n" + 'Inflicts damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy. Decreases Defense-related stats by 40% for 2 turn(s).' +
        "\n" + ' ' +
        "\n" + '**Recommended Gear:** ATK/DEF' +
        "\n" + '**Recommended Substats:** ATT/DEF/HP')
        message.channel.send(Character);
    }
}