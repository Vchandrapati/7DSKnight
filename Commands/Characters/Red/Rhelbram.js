const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Reincarnation of Revenge]** Fairy Helbram')
            .setThumbnail('https://i.imgur.com/dqvG41b.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Fairy' +
            "\n" + ' ' +
            "\n" + '**Passive: Ancient Magic, Works in Subslot: No**' +
            "\n" + 'Increases basic stats by 5% per surviving ally.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Fog Wave**' +
            "\n" + 'Inflicts damage equal to **120%/300%/450%** of Attack on one enemy and **depletes 1/1/3** Ultimate Move Gauge orb(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Stone Needle**' +   
            "\n" + 'Inflicts damage equal to **200%/200%/250%** of Attack on one enemy. **(Petrifies for 1/2 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Dragon Kick**' +
            "\n" + 'Inflicts **Pierce** damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Hunter Wisp**' +
            "\n" + '**Cancels Buffs and Stances** on all enemies and inflicts damage equal to **280%/308%/336%/364%/392%/420%** of Attack.' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Gustav): Blizzard Bullet**' +
            "\n" + '**Cancels Buffs and Stances** on all enemies and inflicts damage equal to **350%/385%/420%/455%/490%/525%** of Attack.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}