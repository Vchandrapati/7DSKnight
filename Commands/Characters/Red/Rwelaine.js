const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Fairy of Blessings]** Golden Wings Elaine')
            .setThumbnail('https://i.imgur.com/3jJgrzD.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Fairy' +
            "\n" + ' ' +
            "\n" + '**Passive: Sprouted Wings, Works in Subslot: Yes**' +
            "\n" + 'Decreases Pierce Rate, Crit Chance and Crit Damage by 8% for each Poison, Bleed, Shocks or Corrosion effect. Applies to all enemies. (Excludes Death Match)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Happy Holidays**' +
            "\n" + 'Inflicts **Co-destruction** damage equal to **170%/255%/425%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Snowball Fight**' +   
            "\n" + 'Inflicts **Corrosion** damage equal to **15%/20%/20%** of **remaining/remaining/max** HP on all enemies for **2/3/3** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Tempest Fall**' +
            "\n" + 'Inflicts damage equal to **400%/440%/480%/520%/560%/600%** of Attack on all enemies. Releases 60% of any DOT damage.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}