const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Melt]** Grandmaster Hendrickson')
            .setThumbnail('https://i.imgur.com/M2wkmVg.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Regeneration, Works in Subslot: No**' +
            "\n" + 'Increases the heros Recovery Rate by 10% at the start of every turn. (Limit 5 time(s))' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Ingest**' +
            "\n" + 'Inflicts damage equal to **180%/270%/340%** of Attack on one enemy and Lifesteals **20%/30%/40%** of the damage.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Flame Wave**' +
            "\n" + 'Inflicts damage equal to **180%/270%/340%** of Attack on one enemy. Applies **1/2/3 Ignite(s)** for 3 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Hell Blaze Wave**' +
            "\n" + 'Inflicts damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy and Lifesteals 40% of the damage.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Celestial Break**' +
            "\n" + 'Inflicts damage equal to **640%/704%/768%/832%/896%/960%** of Attack on one enemy and Lifesteals 40% of the damage.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}