const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Halloween]** Captain Meliodas')
            .setThumbnail('https://i.imgur.com/Dwi7Kw8.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Trick or Treat, Works in Subslot: No**' +
            "\n" + 'Increases the heros Crit Chance by 10% at the end of every turn. (Limit 10 time(s))' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Death Bat**' +
            "\n" + 'Inflicts damage equal to **150% /225%/375%**of Attack on one enemy. **Poisons** for 3 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Blood Beat**' +   
            "\n" + 'Inflicts **Spike** damage equal to **100%/150%/250%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Dragon Kick**' +
            "\n" + 'Inflicts **Pierce** damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: 1000 Divine Cuts**' +
            "\n" + '**Cancels Buffs and Stances** on one enemy, inflicts damage equal to **490%/539%/588%/637%/686%/735%** of Attack, then Stuns for 1 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Diane): Metal Crash**' +
            "\n" + '**Cancels Buffs and Stances** on one enemy, inflicts damage equal to **560%/616%/672%/728%/784%/840%** of Attack, then Stuns for 1 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}