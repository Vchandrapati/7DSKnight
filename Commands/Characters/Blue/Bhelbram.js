const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Royalty]** Fairy Helbram')
            .setThumbnail('https://i.imgur.com/OLcEC62.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Fairy' +
            "\n" + ' ' +
            "\n" + '**Passive: Magic Connection, Works in Subslot: No**' +
            "\n" + 'Increases HP-related stats by 5% per each surviving ally.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Blood Suck**' +
            "\n" + 'Inflicts damage equal to **150%/150%/250%** of Attack on one enemy. **(Lifesteals 30% of the damage at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Increase Recovery**' +
            "\n" + 'Removes Debuffs from all allies. **(Heals HP of all allies equal to 240%/300% of Attack at r2 and r2. Grants Debuff Immunity for 2 turn(s) at r3.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Hunter Wisp**' +
            "\n" + '**Cancels Buffs and Stances** on all enemies and inflicts damage equal to **280%/308%/336%/364%/392%/420%** of Attack.' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Gustav): Blizzard Bullet**' +
            "\n" + '**Cancels Buffs and Stances** on all enemies and inflicts damage equal to **350%/385%/420%/455%/490%/525%** of Attack.' +
            "\n" + ' ' +    
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}