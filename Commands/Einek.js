const Discord = require('discord.js')

module.exports = {
    category: 'Guides',
    description: 'Einek Guide',
    
    callback: async ({ message }) => {

        //#region guide

        const Einek = new Discord.MessageEmbed()
        .setColor('#808080')
        .setTitle('Select Difficulty')
        .setDescription('🇳:Normal' + 
        "\n" + '🇭:Hard' +
        "\n" + '🇽:Extreme');

        const EinekN = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Einek Normal Guide')
            .setDescription(':blue_circle: Normal [ rHowzer, rGilthunder, rArthur, rTwigo ]' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Move Gil cards twice and use Taunt and any other card you have in the hand except for Arthurs buff and Gils attack.' +
            "\n" + ' ' +
            "\n" + ':pencil:You want the boss to focus on Gil, instead of the other characters.' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + 'Charge Gils ult and use taunt if you have it. If you dont, use Arthurs buff on Gilthunder.' +
            "\n" + ' ' +
            "\n" + ':pencil:You want the boss to keep focusing on Gil.' +
            "\n" + '' +
            "\n" + ':three:  Turn 3' +
            "\n" + 'Use trash cards, buff Gilthunder if possible and use his ultimate.' +
            "\n" + ' ' +
            "\n" + ':pencil:If you hit over 200k, you are done. If you try a few times and you cant because you lack damage try using gEscanor instead of Gilthunder and follow the Mono Green strat but using buffs on Escanor so the rest dont get hit, then ult turn 3.' +
            "\n" + ' ' +
            "\n" + ':family_wwbb: Team:' +
            "\n" + 'https://drive.google.com/file/d/127FSpXhBG8Vmn23m6n8pBDwNL03LIlWL/view?usp=sharing' +
            "\n" + ' ' +
            "\n" + ':tv: Video:' +
            "\n" + 'https://drive.google.com/file/d/1dPUGsDQxf1i9pkJmY62VrVRaf10k4DYu/view?usp=sharing');

        const EinekX = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Einek Extreme Guide')
            .setDescription(':purple_circle: Extreme [ gEscanor, rHowzer, rArthur, rTwigo ]' +
            "\n" + ' ' +
            "\n" + ':one: Turn 1' +
            "\n" + ' ' +
            "\n" + 'Use Arthurs buff on Escanor, both Escanor attacks and Arthur attack.' +
            "\n" + ' ' +
            "\n" + '• Ult food will allow you to do the raid in two turns instead, erasing that first turn RNG so move to Turn 2 in this guide directly.' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Rush Escanor by moving or combining his cards.' +
            "\n" + ' ' +
            "\n" + ':pencil:The boss will regenerate his shield at the end of the turn, so dont waste your good damage cards. Remember to use at least one card so the ultimate can be drawn.' +
            "\n" + ' ' +
            "\n" + ':three:  Turn 3' +
            "\n" + ' ' +
            "\n" + 'Bring down the Boss Shield by using any cards from the Howzer, Arthur and Twigo or any ultimate you might have at this point. Then use Escanors ultimate and kill the boss to move into phase two.' +
            "\n" + ' ' +
            "\n" + ':four:  Turn 4' +
            "\n" + ' ' +
            "\n" + 'Once in Phase 2. Rush Escanor ultimate immediately on this turn while also breaking boss’ shield. ' +
            "\n" + ' ' +
            "\n" + ':pencil:Ideally, the boss would only do single attacks to Escanor. Otherwise, you would lose points due to HP loss.' +
            "\n" + ' ' +
            "\n" + ':five:  Turn 5' +
            "\n" + ' ' +
            "\n" + 'Use all attacks/ultimates you have and then kill the boss with Escanors ultimate.' +
            "\n" + ' ' +
            "\n" + ':warning:If Twigo gets single targeted by the boss with the spike attack first couple turns, especially if it crits, then that’s already a dead run.');

        const EinekH = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Einek Hard Guide')
            .setDescription(':orange_circle: Hard [ rHowzer, rGil, rArthur, rTwigo ]' +
            "\n" + ':pencil:You can choose to eat HP food or Ult food here.' +
            "\n" + ' ' +
            "\n" + '• HP food will require you to reset until he launches 3 single attacks in turn 1 so you can taunt them, then move with Gil ult charge turn 2. This one will yield more points.' +
            "\n" + ' ' +
            "\n" + '• Ult food will allow you to do the raid in two turns instead, erasing that first turn RNG so move to Turn 2 in this guide directly.' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Move Gil cards twice and use Taunt and any other card you have in the hand except for Arthurs buff and Gils attack. ' +
            "\n" + ' ' +
            "\n" + ':pencil:You want the boss to focus on Gil, instead of the other characters.' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Charge Gils ult and use taunt if you have it. If you dont, use Arthurs buff on Gilthunder.' +
            "\n" + ' ' +
            "\n" + ':pencil:You want the boss to keep focusing on Gil. If you are using Ult food you can also try to do a run with 3 singles to maximize your HP.' +
            "\n" + ' ' +
            "\n" + ':three:  Turn 3' +
            "\n" + ' ' +
            "\n" + 'Use trash cards, buff Gilthunder if possible and use his ultimate.' +
            "\n" + ' ' +
            "\n" + ':pencil:If you hit over 200k, you are done. If you try a few times and you cant because you lack damage try using gEscanor instead of Gilthunder and follow the Mono Green strat but using buffs on Escanor so the rest dont get hit, then ult turn 3.' +
            "\n" + ' ' +
            "\n" + ':family_wwbb: Team:' +
            "\n" + ' https://drive.google.com/file/d/1qDT6L6PgRBtoSHKjg0DnZCcb-roLz1Ds/view?usp=sharing' +
            "\n" + ' ' +
            "\n" + ':tv: Video:' +
            "\n" + 'https://drive.google.com/file/d/1TM5LDVJv1mqVaZ6WpLVcx3jEpjz6-a7t/view?usp=sharing');

            //#endregion

        if (message.author.bot) return;
        else 
        {
            const sentMessage = await message.channel.send(Einek);
            const reactions = ['🇳', '🇭', '🇽'];      
            for (const reaction of reactions) sentMessage.react(reaction);      
            
            const filter = (reaction, user) => {
                reactions.includes(reaction.emoji.name) && user.id === message.author.id
            };     

            const collector = message.createReactionCollector(filter, { time: 5000})
            collector.on('end', collected => {
                const response = collected === '🇳' ? EinekN : (collected === '🇭' ? EinekH : EinekX); 
                message.channel.send(response)
            }); 
        }
    }
}
