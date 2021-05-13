const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Break]** Grandmaster Dreyfus')
            .setThumbnail('https://i.imgur.com/Rxe9ZrL.jpg')
            .setDescription('Rarity: SR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Concentration, Works in Subslot: No**' +
            "\n" + 'Increases all allies Pierce Rate to 200% of their values when the heros Ultimate Move Gauge is completely filled.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Imperial Sword Art Type 3**' +
            "\n" + '**Removes Buffs** and inflicts damage equal to **220%/300%/400%** of Attack on one enemy. **(Cancels Buffs and Stances at r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Demolishing Attack**' +
            "\n" + 'Inflicts damage equal to **120%/120%/180%** of Attack on all enemies. **(Disables Buff and Debuff Skills for 1/2 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Guardian Attack**' +
            "\n" + 'Inflicts **Spike** damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy. Decreases Defense-related stats by 40% for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Milky Way Jail Break Blade**' +
            "\n" + 'Inflicts **Spike** damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}