const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Forest Guardian]** Fairy Helbram')
            .setThumbnail('https://i.imgur.com/qnWtQI0.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Fairy' +
            "\n" + ' ' +
            "\n" + '**Passive: At Deaths Door, Works in Subslot: No**' +
            "\n" + 'Heals for 100% of Defense when the heros HP reaches 0. (Once per battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Throwing Edge**' +
            "\n" + 'Inflicts damage equal to **82%/123%/205%** of Attack on all enemies. **Poisons** for 3 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Fairy Wind**' +
            "\n" + 'Increases Attack-related stats of all allies by **15%/20%/30%** for **2/2/3** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Hunter Wisp**' +
            "\n" + '**Cancels Buffs and Stances** on all enemies and inflicts damage equal to **280%/308%/336%/364%/392%/420%** of Attack.' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Gustav): Blizzard Bullet**' +
            "\n" + '**Cancels Buffs and Stances** on all enemies and inflicts damage equal to **350%/385%/420%/455%/490%/525%** of Attack.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}