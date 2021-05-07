const Discord = require('discord.js');

module.exports = {
    category: 'Guides',
    description: 'Kelak Guide',

    callback: async ({ message }) => {

        //#region Guide

        const Kelak = new Discord.MessageEmbed()
        .setColor('#808080')
        .setTitle('Select Difficulty')
        .setDescription('🇳:Normal' + 
        "\n" + '🇭:Hard' +
        "\n" + '🇽:Extreme')

    const KelakN = new Discord.MessageEmbed()
        .setColor('#808080')
        .setTitle('Kelak Normal Guide')
        .setDescription(':blue_circle: Normal [ rDeri, gGowther, bEastin, rEllate ]' +
        "\n" + ' ' +
        "\n" + 'Setup: Deris gear is ATT/CRIT with 5/5 ATT/CRIT rolls, Crit Dmg Food' +
        "\n" + ' ' +
        "\n" + ':one:  Turn 1' +
        "\n" + ' ' +
        "\n" + 'Play Deri Swipe, Gowther Debuff and both Ellate cards.' +
        "\n" + ' ' +
        "\n" + ':pencil:You can only use 3 deri swipes and do not play ellate detonates when the boss has more than 3 orbs and **ABSOLUTELY DO NOT USE A BUFF BEFORE A SWIPE**.' +
        "\n" + ' ' +
        "\n" + ':two:  Turn 2' +
        "\n" + ' ' +
        "\n" + 'Continue to charge deri and ellate ult while building stacks on deri' +
        "\n" + ' ' +
        "\n" + ':pencil:Repeat until at least turn 5 which is the minimum kill turn with a maximum of turn 8' +
        "\n" + ':pencil:You want to get rank 3 Helbram/Eastin Buff, Deri Buff, you only need a rank 2 Ellate Ball and also Ellate ult' +
        "\n" + ':pencil:You need to crit for at least 8million for a good score' +
        "\n" + ':pencil:Best case scenari you end with 16 stacks')

    const KelakH = new Discord.MessageEmbed()
        .setColor('#808080')
        .setTitle('Kelak Hark Guide')
        .setDescription(':orange_circle: Hard [ rDeri, gGowther, bEastin, rEllate ]' +
        "\n" + ' ' +
        "\n" + 'Setup: Deris gear is ATT/CRIT with 5/5 ATT/CRIT rolls, Crit Dmg Food' +
        "\n" + ' ' +
        "\n" + ':one:  Turn 1' +
        "\n" + ' ' +
        "\n" + 'Play Deri Swipe, Gowther Debuff and both Ellate cards.' +
        "\n" + ' ' +
        "\n" + ':pencil:Hard is more forgiving so you have about 5 hits 3 if you use a buff' +
        "\n" + ' ' +
        "\n" + ':two:  Turn 2' +
        "\n" + ' ' +
        "\n" + 'Continue to charge deri and ellate ult while building stacks on deri' +
        "\n" + ' ' +
        "\n" + ':pencil:Repeat until at least turn 5 which is the minimum kill turn with a maximum of turn 8' +
        "\n" + ':pencil:You want to get rank 3 Ellate Ball, Helbram/Eastin Buff, Deri Buff and Ellate ult' +
        "\n" + ':pencil:You need to crit for at least 8million for a good score' +
        "\n" + ':pencil:Best case scenario you end with 16 stacks')

    const KelakX = new Discord.MessageEmbed()
        .setColor('#808080')
        .setTitle('Kelak Extreme Guide')
        .setDescription(':purple_circle: Extreme [ rDeri, gGowther, bEastin, rEllate ]' +
        "\n" + ' ' +
        "\n" + 'Setup: Deris gear is ATT/CRIT with 5/5 ATT/CRIT rolls, ATT Food' +
        "\n" + ' ' +
        "\n" + ':one:  Turn 1' +
        "\n" + ' ' +
        "\n" + 'Play Deri Swipe, Gowther Debuff and both Ellate cards.' +
        "\n" + ' ' +
        "\n" + ' ' +
        "\n" + ':two:  Turn 2' +
        "\n" + ' ' +
        "\n" + 'Continue to charge deri and ellate ult for turn 4' +
        "\n" + ' ' +
        "\n" + ':four:  Turn 4' +
        "\n" + ' ' +
        "\n" + 'Play both Ults and use trash cards' +
        "\n" + ' ' +
        "\n" + 'Phase 2' +
        "\n" + ' ' +
        "\n" + 'Charge deri and ellate ult for turn 8 as well as the rank 3 Ellate Ball, Eastin Buff and Deri Buff' +
        "\n" + ' ' +
        "\n" + ':pencil:You want to get rank 3 Ellate Ball, Helbram/Eastin Buff, Deri Buff and Ellate ult' +
        "\n" + ':pencil:You need to crit for at least 10.5million for a good score' +
        "\n" + ':pencil:Best case scenario you end with 16 stacks')

        //#endregion

        const sentMessage = await message.channel.send(Kelak);
        const reactions = ['🇳', '🇭', '🇽'];      
        for (const reaction of reactions) sentMessage.react(reaction);      
        
        const filter = (reaction, user) => {
            reactions.includes(reaction.emoji.name) && user.id === message.author.id
        };     

        const collector = message.createReactionCollector(filter, { time: 5000})
        collector.on('end', collected => {
            const response = collected === '🇳' ? KelakN : (collected === '🇭' ? KelakH : EinekX); 
            message.channel.send(response)
        }); 
    }
}