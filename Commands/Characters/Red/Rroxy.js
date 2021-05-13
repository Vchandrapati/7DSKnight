const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Mad Destroyer]** Queen of Explosions Roxy')
            .setThumbnail('https://i.imgur.com/PI3uFUh.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Lunacy, Works in Subslot: No**' +
            "\n" + 'Inflicting Explosion damage on an enemy heals the heros HP by 30% of max HP and fills the Ultimate Move Gauge by 1 orb(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Magma Swing**' +
            "\n" + 'Inflicts damage equal to **100%/150%/200%** of Attack on all enemies and Explodes after **2/1/1** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Magma Break**' +   
            "\n" + '**Removes Buffs** from one enemy and inflicts damage equal to **220%/300%/400%** of Attack.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Volcano Ash**' +
            "\n" + 'Inflicts damage equal to **700%/770%/840%/910%/980%/1050%** of Attack on one enemy and **fills** the Ultimate Move Gauge by 2 orb(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}