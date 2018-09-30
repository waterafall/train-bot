const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone : true});
bot.on('ready', async () => {
	var channel = bot.channels.get(process.env.channel);
      var interval = setInterval (function () {
        channel.send("t!tg train");
        channel.send("t!tg play");
        channel.send("t!tg feed");
        channel.send("t!tg clean");
      }, 20 * 1200); 
});
bot.login(process.env.token);
