const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Star of the Kingdom]** Holy Knight Gilthunder')
            .setThumbnail('https://i.imgur.com/3kQgyZb.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Giant' +
            "\n" + ' ' +
            "\n" + '**Passive: Miladys Knight, Works in Subslot: Yes**' +
            "\n" + 'Increases Speed attribute allies Defense by 60%.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Rush Rock**' +
            "\n" + 'Inflicts **Spike** damage equal to **160%/240%/400%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Lightning Blade**' +
            "\n" + 'Inflicts damage equal to **160%/240%/400%** of Attack on one enemy. **Shocks** for **4** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Lightning King Decapitation**' +
            "\n" + 'Inflicts damage equal to **560%/616%/672%/728%/784%/840%** of Attack on all enemies. **Shocks** for **4** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}