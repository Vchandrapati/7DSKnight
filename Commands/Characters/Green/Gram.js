const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['ram'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Re:Zero]** Twin Maid Sister Ram')
            .setThumbnail('https://i.imgur.com/UIAnRW2.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Unknown' +
            "\n" + ' ' +
            "\n" + '**Passive: Amazing Elder Sister, Works in Subslot: Yes**' +
            "\n" + 'Increases Unknown allies basic stats by 20%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Fula**' +
            "\n" + 'Inflicts damage equal to 200% of Attack on one enemy. **(Stuns for 1/2 turn(s) on r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: You Should Eat It**' +
            "\n" + 'Inflicts **Rupture** damage equal to **100%/150%/250%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Don\'t Stand in Ram\'s Way**' +
            "\n" + 'Inflicts damage equal to **300%/330%/360%/390%/420%/450%** of Attack on all enemies. **Decreases Attack-related stats** by **30%** for **3** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}