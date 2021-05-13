const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['11', 'eleven'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
        .setColor('#1187C2')
        .setTitle('**[Stranger Things]** Eleven')
        .setThumbnail('https://i.imgur.com/Gple0iX.png')
        .setDescription('Rarity: SSR' + 
        "\n" + 'Attribute: Blue' +
        "\n" + 'Race: Human' +
        "\n" + ' ' +
        "\n" + '**Passive: Cost of the Power, Works in Subslot: No**' +
        "\n" + 'Increases the hero\'s damage dealt against enemies by 40%. Remaining HP decreases by 10% for each Skill use.' +
        "\n" + ' ' +
        "\n" + '**Skill 1: Psychokinesis**' +
        "\n" + 'Inflicts **Power Strike** damage equal to **190%/285%/475%** of Attack on one enemy.' +
        "\n" + ' ' +
        "\n" + '**Skill 2: Psychic Wave**' +
        "\n" + 'Inflicts **Wave** damage equal to **180%/270%/450%** of Attack on all enemies.' +
        "\n" + ' ' +
        "\n" + '**Ultimate: Psychic Pressure**' +
        "\n" + 'Inflicts damage equal to **520%/572%/624%/676%/728%/780%** of Attack on one enemy and **restores the HP of all allies by 40% of damage dealt**.' +
        "\n" + ' ' +
        "\n" + '**Recommended Gear:** ATK/CRIT' +
        "\n" + '**Recommended Substats:** ATT/DEF/HP')
        message.channel.send(Character);
    }
}