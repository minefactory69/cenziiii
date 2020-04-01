const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone : false});
const botconfig = require("./botconfig.json");
const tokenfile = require("./tokenfile.json");
// const cooldown = require("./cooldown.json");
let name = "";
////////////////////////////////////////////////

//Feljebb vannak a globális változók.
 
 
 
bot.on("ready", async() => { //bot.on kezdete
    console.log(`${bot.user.username} elindult sikeresen!`)
 
//status :d   
let prefix = botconfig.prefix; 
    let statusok = [
        `!help <parancsok<`,
        `Magyar Games OP`,
        `CENZ OP`,
        `REWANDS!!!!`

    ]
    
 
    setInterval(function(){
        let status = statusok[Math.floor(Math.random() * statusok.length)];
        bot.user.setActivity(status, {type: "WATCHING"}) 
    }, 3000) 


}); //itt vége a bot.on nak
 
 
 
bot.on("message", async message => { //bot on kezdete
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
 //prefix messageArray és cmd :D cmd = 0. karakter prefix = botconfig.prefix :D
    let prefix = botconfig.prefix; 
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
 
    //////////////////////////////////////

    let nemit = message.guild.roles.find(`name`, `muteolva`);
if(!nemit) {
    message.guild.createRole({
        name: 'muteolva',
        hoist: false,
        mentionable: false
    });
};


    if (cmd === `${prefix}cigi`) {
        message.channel.send(`${message.author.username} cigi szünetet tart!`).then(async msg => {
            setTimeout(() => {
                msg.edit('🚬');
            }, 1500);
            setTimeout(() => {
                msg.edit('🚬 ☁ ');
            }, 1500);
            setTimeout(() => {
                msg.edit('🚬 ☁☁ ');
            }, 2000);
            setTimeout(() => {
                msg.edit('🚬 ☁☁☁ ');
            }, 2500);
            setTimeout(() => {
                msg.edit('🚬 ☁☁');
            }, 3000);
            setTimeout(() => {
                msg.edit('🚬 ☁');
            }, 3500);
            setTimeout(() => {
                msg.edit('🚬 ');
            }, 4000);
            setTimeout(() => {
                msg.edit(`${message.author.username} végzett a tüdőt károsító szórakozásával! **Cigizni nem megoldás!**`);
            }, 4500);
        });
    };

    if (cmd === `${prefix}szipu`) {
        message.channel.send(`${message.author.username} kicsit beájult.`).then(async msg => {
            setTimeout(() => {
                msg.edit('Szipuuu');
            }, 1500);
            setTimeout(() => {
                msg.edit('szipuuu á');
            }, 1500);
            setTimeout(() => {
                msg.edit('szipuuu áá');
            }, 2000);
            setTimeout(() => {
                msg.edit('szipuuu ááá');
            }, 2500);
            setTimeout(() => {
                msg.edit('szipuuu áá');
            }, 3000);
            setTimeout(() => {
                msg.edit('szipuuu á');
            }, 3500);
            setTimeout(() => {
                msg.edit('szipuuu');
            }, 4000);
            setTimeout(() => {
                msg.edit(`${message.author.username} végzett a higítós zacskóval!`);
            }, 4500);
        });
    };
   
    if(cmd === `${prefix}ban`) {
        if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
        if (message.member.hasPermission("KICK_MEMBERS")) {
        let kickPerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (kickPerson) {
        if (!kickPerson.hasPermission("KICK_MEMBERS")) {
        let bicon = bot.user.displayAvatarURL;
    
        let kickEmbed = new Discord.RichEmbed()
        .setTitle("-->>Ban<<--")
        .setDescription("Ban üzenet:")
        .setColor("#ff0000")
        .setThumbnail(bicon)
        .addField(`${kickPerson.user.username} bannolva lett!`, "ˇˇˇˇ")
        .addField("Kiosztotta:", `${message.member} ezt az embert: ${kickPerson.user.username}`)
        .setTimestamp(message.createdAt)
        .setFooter(`${name}`);
    
        message.guild.member(kickPerson.id).ban();
        message.channel.send(kickEmbed);
        console.log(`${message.author.id} bannolta: ${kickPerson}!`);
    
        } else message.channel.send(`A szerver adminjait nem tudod bannolni!`);
    
        } else message.channel.send(`Kérlek adj meg egy nevet! (pl: @cenzxd)`);
    
        } else message.channel.send(`Neked nincs jogod hogy bannolj!`);
    } else message.channel.send(`Hiányzik: administrator jog.`)
    
    }

    if(cmd === `${prefix}say`) {
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`Nincs jogod ehhez a parancshoz!`);
        let bMessage = args.join(" ");
        message.delete().catch();
        message.channel.send(bMessage);
    }

    if(cmd === `${prefix}kick`) {
        if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
        if (message.member.hasPermission("KICK_MEMBERS")) {
        let kickPerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (kickPerson) {
        if (!kickPerson.hasPermission("KICK_MEMBERS")) {
        let bicon = bot.user.displayAvatarURL;
    
        let kickEmbed = new Discord.RichEmbed()
        .setTitle("-Kick-")
        .setDescription("Kick üzenet:")
        .setColor("#ff0000")
        .setThumbnail(bicon)
        .addField(`${kickPerson.user.username} kickelve lett!`, "ˇˇˇˇ")
        .addField("Kiosztotta:", `${message.member} ezt az embert: ${kickPerson.user.username}`)
        .setTimestamp(message.createdAt)
        .setFooter(`${name}`);
    
        message.guild.member(kickPerson.id).kick();
        message.channel.send(kickEmbed);
        console.log(`${message.author.id} kickelte ${kickPerson}!`);
    
        } else message.channel.send(`A szerver adminjait nem tudod kickelni!`);
    
        } else message.channel.send(`Kérlek adj meg egy nevet! (pl: @cenzOP)`);
    
        } else message.channel.send(`Neked nincs jogod hogy kickelj!`);
    } else message.channel.send(`Hiányzik: administrator jog.`)
    
    }


    //mute xdddd

    if (cmd === `${prefix}mute`) {
        if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
        let muterang = message.guild.roles.find(`name`, `muteolva`);
        let mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(message.member.hasPermission("KICK_MEMBERS")) {
        if(mute) {
        if(!mute.hasPermission("KICK_MEMBERS")) {
        if(!mute.roles.has(muterang.id)) {
    
        message.channel.send(`<@${mute.id}> -nak/nek a nyelvére csomó lett kötve!`)
    
        mute.addRole(muterang.id);
    
        } else message.channel.send(`Ez az ember már némítva van!`)
        } else message.channel.send(`A szerver adminjait nem tudod némítani!`);
        } else message.channel.send(`Kérlek írj be egy nevet. (pl: @nemcenz)`);
        } else message.channel.send(`Nincs jogod hogy némíts!`);
    } else message.channel.send(`Hiányzik: administrator jog.`)
    }

    let nemitottrang = message.guild.roles.find(`name`, `muteolva`);
if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
if(message.member.hasPermission("KICK_MEMBERS")) {

} else if(message.member.roles.has(nemitottrang.id)) {
    message.delete();
}
}

if (cmd === `${prefix}unmute`) {
    if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
    let muterang = message.guild.roles.find(`name`, `muteolva`);
    let mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(message.member.hasPermission("KICK_MEMBERS")) {
    if(mute) {
    if(mute.roles.has(muterang.id)) {

    message.channel.send(`${emoji.done} <@${mute.id}> -nak/nek kicsomózták a nyelvét!`)

    mute.removeRole(muterang.id);

    } else message.channel.send(`Ez az ember nincs némítva!`)
    } else message.channel.send(`Kérlek írj be egy nevet. (pl: @cenzike)`);
    } else message.channel.send(`Nincs jogod hogy felnémíts!`);
} else message.channel.send(`Hiányzik: administrator jog.`)
}

if(cmd === `${prefix}help`){
    let hölp = new Discord.RichEmbed()
        .setTitle("HELP")
        .setColor("#ff0000")
        .addField(`${prefix}cigi`, "Káros hatása van!")
        .addField(`${prefix}szipu`, "Vigyázz! ne szívj sokat!")
        .addField(`${prefix}ban @név`, "*Emberek bannolása.*")
        .addField(`${prefix}kick @név`, "*Emberek kickelése.*")
        .addField(`${prefix}mute @név`, "*Muteol egy embert :)*")
        .addField(`${prefix}unmute`, "*Feololdja a némítást.*")
        .setTimestamp(message.createdAt)
        .setFooter(`${name}`);

        message.channel.send(hölp);
}
    ///end
})


 
bot.login(tokenfile.token);