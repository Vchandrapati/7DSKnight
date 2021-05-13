const Discord = require('discord.js');

module.exports = {
    category: 'Character Info',
    description: 'Shows Character Info',
    
    callback: ({ message }) => {
        const Character = new Discord.MessageEmbed()
        .setColor('#1187C2')
        .setTitle('**[Halloween]** Guardian Elaine')
        .setThumbnail('https://i.imgur.com/SHoyvf7.jpg')
        .setDescription('Rarity: SSR' + 
        "\n" + 'Attribute: Blue' +
        "\n" + 'Race: Fairy' +
        "\n" + ' ' +
        "\n" + '**Passive: The Gift of the Pumpkin, Works in Subslot: No**' +
        "\n" + 'Increases Defense-related stats by 8% at the start of the next turn if the hero takes damage. (Limit 5 time(s))' +
        "\n" + ' ' +
        "\n" + '**Skill 1: Heightening Fear**' +
        "\n" + 'Inflicts damage equal to 120% of Attack on all enemies. **(Decreases Attack-related stats by 20%/30% for 2/3 turn(s) at r2 and r3.))**' +
        "\n" + ' ' +
        "\n" + '**Skill 2: Pumpkin Basket**' +
        "\n" + 'Increases Attack of all allies by **30%/40%/60%** for 2 turn(s).' +
        "\n" + ' ' +
        "\n" + '**Ultimate: Wrath of the Autumn Wind**' +
        "\n" + 'Cancels Buffs and Stances on one enemy, inflicts damage equal to **490%/539%/588%/637%/686%/735%** of Attack, then Stuns for 1 turn(s).' +
        "\n" + ' ' +
        "\n" + '**Recommended Gear:** HP/DEF' +
        "\n" + '**Recommended Substats:** ATT/DEF/HP')
        message.channel.send(Character);
    }
}