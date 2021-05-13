const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[The Seven Deadly Sins]** Mage Lillia')
            .setThumbnail('https://i.imgur.com/YIfqD1h.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Recital of Darkness, Works in Subslot: No**' +
            "\n" + 'Increases all allies Pierce Rate by the value equal to 50% of the heros Pierce Rate. (Applies when entering battle)   ' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Pathetique**' +
            "\n" + 'Inflicts damage equal to **150%/150%/250%** of Attack on all enemies. **(Depletes 1/3 Ultimate Move Gauge orb(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Eroica**' +
            "\n" + 'Heals HP of all allies equal to **200%/240%/400%** of Attack. **(Removes Debuffs at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Star Link**' +
            "\n" + 'Inflicts damage equal to **350%/385%/420%/455%/490%/525%** of Attack on all enemies, decreases skill ranks, then depletes the Ultimate Move Gauge by the number of skill rank decreases.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** PIERCE/DEF/HP')
            message.channel.send(Character);
    }
}