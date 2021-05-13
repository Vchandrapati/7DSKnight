const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[The Boar Sin of Gluttony]** Great Mage Merlin')
            .setThumbnail('https://i.imgur.com/vTp40Zs.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Various Samples , Works in Subslot: Yes**' +
            "\n" + 'Fills allies Ultimate Move Gauge by 1 orb(s) at the start of the battle.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Sphere Explosion**' +
            "\n" + 'Inflicts damage equal to **120%/300%/450%** of Attack on one enemy and **depletes 1/1/3** Ultimate Move Gauge orb(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Perfect Cube**' +
            "\n" + 'Creates a barrier around all allies equal to **150%/225%/375%** of Attack for 2 turn(s).' +
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