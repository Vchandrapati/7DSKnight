const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Ale Collector]** Adventurer Ban')
            .setThumbnail('https://i.imgur.com/T3yx6jO.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Extort Defense, Works in Subslot: No**' +
            "\n" + 'Increases Defense by 50% of all enemies Defense' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Rage Attack**' +
            "\n" + 'Inflicts damage equal to **240%/300%/500%** of Attack on one enemy. **(Cancels Stances on r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Stretch Chain Stick**' +
            "\n" + 'Inflicts damage equal to **180%/180%/300%** of Attack on one enemy. Decreases Defense-related stats by **20%/30%/40%** for 1 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Fox Hunt**' +
            "\n" + 'Inflicts damage equal to **350%/385%/420%/455%/490%/525%** of Attack on one enemy. **Extort**, 50% Attack and Defense for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Jericho): Fake Strike**' +
            "\n" + 'Inflicts damage equal to **400%/440%/480%/520%/560%/600%** of Attack on one enemy. **Extort**, 50% Attack and Defense for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}