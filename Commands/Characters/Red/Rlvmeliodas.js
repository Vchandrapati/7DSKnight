const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['lv'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#C2361D')
            .setTitle('**[Virtual Body Doubles]** Lostvayne Meliodas')
            .setThumbnail('https://i.imgur.com/wH85Ntj.jpg')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Red' +
            "\n" + 'Race: Demon' +
            "\n" + ' ' +
            "\n" + '**Passive: Rebate, Works in Subslot: No**' +
            "\n" + 'Increases the ranks of all of the heros skills when the hero takes Crit Damage during the enemy turn.' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Division Impact**' +
            "\n" + 'Inflicts damage equal to **240%/300%/500%** of Attack on one enemy. **(Fills Ultimate Move Gauge by 1/2 orb(s) at r2 and r3.)**' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Triple Avatar**' +
            "\n" + 'Inflicts **Charge** damage equal to **130%/195%/325%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Summon Soul**' +
            "\n" + 'Inflicts **Secret Technique 20%/28%/36%/44%/52%/60%** damage equal to **300%/330%/360%/390%/420%/450%** of Attack on all enemies and deals damage with attribute advantage regardless of attribute.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATT/CRIT' +
            "\n" + '**Recommended Substats:** CRIT/DEF/HP')
            message.channel.send(Character);
    }
}