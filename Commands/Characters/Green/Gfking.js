const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Protector of Dolls]** Old Fart King')
            .setThumbnail('https://i.imgur.com/d92WLsN.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Fairy' +
            "\n" + ' ' +
            "\n" + '**Passive: Magic Expansion, Works in Subslot: No**' +
            "\n" + 'Increases all allies Defense by 100% when the heros Ultimate Move Gauge is completely filled.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Spirit Spear Chastiefol, Second Form: Guardian**' +
            "\n" + 'Inflicts **Charge** damage equal to **130%/195%/325%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Permeate**' +
            "\n" + 'Inflicts damage equal to **82%/123%/205%** of Attack on all enemies. **Poisons** for 3 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Guardian Attack**' +
            "\n" + 'Inflicts damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy. Decreases Defense-related stats by 40% for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Sharpness Whisper**' +
            "\n" + 'Inflicts damage equal to **640%/704%/768%/832%/896%/960%** of Attack on one enemy. Decreases Defense-related stats by 40% for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}