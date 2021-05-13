const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Weird Fangs]** Holy Knight Jude')
            .setThumbnail('https://i.imgur.com/ndaWizs.jpg')
            .setDescription('Rarity: R' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Torture, Works in Subslot: Yes**' +
            "\n" + 'Allies reflect 10% of damage taken.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Thorn Shot**' +
            "\n" + 'Inflicts damage equal to **220%/220%/360%** of Attack on one enemy. **Disables Attack Skills for 1/2 turn(s) at r2 and r3.**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Mana Drain**' +
            "\n" + 'Inflicts damage equal to **120%/140%/210%** of Attack on all enemies.**(Removes Buffs ar r2 and Cancels Buffs and Stances at r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Thorn Hunt**' +
            "\n" + 'Inflicts damage equal to **540%/594%/648%/702%/756%/810%** of Attack on one enemy. **Disables Attack Skills** for 2 turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}