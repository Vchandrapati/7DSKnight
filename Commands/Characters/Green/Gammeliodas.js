const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['am', 'assault mode'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Assault Mode]** Berserk Meliodas')
            .setThumbnail('https://i.imgur.com/0F5Wty0.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Forgotten Past, Works in Subslot: No**' +
            "\n" + 'If all allies are Demons or those with Commandments, increases own stats by 5% and decreases Defense-related stats of all enemies by 15% for 2 turns when allies take damage. (Limit 5 times, applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: 1000 Divine Cuts**' +
            "\n" + 'Inflicts **Rupture** damage equal to **100%/150%/250%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Dark Sword**' +
            "\n" + 'Inflicts **Amplify** damage equal to **180%/270%/450%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Darkness Pressure**' +
            "\n" + '**Increases the heros basic stats** by **50%** for **3 turns** and inflicts **350%/385%/420%/455%/490%/525%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/CRIT' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}