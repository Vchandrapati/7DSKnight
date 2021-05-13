const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
        .setColor('#1187C2')
        .setTitle('**[The Seven Deadly Sins]** Old Fart King')
        .setThumbnail('https://i.imgur.com/eal7UoI.jpg')
        .setDescription('Rarity: SSR' + 
        "\n" + 'Attribute: Blue' +
        "\n" + 'Race: Fairy' +
        "\n" + ' ' +
        "\n" + '**Passive: Fairy Kings Power, Works in Subslot: No**' +
        "\n" + 'Heals 15% of max HP at the start of the next turn if the hero takes damage.' +
        "\n" + ' ' +
        "\n" + '**Skill 1: Spirit Spear Chastiefol, First Form: Chastiefol**' +
        "\n" + 'Inflicts damage equal to **140%/210%/2350%** of Attack on one enemy. Makes target(s) **Bleed** for 2 turn(s).' +
        "\n" + ' ' +
        "\n" + '**Skill 2: Spirit Spear Chastiefol, Fifth Form: Increase**' +
        "\n" + 'Assumes a Stance for 1 turn(s) which inflicts damage equal to **160%/240%/400%** of Attack via counter when an ally is attacked.' +
        "\n" + ' ' +
        "\n" + '**Ultimate: Guardian Attack**' +
        "\n" + 'Inflicts damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy. Decreases Defense-related stats by 40% for 2 turn(s).' +
        "\n" + ' ' +
        "\n" + '**Ultimate: Sharpness Whisper**' +
        "\n" + 'Inflicts damage equal to **640%/704%/768%/832%/896%/960%** of Attack on one enemy. Decreases Defense-related stats by 40% for 2 turn(s).' +
        "\n" + ' ' +
        "\n" + '**Recommended Gear:** ATT/DEF' +
        "\n" + '**Recommended Substats:** ATT/DEF/HP')
        message.channel.send(Character);
    }
}