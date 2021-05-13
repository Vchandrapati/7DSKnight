const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['resta'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[The Ten Commandments]** Estarossa of Love')
            .setThumbnail('https://i.imgur.com/3VhsDxM.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Composure of the Strong, Works in Subslot: No**' +
            "\n" + 'Increases Attack by 10% for each Debuff on the hero.' +
            "\n" + ' ' +
            "\n" + '**Commandment of Love**' +
            "\n" + 'Decreases Attack-related stats by 20% for 3 turn(s) upon damaging an enemy with a skill. (Applies to both allies and enemies when entering battle, excluding Death Match)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Reverse Blade**' +
            "\n" + 'Inflicts damage equal to **220%/220%/360%** of Attack on one enemy. **Disables Recovery Skills** for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Rebellion**' +
            "\n" + 'Inflicts **Co-destruction** damage equal to **170%/255%/425%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Blackout**' +
            "\n" + 'Assumes a stance for 1 turn(s) which performs a Preemptive Strike before an ally is attacked, inflicting **300%/330%/360%/390%/420%/450%** of Attack and disabling all skills.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}