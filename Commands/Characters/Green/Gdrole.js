const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[The Ten Commandments]** Drole of Patience')
            .setThumbnail('https://i.imgur.com/mH7UMlE.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Giant' +
            "\n" + ' ' +
            "\n" + '**Passive: Shackle, Works in Subslot: No**' +
            "\n" + 'Applies an Ultimate Move Disable effect for 2 turns every time an enemy Ultimate Move Gauge reaches 5 orbs. (Applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Commandment of Patience**' +
            "\n" + 'Apply a buff that increases Resistance by 30% for 3 turn(s) every time an ally or enemy receives damage from skills in PVP. (Applies when entering battle, limit 3 times)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Giga Pick**' +
            "\n" + 'Inflicts **Detonate** damage equal to **160%/240%/400** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Bedrock Arise**' +
            "\n" + 'Inflicts damage equal to **120%/120%/180%** of Attack on all enemies. **(Disables Buff and Debuff Skills for 1/2 turn(s) at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Giga Fall**' +
            "\n" + 'Inflicts **Charge** damage equal to **455%/501%/546%/592%/637%/683%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}