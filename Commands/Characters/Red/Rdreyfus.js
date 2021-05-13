const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Omen of Chaos]** Grandmaster Dreyfus')
            .setThumbnail('https://i.imgur.com/rA6O1ZS.jpg')
            .setDescription('Rarity: SR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Iron Will, Works in Subslot: Yes**' +
            "\n" + 'Increases Strength attribute allies Defense by 60%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Pierce**' +
            "\n" + 'Inflicts damage equal to **180%/280%/300%** of Attack on one enemy. **Decreases Attack-related stats** by **20%/30%/40%** for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Piercing Stab**' +
            "\n" + 'Inflicts damage equal to **220%/220%/360%** of Attack on one enemy. **(Infects for 1/2 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Milky Way Jail Break Blade**' +
            "\n" + 'Inflicts **Spike** damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:**ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}