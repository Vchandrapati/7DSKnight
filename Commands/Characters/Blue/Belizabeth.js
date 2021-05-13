const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
        .setColor('#1187C2')
        .setTitle('**[A New Adventure]** Princess Elizabeth')
        .setThumbnail('https://i.imgur.com/2idzt2I.jpg')
        .setDescription('Rarity: SSR' + 
        "\n" + 'Attribute: Blue' +
        "\n" + 'Race: Goddess' +
        "\n" + ' ' +
        "\n" + '**Passive: Sedulous Heart, Works in Subslot: No**' +
        "\n" + 'Removes all allies Debuffs, fully heals their HP, and fills Ultimate Move Gauge by 2 orb(s) when the hero dies.' +
        "\n" + ' ' +
        "\n" + '**Skill 1: Radiant Explosion**' +
        "\n" + 'Disables Debuff Skills of all enemies for 1 turn(s). **(Inflicts damage equal to **120%/180%** of Attack on r2 and r3)**' +
        "\n" + ' ' +
        "\n" + '**Skill 2: Brilliant Protection**' +
        "\n" + 'removes Debuffs from one ally. **(Removes Debuffs and heals HP of one/all ally equal to 300% of Attack. Grants Debuff Immunity for 2 turn(s) on r2 and r3)**' +
        "\n" + ' ' +
        "\n" + '**Ultimate: Life Authority**' +
        "\n" + 'Heals HP of all allies equal to **420%/462%/504%/546%/588%/630%** of Attack and fills the Ultimate Move Gauge by 2 orb(s).' +
        "\n" + ' ' +
        "\n" + '**Ultimate (Combined with Fat King): Goddess Garden**' +
        "\n" + 'Heals HP of all allies equal to **480%/528%/576%/624%/672%/720%** of Attack and fills the Ultimate Move Gauge by 2 orb(s).' +
        "\n" + ' ' +
        "\n" + '**Recommended Gear:** HP/DEF' +
        "\n" + '**Recommended Substats:** ATT/DEF/HP')
        message.channel.send(Character);
    }
}