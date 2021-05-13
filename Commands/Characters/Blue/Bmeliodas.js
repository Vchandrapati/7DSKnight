const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
        .setColor('#1187C2')
        .setTitle('**[Knight of Wrath]** Demon Meliodas')
        .setThumbnail('https://i.imgur.com/cwLCvep.jpg')
        .setDescription('Rarity: SSR' + 
        "\n" + 'Attribute: Blue' +
        "\n" + 'Race: Demon' +
        "\n" + ' ' +
        "\n" + '**Passive: Absolute Volition, Works in Subslot: No**' +
        "\n" + 'Unaffected by Attack Disable effects when the heros Ultimate Move Gauge has 4 orbs or less.' +
        "\n" + ' ' +
        "\n" + '**Skill 1: Enchant Hellblaze**' +
        "\n" + 'Inflicts **Pierce** damage equal to **100%/150%/250%** of Attack on all enemies.' +
        "\n" + ' ' +
        "\n" + '**Skill 2: Darkness Flutter**' +
        "\n" + 'Inflicts **Corrosion** damage equal to **15%/20%/20%** of **remaining/remaining/max** HP on all enemies for **2/3/3** turn(s).' +
        "\n" + ' ' +
        "\n" + '**Ultimate: Hell Buster**' +
        "\n" + 'Inflicts **Weak Point** damage equal to **385%/424%/463%/502%/541%/578%** of Attack on one enemy.' +
        "\n" + ' ' +
        "\n" + '**Ultimate (Combined with Merlin): Devil Assault**' +
        "\n" + 'Inflicts **Weak Point** damage equal to **440%/484%/528%/572%/616%/660%** of Attack on one enemy.' +
        "\n" + ' ' +
        "\n" + '**Recommended Gear:** ATK/DEF' +
        "\n" + '**Recommended Substats:** PIERCE/DEF/HP')
        message.channel.send(Character);
    }
}