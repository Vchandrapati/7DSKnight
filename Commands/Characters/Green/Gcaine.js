const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Burning Ember]** Knight of Danafor Cain')
            .setThumbnail('https://i.imgur.com/oFXdHSh.jpg')
            .setDescription('Rarity: SR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Extreme Counter, Works in Subslot: Yes**' +
            "\n" + 'Taunts enemies and creates a barrier equal to 300% of Defense at the start of the battle. (Applies when entering battle)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Chain Vertical Kick**' +
            "\n" + 'Inflicts damage equal to **180%/270%/450%** of Attack on one enemy. Applies **1/2/3** Ignite(s)** effects for **3/4/5** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Charge Fire**' +
            "\n" + 'Inflicts damage equal to **180%/180%/300%** of Attack on one enemy. Applies **1/1/2** Ignite(s)** effects for **3/3/4** turn(s). **(Removes Buffs at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Fire Tornado**' +
            "\n" + 'Inflicts **Weak Point** damage equal to **210%/231%/252%/273%/294%/315%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}