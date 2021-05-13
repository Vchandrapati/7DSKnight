const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Destined Heir]** New King Arthur')
            .setThumbnail('https://i.imgur.com/THLGjqj.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: The Kings Timing, Works in Subslot: No**' +
            "\n" + 'Increases Crit Damage by 10% for each orb in the heros Ultimate Move Gauge. The value increases by an additional 50% if it is completely full.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Raise Blade**' +
            "\n" + 'Inflicts damage equal to **240%/360%/500%** of Attack on one enemy. **(Stuns and Cancels Stance at r3)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Catapult**' +
            "\n" + 'Inflicts damage equal to **120%/120%/180%** of Attack on all enemies. **(Disables Attack for 1 turn on r2 and 2 turns on r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Legendary Knight**' +
            "\n" + 'Inflicts Sever damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT (Optionally some Crit)/DEF/HP')
            message.channel.send(Character);
    }
}