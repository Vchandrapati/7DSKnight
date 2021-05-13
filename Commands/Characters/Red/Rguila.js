const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Explosion]** Guardian Guila')
            .setThumbnail('https://i.imgur.com/1SkFRxD.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Fiery Will, Works in Subslot: Yes**' +
            "\n" + 'Increases allies HP-related stats by 15% in Death Match.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Killer Mines**' +
            "\n" + '**Removes Buffs** from one enemy and inflicts damage equal to **220%/220%/400%** of Attack. **(Cancels Buffs and Stances at r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Shot Bombs**' +
            "\n" + 'Inflicts damage equal to **180%/240%/400%** of Attack on one enemy. Applies **1/1/2** Ignite(s) for **3/3/4** turn(s). **(Remove Stance(s) at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Chain Explosion**' +
            "\n" + 'Inflicts Spike damage equal to **350%/385%/420%/455%/490%/525%** of Attack on all enemies' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combine with Howzer): Bomb Cyclone**' +
            "\n" + 'Inflicts Spike damage equal to **400%/440%/480%/520%/560%/600%** of Attack on all enemies' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}