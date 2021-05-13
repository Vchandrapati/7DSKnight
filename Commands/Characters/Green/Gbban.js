const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Snatch]** Brawler Ban')
            .setThumbnail('https://i.imgur.com/OjCrLO8.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Undead, Works in Subslot: No**' +
            "\n" + 'Heals 20% of diminished HP at the start of every turn.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Fearless Shot**' +
            "\n" + 'Inflicts damage equal to **180%/270%/400%** of Attack on one enemy and **Lifesteals**, **20%/30%/40%** of the damage.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Snatch**' +
            "\n" + 'Inflicts damage equal to **180%/200%/250%** of Attack on one enemy. **Extort**, **20%/30%/50%** Attack and Defense for **1/2/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Physical Hunt**' +
            "\n" + 'Inflicts damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy and **depletes** 3 Ultimate Move Gauge orb(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Skinny King): Drain Spear**' +
            "\n" + 'Inflicts damage equal to **720%/792%/864%/936%/1008%/1080%** of Attack on one enemy and **depletes** 5 Ultimate Move Gauge orb(s). ' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}