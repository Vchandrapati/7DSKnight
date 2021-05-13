const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Matrona]** Fighter Diane')
            .setThumbnail('https://i.imgur.com/DzUpCRm.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Giant' +
            "\n" + ' ' +
            "\n" + '**Passive: Swift Movement, Works in Subslot: No**' +    
            "\n" + 'Increases the heros Crit Chance by the value of the heros Crit Resistance at the start of the battle.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Fist of Destruction**' +
            "\n" + 'Inflicts **Rupture** damage equal to **180%/2705%/450%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Friends**' +
            "\n" + 'Inflicts damage equal to **220%/220%/360%** of Attack on one enemy. **(Disables Buff and Debuff skill at r2 for 1 turn and removes buffs on r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Dragon Kick**' +
            "\n" + 'Inflicts **Pierce** damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Howzer): Metal Cyclone**' +
            "\n" + 'Inflicts **Pierce** damage equal to **640%/704%/768%/832%/896%/960%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}