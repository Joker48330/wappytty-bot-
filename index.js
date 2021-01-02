const Discord = require("discord.js");

const bot = new Discord.Client;

bot.on("ready", () => {
    console.log("Bot prét")
    bot.user.setActivity(" le stream de wappytty_studios",{type: "WATCHING"} ); 

});

bot.login("Nzk0ODczOTYyODg2MjAxMzc0.X_BKEA.Mx7e8BAooN4yv_6HCJQhoKHx-L4");

bot.on("guildMemberAdd", member => {
    bot.channels.cache.get("717359409998725131").send("Bienvenue sur le serveur !");
    
})