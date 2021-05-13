const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Mobile Tavern]** Hawk & Elizabeth')
            .setThumbnail('https://i.imgur.com/wyJc525.jpg')
            .setDescription('Rarity: SR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Goddess' +
            "\n" + ' ' +
            "\n" + '**Passive: Fill Up, Works in Subslot: No**' +
            "\n" + 'Increases basic stats by 10% at the start of the next turn if the hero doesnt take damage. (Resets upon taking damage)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Rolling Ham Attack**' +
            "\n" + 'Inflicts **Charge** damage equal to **220%/200%/500%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Hawk Night Rush**' +
            "\n" + 'Heals HP of all allies equal to **220%/220%/360%** of Attack. **(Disables Buff and Debuff Skills for 1 turn(s) at r2 and Removes Buffs at r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Final Pork Stomping**' +
            "\n" + '**Cancels Stances** on one enemy and inflicts damage equal to **700%/770%/840%/910%/980%/1050%** of Attack.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}