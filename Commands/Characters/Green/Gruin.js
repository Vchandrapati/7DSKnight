const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Weird Fangs]** Holy Knight Ruin')
            .setThumbnail('https://i.imgur.com/2rTXItY.jpg')
            .setDescription('Rarity: R' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Steel Body, Works in Subslot: Yes**' +
            "\n" + 'Decreases allies damage taken by 20% in Death Match.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Death Blade**' +
            "\n" + '**Removes Buffs** from one enemy and inflicts damage equal to **220%/300%/400%** of Attack. **(Cancels Buffs and Stances at r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Nightmare Illusion**' +
            "\n" + 'Decreases Attack of all enemies by **30%/45%/75%** for **3/3/4** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Heavy Hammer**' +
            "\n" + '**Cancels Buffs and Stances** on one enemy, inflicts damage equal to **490%/539%/588%/637%/686%/735%** of Attack, then Stuns for 1 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}