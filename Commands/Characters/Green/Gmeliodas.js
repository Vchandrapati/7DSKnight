const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[The Seven Deadly Sins]** Captain Meliodas')
            .setThumbnail('https://i.imgur.com/MuD9KPp.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Deathblow, Works in Subslot: No**' +
            "\n" + 'Increases Crit Chance by the ratio of the heros diminished HP when using a Skill.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Enchant: Hell Blaze**' +
            "\n" + 'Inflicts damage equal to **240%/360%/600%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Outburst Counter**' +
            "\n" + 'Assumes a Stance that triggers 1 time(s) when attacked, inflicting damage equal to **100%/150%/250%** of HP diminished from max HP via counter.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: 1000 Divine Cuts**' +
            "\n" + '**Cancels Buffs and Stances** on one enemy, inflicts damage equal to **490%/539%/588%/637%/686%/735%** of Attack, then Stuns for 1 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Diane): Metal Crash**' +
            "\n" + '**Cancels Buffs and Stances** on one enemy, inflicts damage equal to **560%/616%/672%/728%/784%/840%** of Attack, then Stuns for 1 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** CRIT/DEF/HP')
            message.channel.send(Character);
    }
}