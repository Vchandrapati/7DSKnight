const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[The Ten Commandments]** Galland of Truth')
            .setThumbnail('https://i.imgur.com/beAlc2E.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Galland Game, Works in Subslot: No**' +
            "\n" + 'Coerces one enemy. The affected target cannot activate Debuffs when using skills and may only attack Galland. (Limit 1 time(s) and does not apply to Death Match. Applies when entering battle.)' +
            "\n" + ' ' +
            "\n" + '**Commandment of Truth**' +
            "\n" + 'Petrifies allies and enemies who have used Rank Up and Rank Down skills for 2 turns. (Does not apply to Death Match. Applies when entering battle.)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Critical Strike**' +
            "\n" + 'Inflicts **Amplify** damage equal to **180%/270%/450%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Wretched Scatter Strike**' +
            "\n" + 'Inflicts damage equal to **76%/114%/190%** of Attack on all enemies. Makes target(s) **Bleed** for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Critical over**' +
            "\n" + 'Increases the heros basic stats by 50% for 3 turn(s) and inflicts **420%%/462%/504%/546%/588%/630%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}