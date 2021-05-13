const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[The Wings of the Sky]** Celestial Ellatte')
            .setThumbnail('https://i.imgur.com/yzdbRiH.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Goddess' +
            "\n" + ' ' +
            "\n" + '**Passive: Brilliant Blessing, Works in Subslot: No**' +
            "\n" + 'Increases allies Crit Damage by 5% per hero skill use. (Limit 10 time(s))' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Angel Blade**' +
            "\n" + 'Inflicts **Detonate** damage equal to **160%/240%/400%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Anger Light**' +
            "\n" + 'Inflicts damage equal to **180%/270%/450%** of Attack on one enemy. Decreases Crit Resistance and Crit Defense by **30%/40%/50%** for 1 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Dancing Ray**' +
            "\n" + 'Remove Debuffs from all allies. Grants Debuff Immunity and increases Defense-related stats by **100%/110%/120%/130%/140%/150%** for 4 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}