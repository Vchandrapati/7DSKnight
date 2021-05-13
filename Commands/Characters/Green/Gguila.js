const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Halloween]** Guardian Guila')
            .setThumbnail('https://i.imgur.com/BkOmk6Y.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Cat Woman, Works in Subslot: No**' +
            "\n" + 'Decreases damage taken by 4% per hero skill use. (Limit 10 time(s))' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Feline Step**' +
            "\n" + 'Inflicts **Charge** damage equal to **200%/300%/500%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Jack-o-Lantern**' +
            "\n" + 'Inflicts damage equal to **120%/120%/150%** of Attack on all enemies. **(Decreases Defense-related stats by 20%/30% for 2/3 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Chain Explosion**' +
            "\n" + 'Inflicts Spike damage equal to **350%/385%/420%/455%/490%/525%** of Attack on all enemies' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combine with Howzer): Bomb Cyclone**' +
            "\n" + 'Inflicts Spike damage equal to **400%/440%/480%/520%/560%/600%** of Attack on all enemies' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}