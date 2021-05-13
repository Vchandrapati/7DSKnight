const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Oceanic Harmonizer]** Noblesse Eastin')
            .setThumbnail('https://i.imgur.com/8hC0h2t.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Song of the Sea, Works in Subslot: No**' +
            "\n" + 'Decreases damage that allies take from single target attacks by 6% for each <The Seven Catastrophes> hero in the team. (Including sub slot hero)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Water Canon**' +
            "\n" + 'Inflicts damage equal to **120%/300%/450%** of Attack on one enemy and **depletes 1/1/3** Ultimate Move Gauge orb(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Bubble Shower**' +
            "\n" + 'Removes Debuffs from all allies. **(Increases Defense-related stats by 50% for 3 turn(s) at r2 and Grants Debuff Immunity and increases Defense-related stats by 80% for 3 turn(s) at r3)** by **20%/20%/30%** for **2/2/3** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Triste Fin**' +
            "\n" + 'Inflicts **Spike** damage equal to **350%/385%/420%/455%/490%/525%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** Hp/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}