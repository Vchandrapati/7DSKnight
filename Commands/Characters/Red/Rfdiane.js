const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Kungfu Master]** Fighter Diane')
            .setThumbnail('https://i.imgur.com/lduw7af.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Giant' +
            "\n" + ' ' +
            "\n" + '**Passive: Unyielding Will, Works in Subslot: No**' +
            "\n" + 'Increases Crit Chance by 10% at the start of the next turn if the hero takes damage. (Limit 5 time(s))' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Ground Strike**' +
            "\n" + 'Inflicts **Shatter** damage equal to **180%/270%/450%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Sand Whirl**' +   
            "\n" + 'Decreases Defense-related stats of one enemy by **20%/30%/40%** and Disables Attack Skills for **2/2/3** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Dragon Kick**' +
            "\n" + 'Inflicts **Pierce** damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Howzer): Metal Cyclone**' +
            "\n" + 'Inflicts **Pierce** damage equal to **640%/704%/768%/832%/896%/960%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}