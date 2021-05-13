const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['rdm'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[The Dragon Sin of Wrath]** Demon Meliodas')
            .setThumbnail('https://i.imgur.com/uuEp7PM.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Rage, Works in Subslot: No**' +
            "\n" + 'Increase Crit Chance by 50% when an ally dies.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Hellfire**' +
            "\n" + 'Inflicts damage equal to **180%/270%/450%** of Attack on one enemy. Applies **1/2/3 Ignite(s)** for 3 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Blaze Burst**' +   
            "\n" + 'Inflicts damage equal to **220%/220%/360%** of Attack on one enemy. **(Infects for 1/2 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Dragon Kick**' +
            "\n" + 'Inflicts **Pierce** damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Hell Buster**' +
            "\n" + 'Inflicts **Weak Point** damage equal to **385%/424%/463%/502%/541%/578%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Merlin): Devil Assault**' +
            "\n" + 'Inflicts **Weak Point** damage equal to **440%/484%/528%/572%/616%/660%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}