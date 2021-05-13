const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Boar Hat Tavern]** Hostess Elizabeth')
            .setThumbnail('https://i.imgur.com/yUm5Cue.jpg')
            .setDescription('Rarity: SR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Goddess' +
            "\n" + ' ' +
            "\n" + '**Passive: Close Call, Works in Subslot: Yes**' +
            "\n" + 'Allies heal for 10% of max HP at the start of the next turn when taking damage.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Slide Serve**' +
            "\n" + 'Inflicts damage equal to **220%/220%/360%** of Attack on one enemy. **(Disables Attack Skills for 1/2 turn(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Nurse Call**' +
            "\n" + 'Heals HP of all allies equal to **200%/200%/300%** of Attack. **(Fills the Ultimate Move Gauge by 1/2 orb(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Miracle Wave**' +
            "\n" + 'Heals HP of all allies equal to **350%/385%/420%/455%/490%/525%** of Attack. **Rejuvenates**  for **3** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** HP/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}