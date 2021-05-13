const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Executor of Darkness]** Guardian Deity Camila')
            .setThumbnail('https://i.imgur.com/F00sFyE.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Absolute Power, Works in Subslot: No**' +
            "\n" + 'Increases HP-related stats by 5% when the hero takes damage during the enemys turn. If there are 5 or more of this effect, removes the Buffs and Deletes 1 hero skill and completely fills the Ultimate Move Gauge.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Dark Blade**' +
            "\n" + 'Inflicts damage equal to **200%/200%/250%** of Attack on one enemy. **(Stuns and Cancels Stance at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Royal Sword **' +
            "\n" + 'Inflicts damage equal to **150%/150%/250%** of Attack on on all enemies. **(Lifesteals at r2 and r3 for 30%)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Emancipation**' +
            "\n" + '**Transforms** for 5 turn(s), removing Debuffs from Allies and Buffs from enemies, then decreasing enemy Max HP by 4% for each Buff removed for 3 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Post Transformation**' +
            "\n" + ' ' +
            "\n" + '**Passive: Guardians Memory, Works in Subslot: No**' +
            "\n" + 'Increases allies Attack-related stats by 20%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Rusty Nail**' +
            "\n" + 'Inflicts **Charge** damage equal to **200%/300%/500%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Phantom Maze**' +
            "\n" + 'Inflicts **Spike** damage equal to **100%/150%/250%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Shadow Trap**' +
            "\n" + 'Inflicts damage equal to 840% of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}