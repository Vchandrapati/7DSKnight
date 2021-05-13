const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Weird Fangs]** Golgius')
            .setThumbnail('https://i.imgur.com/VhmZKv0.jpg')
            .setDescription('Rarity: R' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Ambush, Works in Subslot: Yes**' +
            "\n" + 'Increases allies damage dealt by 15% in Death Match.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Blade Slash**' +
            "\n" + 'Inflicts **Spike** damage equal to **160%/240%/400%** of Attack on on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Throwing Star**' +
            "\n" + 'Inflicts **Weak Point** damage equal to **80%/110%/170%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Silent Strike**' +
            "\n" + 'Inflicts damage equal to **490%/539%/588%/637%/686%/735%** of Attack on one enemy. **Poisons** for 3 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}