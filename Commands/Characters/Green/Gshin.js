const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1DC241')
            .setTitle('**[Dungeon Raider]** Gamer Shin')
            .setThumbnail('https://i.imgur.com/n8tcvcT.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Green' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Interrupt, Works in Subslot: No**' +
            "\n" + 'The hero gains a Buff which increases Attack-related stats by 8% whenever hitting an enemy. When there are 3 or more stacks of this effect, they are removed and increase ally skill ranks.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Concentrate Fire**' +
            "\n" + 'Inflicts **Weak Point** damage equal to **80%/110%/170%** of Attack on all enemies' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Volley Fire**' +
            "\n" + 'Inflicts damage equal to **150%/150%/150%** of Attack on all enemies, decreases Ultimate Move damage by **20%/30%/50%** for **1/1/2** turn(s).' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Satellite Cannon**' +
            "\n" + 'Inflicts **Shatter** damage equal to **420%/462%/504%/546%/588%/630%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}