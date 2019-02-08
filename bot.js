const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543482206295949313")
setInterval(function() {
channel.send(`مين غني ناو`);
}, 30)
})

client.login("NTI5MDcxNDI2MzM1MDE0OTMz.Dz9Msg.ZFSLUfVIjd_mL_OzcP4RTDRtFHQ");
