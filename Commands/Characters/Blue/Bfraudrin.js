const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Elite Demon]** Fraudrin of Selflessness')
            .setThumbnail('https://i.imgur.com/38st96R.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Inferiority, Works in Subslot: No**' +
            "\n" + 'When the hero dies, removes Debuffs from all allies and fills their Ultimate Move Gauge to MAX.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Black Breathe**' +
            "\n" + 'Inflicts **Shatter** damage equal to **180%/270%/450%** of Attack on all enemies. **(Decreases Attack-related stats by 20%/30% for 2/3 turn(s) at r2 and r3.))**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Full Bloom**' +
            "\n" + 'Reflects **60%/60%/100%** of damage taken for 2 turn(s). **(Taunts at r2 and r3)**' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Shadow Bomb**' +
            "\n" + 'Inflicts damage equal to **630%/693%/756%/819%/882%/945%** of Attack on one enemy and depletes 3 Ultimate Move Gauge orb(s).' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}