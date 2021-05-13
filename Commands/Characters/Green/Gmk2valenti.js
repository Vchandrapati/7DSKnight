const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Magic Weapon MK-II]** Valenti of Obsession')
            .setThumbnail('https://i.imgur.com/mDbdNxn.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Inventor of the Era, Works in Subslot: No**' +
            "\n" + 'Increases the hero\'s Pierce Rate and Crit Damage by the value equal to 50% of the hero\'s Crit Resistance. (Applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Chain Reaction**' +
            "\n" + 'Inflicts **Sever** damage equal to **120%/180%/300%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Focus! Rocket Punch**' +
            "\n" + 'Inflicts damage equal to **160%/240%/400%** of Attack on one enemy. **Nullify all skill effects including Ultimate Moves** for **1/1/2** turn(s). (Excluding Stance and Recovery Skills)' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Event Horizon**' +
            "\n" + '**Increases damage dealt by 50% and decreases damage taken by 50%** for **3** turn(s). Inflicts damage equal to **350%/385%/420%/455%/490%/525%** of Attack on all enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/CR' +
            "\n" + '**Recommended Substats:** ATT/CR/HP')
            message.channel.send(Character);
    }
}