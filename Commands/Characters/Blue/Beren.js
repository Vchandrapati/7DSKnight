const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Cadet Corps]** Eren Yeager')
            .setThumbnail('https://i.imgur.com/IX0J9um.jpg')
            .setDescription('Rarity: SR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Righteous Belief, Works in Subslot: No**' +
            "\n" + 'Increases the heros damage dealt against an enemy of Unknown race by 30%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Nows the Time!**' +
            "\n" + 'Inflicts damage equal to **240%/300%/500%** of Attack on one enemy. **(Cancels Stances on r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: I Will Succeed!**' +
            "\n" + '**Increases basic stats** by **20%/30%/50%** for **2/2/3** turn(s). **(Evasion for 1 turn(s).)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: I Will Wipe You Out!**' +
            "\n" + 'Inflicts **Shatter** damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}