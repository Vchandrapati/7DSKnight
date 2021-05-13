const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Shepherd of Death]** Human Weapon Mono')
            .setThumbnail('https://i.imgur.com/M0ju01u.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Fairy' +
            "\n" + ' ' +
            "\n" + '**Passive: Assassin, Works in Subslot: No**' +
            "\n" + 'Increases the heros damage dealt by 50% when attacking enemies with Bleeding, Poisoned or Shocked Debuff(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Fatal Melody**' +
            "\n" + 'Inflicts **Sever** damage equal to **160%/270%/450%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Biohazard**' +   
            "\n" + 'Inflicts damage equal to **150%/225%/375%** of Attack on one enemy. **Poisons** for 3 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Endless Pain**' +
            "\n" + 'Inflicts damage equal to **455%/501%/546%/592%/637%/683%** of Attack on one enemy. Makes target(s) **Bleed** for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}