const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Creation]** Fighter Diane')
            .setThumbnail('https://i.imgur.com/JTW5ZZi.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Giant' +
            "\n" + ' ' +
            "\n" + '**Passive: Stretch, Works in Subslot: No**' +
            "\n" + 'Taunts enemies and creates a barrier equal to 300% of Defense at the start of the battle. (Applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Metal Shock**' +
            "\n" + 'Inflicts **Sever** damage equal to **160%/270%/450%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Heavy Metal**' +
            "\n" + 'Taunts enemies and increases Defense-related stats by **80%/120%/200* for 3 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Dragon Kick**' +
            "\n" + 'Inflicts **Pierce** damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Howzer): Metal Cyclone**' +
            "\n" + 'Inflicts **Pierce** damage equal to **640%/704%/768%/832%/896%/960%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** DEF/DEF/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}