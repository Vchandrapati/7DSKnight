const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Sweet Temptation]** Guardian Elaine')
            .setThumbnail('https://i.imgur.com/KFTxX3X.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Fairy' +
            "\n" + ' ' +
            "\n" + '**Passive: Power of Nature, Works in Subslot: Yes**' +
            "\n" + 'Increases allies stat-related Buffs by half of their values in Death Match. (Excluding Extort)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Slicing Winds**' +
            "\n" + 'Inflicts damage equal to **240%/300%/500%** of Attack on one enemy. **(Fills gauge by 1/2 on r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Binding Roots**' +   
            "\n" + 'Decreases Defense-related stats of all enemies by **20%/30%/40%** for **2/2/3** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Wrath of the Autumn Wind**' +
            "\n" + 'Cancels Buffs and Stances on one enemy, inflicts damage equal to **490%/539%/588%/637%/686%/735%** of Attack, then Stuns for 1 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}