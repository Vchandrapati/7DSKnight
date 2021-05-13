const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Thunderbolt]** Guardian Gilthunder')
            .setThumbnail('https://i.imgur.com/b7WlhhG.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Diamond Holy Knight, Works in Subslot: No**' +
            "\n" + 'Increases Resistance by 10% per each Ultimate Move Gauge orb. Increases by an additional 50% if it is completely filled.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Lightning Beast Chase**' +
            "\n" + 'Inflicts damage equal to **86%/129%/215%** of Attack on all enemies. **Shocks** for 4 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Lightning Kings Heavy Armor**' +   
            "\n" + 'Assumes a Stance which Taunts enemies and decreases damage taken by **30%/45%/75%** when attacked for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Lightning King Sword**' +
            "\n" + 'Inflicts **Rupture** damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Guila): Lightning Napalm**' +
            "\n" + 'Inflicts **Rupture** damage equal to **720%/792%/864%/936%/1008%/1080%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}