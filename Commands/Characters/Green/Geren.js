const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Titan Form]** Eren Yeager')
            .setThumbnail('https://i.imgur.com/MeSRWst.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human/Giant' +
            "\n" + ' ' +
            "\n" + '**Passive: Protective Heart, Works in Subslot: No**' +
            "\n" + 'Increases damage dealt by 10% for every orb filled in the heros Ultimate Move Gauge.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: I Will Exterminate Them All!**' +
            "\n" + 'Inflicts damage equal to **240%/300%/500%** of Attack on one enemy. **(Fills Ultimate Move Gauge by 1/2 orb(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Leave None Alive**' +
            "\n" + 'Inflicts damage equal to **120%/120%/180%** of Attack on on all enemies. **(Seals for 1/2 turn(s) at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: With My Own Hands!**' +
            "\n" + 'Undergoes a Titan **Transformation** for 5 turn(s), increasing Attack-related stats, Defense-related stats and HP-related stats by **10%/15%/20%/25%/30%/35%**, then decreasing Attack-related stats of all enemies by 30% for 1 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Post Transformation**' +
            "\n" + ' ' +
            "\n" + '**Passive: Titans Roar, Works in Subslot: No**' +
            "\n" + 'Immune to Ultimate Move Disable.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Rusty Nail**' +
            "\n" + 'Inflicts **Amplify** damage equal to **180%/270%/450%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Phantom Maze**' +
            "\n" + 'Inflicts damage equal to **150%/150%/250%** of Attack on all enemies. **(depletes 1/3 Ultimate Move Gauge orb(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Whole Body Blow**' +
            "\n" + 'Inflicts damage equal to 840% of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}