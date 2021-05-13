const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[The Ten Commandments]** Monspeet of Reticence')
            .setThumbnail('https://i.imgur.com/wNw3Edj.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Slander, Works in Subslot: No**' +
            "\n" + 'Decreases the heros damage taken from Ultimate Moves by 30%' +
            "\n" + ' ' +
            "\n" + '**Commandment of Reticence**' +
            "\n" + 'Prevents Ultimate Move Gauges from filling through skill use in PVP. (Applies to both allies and enemies when' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Conflagration**' +
            "\n" + 'Inflicts damage equal to **240%/300%/500%** of Attack on one enemy. **(Fills Ultimate Move Gauge by 1/2 orb(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Scarlet Blaze Shot**' +
            "\n" + 'Inflicts **Weak Point** damage equal to **80%/110%/170%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Hells Phoenix**' +
            "\n" + 'Remove Stance(s) from all enemies and inflicts damage equal to **280%/308%/336%/364%/392%/420%** of Attack. Applies **2/3/4/5/6/7** Ignite effects for 4 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}