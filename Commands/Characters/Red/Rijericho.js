const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['rijeri'],

    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Knight of Frost]** Guardian Jericho')
            .setThumbnail('https://i.imgur.com/9UVimIa.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Unwavering Will, Works in Subslot: Yes**' +
            "\n" + 'When the enemy takes Critical Strike damage from the heros skill, an effect is applied on the damaged enemy which decreases Defense-related stats by 40% for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Ice Blade**' +
            "\n" + 'Inflicts damage equal to **220%/220%/360%** of Attack on one enemy. **(Freezes for 1/2 turn(s). When the Freeze is removed by using Skills, Ultimate Moves or after turns have passed, inflict damage equal to 20%/40% of the remaining HP at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Ice Wave**' +
            "\n" + 'Inflicts **Detonate** damage equal to **160%/240%/400%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Silent Split**' +
            "\n" + 'Inflicts **Spike** damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Guila): Chain Slash**' +
            "\n" + 'Inflicts **Spike** damage equal to **640%/704%/768%/832%/896%/960%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/CRIT' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}