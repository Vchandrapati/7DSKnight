const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Elite Demon]** Drole of Patience')
            .setThumbnail('https://i.imgur.com/59rA4kP.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Giant' +
            "\n" + ' ' +
            "\n" + '**Passive: Blessing of the Earth, Works in Subslot: No**' +
            "\n" + 'Increases allies Attack by 3% for every Buff applied to the hero.' +
            "\n" + ' ' +
            "\n" + '**Commandment of Patience**' +
            "\n" + 'Apply a buff that increases Resistance by 30% for 3 turn(s) every time an ally or enemy receives damage from skills in PVP. (Applies when entering battle, limit 3 times)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Heavy Assault**' +
            "\n" + 'Inflicts damage equal to **200%/200%/250%** of Attack on one enemy. **(Petrifies for 1/2 turn(s) on r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Heavy Metal**' +
            "\n" + 'Taunts enemies, increases HP-related stats by **15%/20%/30%**, and becomes immune to Petrify for **1/2/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Giga Fall**' +
            "\n" + 'Inflicts **Charge** damage equal to **455%/501%/546%/592%/637%/683%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}