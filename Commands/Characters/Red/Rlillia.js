const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Advent of Destruction]** Lillia of Desire')
            .setThumbnail('https://i.imgur.com/Cp6rF5u.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: The Power of Desire, Works in Subslot: No**' +
            "\n" + 'Applies Corrosion on enemies with 3 orbs or less in their Ultimate Move Gauge for 2 turn(s). Decreases Attack of enemies with 5 orbs or more in their Ultimate Move Gauge by 10% for 2 turn(s). (Applies when entering battle, excludes Death Match)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Free Shooter**' +
            "\n" + 'Inflicts damage equal to **200%/250%/400%** of Attack on one enemy and restores the HP of the **lowest HP/all/all** ally **80%/30%/40%** of damage dealt.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: La Traviata**' +
            "\n" + 'Inflicts damage equal to **150%/150%/250%** of Attack on all enemies. **(Depletes 1/3 Ultimate Move Gauge orb(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Leviathan**' +
            "\n" + '**Removes Buffs** on all enemies and inflicts damage equal to **350%/385%/420%/455%/490%/525%** of Attack.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}