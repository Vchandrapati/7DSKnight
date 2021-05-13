const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['bderi'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Sweet Temptation]** Derieri of Purity')
            .setThumbnail('https://i.imgur.com/w6b5imN.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Cynical Beauty, Works in Subslot: No**' +
            "\n" + 'Increases basic stats by 10% up to 3 time(s) when the hero takes damage from skills. Applies Ultimate Move Disable effect on all enemies for 2 turn(s) at maximum stack.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Heavy Impact**' +
            "\n" + '**Removes Buffs** from one enemy and inflicts damage equal to **220%/300%/400%** of Attack. **(Cancels Buffs and Stances at r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Valentine\'s Gift**' +
            "\n" + '**Taunts** enemies, **increases Defense-related stats** by **30%/50%/80%**, and becomes **immune to Stun** for **1/2/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Combo Star**' +
            "\n" + 'Inflicts **Amplify** damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}