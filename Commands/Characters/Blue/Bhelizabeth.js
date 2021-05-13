const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Reverse]** Guardian Hawk & Elizabeth')
            .setThumbnail('https://i.imgur.com/QGmvtik.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Goddess' +
            "\n" + ' ' +
            "\n" + '**Passive: Time for Scraps, Works in Subslot: No**' +
            "\n" + 'Increases all allies HP by 12% per Debuff on the hero.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Fire Breath**' +
            "\n" + 'Inflicts **Amplify** damage equal to **180%/270%/450%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Digest**' +
            "\n" + 'Apply 1 Solidify on one ally. If there are Debuffs, they are removed and 1 additional Solidify effect is applied. **(An additional Solidify effect is applied for every Debuff removed at r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Rush Hawk**' +
            "\n" + 'Inflicts **Charge** damage equal to **700%/770%/840%/910%/980%/1050%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Drop Mama**' +
            "\n" + 'Inflicts **Charge** damage equal to **800%/880%/960%/1040%/1120%/1200%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}