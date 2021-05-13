const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[The Ten Commandments]** Fraudrin of Selflessness')
            .setThumbnail('https://i.imgur.com/TADzJQz.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Contempt, Works in Subslot: No**' +
            "\n" + 'Enemy heroes who have lower CC than Fraudrin will not gain Ultimate Move Gauge for 2 turn(s). (Applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: White Eye**' +
            "\n" + 'Inflicts damage equal to **180%/200%/250%** of Attack on one enemy. Extort **20%/30%/50%** Attack and Defense for **1/2/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Slaughter**' +
            "\n" + 'Inflicts damage equal to **140%/140%/210%** of Attack on all enemies. **(Remove Buffs at r2 and Cancels Buffs and Stances at r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Shadow Bomb**' +
            "\n" + 'Inflicts damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy and depletes 3 Ultimate Move Gauge orb(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}