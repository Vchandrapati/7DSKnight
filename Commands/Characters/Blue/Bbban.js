const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Outlaw]** Brawler Ban')
            .setThumbnail('https://i.imgur.com/psjITQS.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Extort Attack, Works in Subslot: No**' +
            "\n" + 'Decreases all enemies Attack-related stats by 15% at the start of the next turn if the hero doesnt take damage. (Limit 5 time(s), resets upon taking damage)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Critical Pierce**' +
            "\n" + 'Inflicts **Charge** damage equal to **200%/300%/500%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Toxic Bottle**' +
            "\n" + 'Inflicts damage equal to **180%/1805/300%** of Attack on one enemy. Decreases Attack-related stats by **20%/30%/40%** for **1/1/2** turn(s).' +
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