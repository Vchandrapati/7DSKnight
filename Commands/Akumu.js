const Discord = require('discord.js')

module.exports = {
    category: 'Guides',
    description: 'Akumu Guide',

    callback: async ({ message }) => {

        //#region guides
        const Akumu = new Discord.MessageEmbed()
        .setColor('#808080')
        .setTitle('Select Difficulty')
        .setDescription('🇳:Normal' + 
        "\n" + '🇭:Hard' +
        "\n" + '🇽:Extreme')

        const AkumuN = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Akumu Normal Guide')
            .setDescription(':blue_circle: Normal [ rKyo, gHowzer, rArthur, rTwigo ]' +
            "\n" + ' ' +
            "\n" + 'Setup: :information_source: Howzer needs attack rolls to be able to kill. If he is 6/6 then SSR attack pieces will work just fine.' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Move Kyo AOE, use it and both Howzer\'s cards' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'You\'re looking for a draw that gives you an easy Kyo ultimate on Turn 3 while allowing to work towards Twigo and Howzer ultimates.' +
            "\n" + ' ' +
            "\n" + ':three: Turn three' +
            "\n" + ' ' +
            "\n" + 'Use Kyo ultimate, get Howzer and Twigo\'s ultimates up. The boss will have his ult up now, he does a lot of damage and removes 3 ultimate orbs so you want him to hit Kyo, since he already ulted while  also having the highest lifesteal out of any of your units so he will easily get back to full hp. Arthur getting hit its still okay, but not optimal.' +
            "\n" + ' ' +
            "\n" + ':four: Turn four' +
            "\n" + ' ' +
            "\n" + 'Finish with the remaining ultimates. Try to make sure you dont kill any of the arms before you kill the main body, as you\'ll be missing out on damage points. (About 15p)' +
            "\n" + ' ' +
            "\n" + ':five: Turn five' +
            "\n" + ' ' +
            "\n" + 'You will only get here if you couldn\'t get the ultimates up by turn 4, if that\s the case use them now.' +
            "\n" + ' ' +
            "\n" + ':pencil:A Perfect run is achieved by triple ulting on Turn 4.' +
            "\n" + ':pencil:To achieve this I change the attack pieces on everyone but Howzer for lower tier gear so that they do enough damage to life steal back to full HP, but not too much so that you don\'t risk killing one of the arms before howzer ultimates.' +
            "\n" + ':pencil:Use resistance on everyone to minimize damage taken if you can, Arthur can even patience the level 1 debuff with full resistance. Rare pieces work just fine.' +
            "\n" + ':pencil:Make sure that Twigo gear still allows him to do over 50k damage on the main body.' +
            "\n" + ':pencil:Don\'t worry about buffing with Arthur unless your Howzer needs it to kill the boss.')

        const AkumuH = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Akumu Hark Guide')
            .setDescription(':orange_circle: Hard [ rDeri, gGowther, bEastin, Goddess Liz ]' +
            "\n" + ' ' +
            "\n" + 'Setup: Deris gear is ATT/CRIT with 5/5 ATT/CRIT rolls, Gliz must have at least 15k att, Att Food' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'target left arm (the one that ruptures), eastin buff, deri attk, eastin aoe, gowther aoe' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2' +
            "\n" + ' ' +
            "\n" + 'Afterwards, u can use stun card to remove the stance, and then continue to target the arm which does rupture, or u can use aoe\'s to wipe that arm, u need to get that arm down before boss ruptures u' +
            "\n" + ' ' +
            "\n" + ':three:  Turn 3' +
            "\n" + ' ' +
            "\n" + 'After both arms are dead, u need 3* shield from liz to block boss aoe attks, a 3* shield can last two turns if ur gliz is extremely high attk (17k+ base attk)… a 3* shield also blocks boss ult and 2 silver cards. Otherwise, ideally you want two 3* shields after his arms are dead' +
            "\n" + ' ' +
            "\n" + ':pencil:Repeat until at least turn 5 which is the minimum kill turn with a maximum of turn 8' +
            "\n" + ':pencil:You want to get rank 3 Ellate Ball, Helbram/Eastin Buff, Deri Buff and Ellate ult' +
            "\n" + ':pencil:You need to crit for at least 8million for a good score' +
            "\n" + ':pencil:Best case scenario you end with 16 stacks')

        const AkumuX = new Discord.MessageEmbed()
            .setColor('#808080')
            .setTitle('Akumu Extreme Guide')
            .setDescription(':purple_circle: Extreme [ lvmeli, rTwigo, sr Red Liz, Arthur ]' +
            "\n" + ' ' +
            "\n" + 'Setup: LV, ATT/DEF with 5/5 ATT/CRIT rolls, HP Food' +
            "\n" + ':warning::pencil:LV ult needs to be able to hit over 212k on a non crit with a bunch of cards in hand. Want to finish around turn 6-7.' +
            "\n" + ' ' +
            "\n" + ':one:  Turn 1' +
            "\n" + ' ' +
            "\n" + 'Target the shield,  use all the useless attack cards.' +
            "\n" + ' ' +
            "\n" + ':two:  Turn 2 till when you\'re ready to kill phase 1 (ideally turn 4)' +
            "\n" + ' ' +
            "\n" + 'Manage your cards while using the LV single targets to get his ult, get Liz ult ready and if you also need for the mission, get the level 3 buff from Arthur ready, be aware that if this is the case, the boss might debuff Arthur blocking his buff, so if you see an opportunity to use it and remove 8 debuffs with it, just use it then.' +
            "\n" + ' ' +
            "\n" + ':four:  Turn 4' +
            "\n" + ' ' +
            "\n" + 'Finish with all your ults except Liz\'s, make sure you have it up if you still dont have ready, you MUST use Liz ult next turn, to keep you at max hp until the end of the run.' +
            "\n" + ' ' +
            "\n" + 'Phase 2' +
            "\n" + ' ' +
            "\n" + ':five:  Turn 5' +
            "\n" + 'Use Liz ult, buff LV, and throw his aoe cards... be careful that you don\'t want to bring the shield hp to low now or you\'ll risk killing it with the aoe destroying your run. If you got single target cards from LV throw them at the sword and not the shield. You want the sword to die asap so the main body loses def related stats.' +
            "\n" + ' ' +
            "\n" + ':six:  Turn 6' +
            "\n" + 'Since the shield already set up his stance, you don\'t have to worry about killing it anymore, just use all the LV aoe you can until it\'s dead. Don\'t worry if you need 1 more turn' +
            "\n" + ' ' +
            "\n" + ':pencil:You need to crit for at least 10.5million for a good score' +
            "\n" + ':pencil:Best case scenario you end with 16 stacks')

        //#endregion

        if (message.author.bot) 
            return;
        else 
        {
            const sentMessage = await message.channel.send(Akumu);
            const reactions = ['🇳', '🇭', '🇽'];      
            for (const reaction of reactions) sentMessage.react(reaction);      
            const filter = (reaction, user) => {
                reactions.includes(reaction.emoji.name) && user.id === message.author.id
            };     

            const collector = message.createReactionCollector(filter, { time: 5000})
            collector.on('end', collected => {
                const response = collected === '🇳' ? AkumuN : (collected === '🇭' ? AkumuH : AkumuX); 
                message.channel.send(response)
            });
        }
    }
}