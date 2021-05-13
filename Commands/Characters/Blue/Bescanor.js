const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['t1', 'theone', 'fescanor', 'besca'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Invincible Avatar]** The One Escanor')
            .setThumbnail('https://i.imgur.com/QLXgbon.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: The One, Works in Subslot: No**' +
            "\n" + 'Applies 1 Buff effect which increases all stats by 6% at the start of the allies turn. When there are 3 stacks of this effect, the hero remove Debuffs and gain Debuff Immunity for 1 turn. After that, the stacked Buffs are removed one by one until only 1 effect is left, adding Buffs to the stack again.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Super Slash**' +
            "\n" + 'Inflicts **Flood** damage equal to **200%/300%/500%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Supernova**' +
            "\n" + 'Inflicts damage equal to **240%/360%/600%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Divine Sword Escanor**' +
            "\n" + 'Inflicts damage equal to **720%/792%/864%/936%/1008%/1080%** of Attack on one enemy, then inflicts additional **Death** damage **20%/30%/40%/55%/70%/100%**.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/CRIT' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}