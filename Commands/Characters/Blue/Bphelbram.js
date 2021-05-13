const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Cardinal]** One-Eyed Authority Helbram')
            .setThumbnail('https://i.imgur.com/Sgk1PpA.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Fairy' +
            "\n" + ' ' +
            "\n" + '**Passive: Grudge, Works in Subslot: No**' +
            "\n" + 'When the hero has 4 or more Ultimate Move Gauge, allies are immune to Stuns, Petrification and Freezes.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Edge Grind**' +
            "\n" + 'Inflicts damage equal to **150%/225%/375%** of Attack on one enemy. **Poisons** for 3 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Combat Roar**' +
            "\n" + '**Removes Debuffs** from **one/one/all** allies and grants **Debuff Immunity** for **1/2/2** turn(s). **(Increases basic stats by 20% at r2 and r3.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Killer Iceburg**' +
            "\n" + 'Inflicts damage equal to **400%/440%/480%/520%/560%/600%** of Attack on one enemy. **Freezes** for 1 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}