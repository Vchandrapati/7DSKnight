const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[The Seven Deadly Sins]** Mage Lillia')
            .setThumbnail('https://i.imgur.com/yeUT3TB.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Almighty Mage, Works in Subslot: No**' +
            "\n" + 'Increases the heros Attack by 2% per Debuff applied on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Dark Void Buster**' +
            "\n" + 'Inflicts damage equal to **180%/180%/300%** of Attack on one enemy. **(Allows the use of only Attack Skills for 2 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Curse Engage**' +
            "\n" + 'Inflicts damage equal to **100%/200%/250%** of Attack on all enemies and decreases skill ranks. **(Depletes the Ultimate Move Gauge by the number of skill rank decreases at r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Exterminate Ray**' +
            "\n" + 'Inflicts damage equal to **540%/594%/648%/702%/756%/810%** of Attack on one enemy. **Disables Attack Skills** for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combine with Arthur): Tornado Sever**' +
            "\n" + 'Inflicts damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy. **Disables Attack Skills** for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}