const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Sunshine]** Holy Knight Escanor')
            .setThumbnail('https://i.imgur.com/1eIex1A.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: The One at the Pinnacle, Works in Subslot: No**' +
            "\n" + 'Removes Buffs and Debuffs and becomes immune to Debuffs when the heros Ultimate Move Gauge is completely filled.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Elegant Blow**' +
            "\n" + 'Inflicts damage equal to **240%/300%/500%** of Attack on one enemy. **(Fills Ultimate Move Gauge by 1/2 orb(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Cruel Sun**' +
            "\n" + 'Inflicts damage equal to **180%/180%/300%** of Attack on one enemy. Ignites for 3 turn(s). **(Removes Buffs at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Punishment**' +
            "\n" + 'Inflicts damage equal to **840%/924%/1008%/1092%/1176%/1260%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Merlin): Gentlemans Dignity**' +
            "\n" + 'Inflicts damage equal to **960%/1056%%/1152%/1248%/1344%/1440%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}