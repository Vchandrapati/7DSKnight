const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[The Lion Sin of Pride]** Holy Knight Escanor')
            .setThumbnail('https://i.imgur.com/iRJzSCk.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Hellfire, Works in Subslot: No**' +
            "\n" + 'Applies an effect on the hero which increases HP-related stats by 50% at the start of the battle for 3 turn(s). (Applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Blazing Sun**' +
            "\n" + 'Inflicts **Amplify** damage equal to **180%/270%/450%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Charge & Fire**' +
            "\n" + 'Inflicts damage equal to **150%/150%/250%** of Attack on all enemies. **(Depletes 1/3 Ultimate Move Gauge orb(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Punishment**' +
            "\n" + 'Inflicts damage equal to **840%/924%/1008%/1092%/1176%/1260%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Merlin): Gentlemans Dignity**' +
            "\n" + 'Inflicts damage equal to **960%/1056%%/1152%/1248%/1344%/1440%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}