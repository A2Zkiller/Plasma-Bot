const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDIzMTY0NjU2OTI4OTQ4MjM0.DYm8Mg.TgJAl0dB8TfoTc8KiAWFraD-kXk');
