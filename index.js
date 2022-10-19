const Discord = require("discord.js");
const client = new Discord.Client();
const { MessageAttachment, MessageEmbed } = require('discord.js')
const Canvas = require('canvas');
var mysql = require('mysql');
require("dotenv").config();

// Notre préfixe de commande
const prefixCmd = '-';






client.on("message", msg => {

    // Si le message n'est pas préfixé ou qu'il vient d'un autre bot, nous l'ignorons
    if (!msg.content.startsWith(prefixCmd)) return

    // Si nous arrivons jusque ici, alors c'est une commande

    // Nous convertissons la commande sous forme de tableau en prenant soin de retirer le préfixe
    const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
    // Extraction du premier élément de 'args', ce qui correspond à la commande
    const command = args.shift().toLowerCase();

   

    let channelJ1 = msg.guild.channels.cache.get("1005182851584630896");
    let channelJ2 = msg.guild.channels.cache.get("1005182911110201505");
    let channelJ3 = msg.guild.channels.cache.get("1005182934803808336");

    function teamReact(name) {
        if (name == "LAKERS") {
            msg.react('1008768267533426769');
        }
        if (name == "SIXERS") {
            msg.react('1008768279701102604');
        }
        if (name == "WARRIORS") {
            msg.react('1008768286483304448');
        }
        if (name == "CELTICS") {
            msg.react('1008768254195539968');
        }
        if (name == "BLAZERS") {
            msg.react('1008768248684224583');
        }
        if (name == "NUGGETS") {
            msg.react('1008768272616923187');
        }
        if (name == "PACERS") {
            msg.react('1008768273803907145');
        }
        if (name == "PELS") {
            msg.react('1008768275032838184');
        }
        if (name == "PISTONS") {
            msg.react('1008768276395991052');
        }
        if (name == "RAPTORS") {
            msg.react('1008768277809483977');
        }
        if (name == "ROCKETS") {
            msg.react('1008768279038398484');
        }
        if (name == "SPURS") {
            msg.react('1008768281336889444');
        }
        if (name == "SUNS") {
            msg.react('1008768282406424616');
        }
        if (name == "THUNDER") {
            msg.react('1008768283475968161');
        }
        if (name == "WOLVES") {
            msg.react('1008768284868481217');
        }
        if (name == "NETS") {
            msg.react('1008768271387992064');
        }
        if (name == "MAVS") {
            msg.react('1008768270146486323');
        }
        if (name == "BUCKS") {
            msg.react('1008768249946710036');
        }
        if (name == "BULLS") {
            msg.react('1008768251125305375');
        }
        if (name == "CAVS") {
            msg.react('1008768252618477588');
        }
        if (name == "CLIPPERS") {
            msg.react('1008768255546101780');
        }
        if (name == "GRIZZLIES") {
            msg.react('1008768256628244540');
        }
        if (name == "HAWKS") {
            msg.react('1008768257752301699');
        }
        if (name == "HEAT") {
            msg.react('1008768259065135174');
        }
        if (name == "HORNETS") {
            msg.react('1008768260612821053');
        }
        if (name == "JAZZ") {
            msg.react('1008768263053910068');
        }
        if (name == "KINGS") {
            msg.react('1008768265268494336');
        }
        if (name == "KNICKS") {
            msg.react('1008768266187051109');
        }
        if (name == "MAGIC") {
            msg.react('1008768268888178688');
        }
        if (name == "WIZARDS") {
            msg.react('1008768287821279342');
        }
    }
    

    if (command == "c") {
        lemsg = msg.content.substring(3);
        var tab = lemsg.split(' ');
        if (tab[4]) {
            channelJ1.send(lemsg);
            channelJ2.send(lemsg);
            channelJ3.send(lemsg);
        } else {
            channelJ1.send("-g. " + lemsg);
            channelJ2.send("-g. " + lemsg);
            channelJ3.send("-g. " + lemsg);
        }

    }

    if (command.includes("g.")) {
        lemsg = msg.content;
        var tab = lemsg.split(' ');
        //console.log(tab);
        if (tab[1]){
            teamReact(tab[1]);
        }
        if (tab[3]){
            teamReact(tab[3]);
        }
        msg.react('⭐');
    }

});

client.login(process.env.BOT_TOKEN);
