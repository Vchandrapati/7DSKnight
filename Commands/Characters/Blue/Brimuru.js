const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Ruler of Monsters]** Rimuru')
            .setThumbnail('https://i.imgur.com/WODFXZY.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Unknown' +
            "\n" + ' ' +
            "\n" + '**Passive: Storm Dragons Friend, Works in Subslot: No**' +
            "\n" + 'Increases Defense-related stats by 8% at the start of the next turn if the hero takes damage. (Limit 5 time(s))' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Indigo Flower**' +
            "\n" + 'Inflicts **Rupture** damage equal to **180%/270%/450%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Drop Deepen**' +
            "\n" + 'Assumes a Stance which grants Debuff Immunity for **1/1/2** turn. Heals **20%/30%/50%** of diminished HP at the start of the next turn. **(Taunts at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Gluttony**' +
            "\n" + '**Cancels Buffs and Stances** on one enemy, inflicts damage equal to **490%/539%/588%/637%/686%/735%** of Attack, then **Stuns** for 1 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Meliodas): Indiscriminate Absorption**' +
            "\n" + '**Cancels Buffs and Stances** on one enemy, inflicts damage equal to **560%/616%/672%/728%/784%/840%** of Attack, then **Stuns** for 1 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}