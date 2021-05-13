const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Heart of the Land]** Mercenary Diane')
            .setThumbnail('https://i.imgur.com/2BZJevl.jpg')
            .setDescription('Rarity: SR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Giant' +
            "\n" + ' ' +
            "\n" + '**Passive: Energy of the Earth, Works in Subslot: No**' +
            "\n" + 'All allies increase Pierce Rate by 8% at the start of the next turn when taking damage. (Limit 5 time(s))' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Metal Fist**' +
            "\n" + 'Inflicts damage equal to **220%/220%/360%** of Attack on one enemy. **(Removes Stances at r2 and r3 and Disables Stance Skills at r2 and r3 for 1/2 turn(s))**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Sand Whirl**' +
            "\n" + '**Decreases Defense-related stats** of all enemies by **20%/30%/40%** for **2/2/3** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Stone Blast**' +
            "\n" + 'Inflicts Pierce damage equal to **350%/385%/420%/455%/490%/525%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}