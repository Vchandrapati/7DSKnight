const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Weird Fangs]** Holy Knight Freesia')
            .setThumbnail('https://i.imgur.com/9zf8Ndg.jpg')
            .setDescription('Rarity: SR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Bloodsucking Parasite, Works in Subslot: No**' +
            "\n" + 'Decreases all enemies Recovery Rate equal to the ratio of the heros diminished HP.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Storm Rondo**' +
            "\n" + 'Inflicts damage equal to **72%/180%/180%** of Attack on one enemy. **Poison** for **3** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Corrosive Bug**' +
            "\n" + '**Increases damage taken** by all enemies by **20%/30%/50%** for **2/2/3** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Rain Capriccio**' +
            "\n" + 'Inflicts **Corrosion** damage equal to **20%/22%/24%/26%/28%/30%** of max HP on all enemies for 3 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}