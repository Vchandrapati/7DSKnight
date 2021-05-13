const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Divine Protection]** Merlin the Daughter of Belialuin')
            .setThumbnail('https://i.imgur.com/ZLVHyjv.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Bargaining With the Gods, Works in Subslot: No**' +
            "\n" + 'The hero\'s damage taken from skills during the enemy\'s turn does not exceed 40% of Max HP. Increases Attack-related stats by 1% for every 4% of remaining HP when using skills.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Mana Ballista**' +
            "\n" + 'Inflicts **Power Strike** damage equal to **190%/285%/475%** of Attack on one enemy' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Double Mana Fusion**' +
            "\n" + 'Inflicts damage equal to **110%/180%/280%** of Attack on all enemies. **Infects** for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: All Elemental**' +
            "\n" + 'Inflicts damage equal to **400%/440%/480%/520%/560%/600%** of Attack on all enemies and creates a barrier around all allies equal to **5%/8%/11%/14%/17%/20%** of damage, taking damage only from basic stats. (Excludes Rupture effect)' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/LS' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}