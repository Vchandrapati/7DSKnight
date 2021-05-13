const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['gdm'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[New Legend]** Demon Meliodas')
            .setThumbnail('https://i.imgur.com/0pJY1uB.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Death Sentence, Works in Subslot: No**' +
            "\n" + 'The heros Ultimate Move Gauge fills by the amount of orbs possessed by an enemy killed by the hero during their turn.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Chain Blow**' +
            "\n" + 'Inflicts damage equal to **180%/270%/450%** of Attack on one enemy. **Seals** for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Devil Spear**' +
            "\n" + 'Inflicts damage equal to **135%/150%/250%** of Attack on all enemies. **(Infects for 1/3 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Hell Buster**' +
            "\n" + 'Inflicts **Weak Point** damage equal to **385%/424%/463%/502%/541%/578%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Merlin): Devil Assault**' +
            "\n" + 'Inflicts **Weak Point** damage equal to **440%/484%/528%/572%/616%/660%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}