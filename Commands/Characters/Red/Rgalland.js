const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Elite Demon]** Galland of Truth')
            .setThumbnail('https://i.imgur.com/GZMphR6.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Armor Break, Works in Subslot: Yes**' +
            "\n" + 'Strength attribute heroes ignores 30% of enemy Defense when use skills. (Excluding Counter Stance skills)' +
            "\n" + ' ' +
            "\n" + '**Commandment of Truth**' +
            "\n" + 'Petrifies allies and enemies who have used Rank Up and Rank Down skills for 2 turns. (Does not apply to Death Match. Applies when entering battle.)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Conflagration**' +
            "\n" + 'Inflicts **Shatter** damage equal to **180%/270%/450%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Beheading**' +
            "\n" + '**Removes Buffs** from one enemy and inflicts damage equal to **220%/300%/400%** of Attack. **(Cancels Buffs and Stances at r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Critical over**' +
            "\n" + 'Increases the heros basic stats by 50% for 3 turn(s) and inflicts **420%%/462%/504%/546%/588%/630%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}