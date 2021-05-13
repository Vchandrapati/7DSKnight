const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['rderi'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[The Ten Commandments]** Derieri of Purity')
            .setThumbnail('https://i.imgur.com/zyKsjrD.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Combat Power, Works in Subslot: No**' +
            "\n" + 'Increases Attack by 10% when the hero uses skills. The effect is removed when a skill is not used. (Limit 10 time(s))' +
            "\n" + ' ' +
            "\n" + '**Commandment of Purity**' +
            "\n" + 'Decreases the damage of ranged skills by 35% in PVP. (Applies to both allies and enemies when entering battle, excludes Ultimate Moves)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Darkness Hand**' +
            "\n" + 'Inflicts damage equal to **240%/360%/600%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Injection**' +
            "\n" + 'Increases basic stats by **20%/30%/50%** for **2/2/3** turn(s). **(Gains Evasion for 1 turn on r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Combo Star**' +
            "\n" + 'Inflicts **Amplify** damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}