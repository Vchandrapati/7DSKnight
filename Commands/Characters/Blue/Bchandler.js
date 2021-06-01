const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    aliases: ['festchandler', 'chandler'],
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
            .setColor('#1187C2')
            .setTitle('**[Pacifier Fiend]** Magician Chandler')
            .setThumbnail('https://i.imgur.com/7Xs6rcC.png')
            .setDescription('Rarity: SSR' + 
            "\n" + 'Attribute: Blue' +
            "\n" + 'Race: Human' +
            "\n" + ' ' +
            "\n" + '**Passive: Darkness, Works in Subslot: No**' +
            "\n" + 'Applies an effect which decreases all stats by 7% on enemies who use skills in PVP for 1 turn. (Applies when entering battle, aplies before skill activation, can be stacked)' +
            "\n" + ' ' +
            "\n" + '**Skill 1: Dragon Claw**' +
            "\n" + 'Inflicts damage equal to **160%/240%/400%** of Attack on one enemy blocks all skill effects including those of Ultimate Moves for **1/1/2 turn(s)**. (Excludes Stances and Recovery Skills)' +
            "\n" + ' ' +
            "\n" + '**Skill 2: Full Counter**' +
            "\n" + 'Assumes a Stance for **1/1/2 turn(s)** which **Taunts** enemies and inflicts damage equal to **200%/300%/450%** of Attack when taking attacks. Increases damage dealt by **50%/70%/200%** of damage taken.' +
            "\n" + ' ' +
            "\n" + '**Ultimate: Meteorworks**' +
            "\n" + 'Inflicts **Charge** damage equal to **455%/501%/546%/592%/637%/683%** of Attack on all enemies.' +
            "\n" + ' ' +
            "\n" + '**Recommended Gear:** ATK/DEF' +
            "\n" + '**Recommended Substats:** ATT/DEF/HP')
            message.channel.send(Character);
    }
}