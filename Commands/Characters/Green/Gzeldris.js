const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['gzel', 'festzeldris'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Demon Kings Deputy]** Executioner Zeldris')
            .setThumbnail('https://i.imgur.com/p4EIMoC.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Scent of Death, Works in Subslot: Yes**' +
            "\n" + 'Increases the allies basic stats by 2% for every Debuff applied on all enemies. (Limit 10 times)' +
            "\n" + ' ' +
            "\n" + '**Commandment of Piety**' +
            "\n" + 'If a Critical Strike occurs from skill use, decreases Crit Chance and Crit Damage of the target by 10%. (Applies to both allies and enemies when entering battle, excludes Death Match, stacks up to 3 times)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Black Road**' +
            "\n" + 'Inflicts **Cut** damage, which does not activate Crit Damage, equal to **200%/300%/500%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Demonic Zone**' +
            "\n" + 'Applies an effect which depletes Ultimate Move Gauges by **1/1/2** orb at the end of the enemys turn on all enemies for **1/1/2 turn(s)**. **Then restricts the use of Ultimate Moves at r2 and r3**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Blackout**' +
            "\n" + 'Inflicts damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy and decreases all enemies **HP-related stats by 5%/7%/9%/11%/13%/15%** for **2 turn(s)**.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}