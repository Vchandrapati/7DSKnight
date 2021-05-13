const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Holy Warrior]** Goddess Elizabeth')
            .setThumbnail('https://i.imgur.com/JFNKl9r.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Goddess' +
            "\n" + ' ' +
            "\n" + '**Passive: Embrace of the Goddess, Works in Subslot: No**' +
            "\n" + 'When an ally is dies, they are revived with the same amount of HP they had before dying. (Limit once, applies when entering battle. Dying by Reflect effect nullifies revive and uses it up)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Let There Be Light**' +
            "\n" + 'Inflicts damage equal to 200% of Attack on one enemy. **(Stuns for 1/2 turn(s) on r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Goddess Bless**' +
            "\n" + 'Creates a barrier around all allies equal to **150%/200%/300%** of Attack for **1/1/2** turn(s). When attacked, no bonus damage effect will be applied. (Exclude Rupture)' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Life Authority**' +
            "\n" + 'Recovers HP of all allies equal to **30%/35%/40%/50%/60%/70%** of Max HP. Reflects **40%/50%/60%/80%/100%/120%** of damage taken over 2 turn(s), then heals for half of the damage reflected.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}