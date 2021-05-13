const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Disaster]** Old Fart King')
            .setThumbnail('https://i.imgur.com/xXR3Q9z.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Spirit, Works in Subslot: No**' +
            "\n" + 'Removes Debuffs from the hero at the start of every turn.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Fight Fire with Fire**' +
            "\n" + 'Inflicts damage equal to **150%/180%/300%** of Attack on all enemies. **(Fills Ultimate Move Gauge by 1/2 orb(s) aat r2 and r3.)**)' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Spirit Spear Chastiefol, Eighth Form: Pollen Garden**' +
            "\n" + 'Heals HP of all allies equal to **100%/150%/250%** of Attack. **Rejuvenates** for **3 turn(s)**.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Guardian Attack**' +
            "\n" + 'Inflicts damage equal to **560%/616%/672%/728%/784%/840%** of Attack on one enemy. **Decreases Defense-related stats by 40% for 2 turn(s)**.' +
            "\n" + ' ' +
            "\n" + '**Ultimate (Combined with Helbram): Sharpness Whisper**' +
            "\n" + 'Inflicts damage equal to **640%/704%/768%/832%/896%/960%** of Attack on one enemy. **Decreases Defense-related stats by 40% for 2 turn(s)**.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}