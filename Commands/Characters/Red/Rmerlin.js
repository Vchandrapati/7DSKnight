const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Collector]** Great Mage Merlin')
            .setThumbnail('https://i.imgur.com/9NkHJV9.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Demonic Power Surge, Works in Subslot: No**' +
            "\n" + 'Increases Pierce Rate by 10% per each Ultimate Move Gauge orb. Increases by an additional 50% if it is completely filled.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Poison Surge**' +
            "\n" + 'Inflicts damage equal to **220%/220%/360%** of Attack on one enemy. **Disables Recovery Skills** for **1/2/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Freeze Factor**' +   
            "\n" + 'Freezes one enemy for **1/1/2** turn(s). **(Inflicts 80%/200% additional damage on frozen target(s) at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Exterminate Ray**' +
            "\n" + 'Inflicts damage equal to **540%/594%/648%/702%/756%/810%** of Attack on one enemy. **Disables Attack Skills** for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combine with Arthur): Tornado Sever**' +
            "\n" + 'Inflicts damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy. **Disables Attack Skills** for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}