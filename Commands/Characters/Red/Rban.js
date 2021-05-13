const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Nunchaku]** Adventurer Ban')
            .setThumbnail('https://i.imgur.com/WiQddcf.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Chance!, Works in Subslot: No**' +
            "\n" + 'Fills the Ultimate Move Gauge by 1 orb(s) at the start of the next turn if the hero takes damage.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Brandisher Stick**' +
            "\n" + 'Inflicts **Weak Point** damage equal to **120%/180%/300%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Mana Drain**' +
            "\n" + 'Inflicts damage equal to **160%/210%/400%** of Attack on one enemy and decreases skill ranks. **(then depletes the Ultimate Move Gauge by the number of skill rank decreases on r2 and r3.)**' +
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