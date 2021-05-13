const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Elite Demon]** Monspeet of Reticence')
            .setThumbnail('https://i.imgur.com/hBRuRFE.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Demonic Hellfire Mage, Works in Subslot: No**' +
            "\n" + 'Increases the heros damage dealt by 100% when attacking Ignited enemies.' +
            "\n" + ' ' +
            "\n" + '**Commandment of Reticence**' +
            "\n" + 'Prevents Ultimate Move Gauges from filling through skill use in PVP. (Applies to both allies and enemies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Black Fire**' +
            "\n" + 'Inflicts damage equal to **220%/220%/360%** of Attack on one enemy. **(Removes 1/2 orb(s) from the tragets Ultimate Move Gauge, and Deletes 1/2 skill(s) at random at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Flame ball**' +
            "\n" + 'Inflicts **Weak Point** damage equal to **120%/180%/300%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Hells Phoenix**' +
            "\n" + 'Remove Stance(s) from all enemies and inflicts damage equal to **280%/308%/336%/364%/392%/420%** of Attack. Applies **2/3/4/5/6/7** Ignite effects for 4 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}