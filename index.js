require("dotenv").config()
const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require(`discord.js`);
const Discord = require (`disccord.js`);
const prefix = '!';

const client = new Client({ intents: [GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent] });

client.on("ready", () => {
    console.log("Bot is online!");

    client.user.setActivity(`IDK`, {type: "IDK" });

})

client.on("messageCreate", (message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    //message array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];
    const guild = message.guild;
    //COMMANDS

// test command

if (command === 'test') {
    message.channel.send("If you are in class CSC-325 React with :one:!");
}

// testing create channel
/*if (command === 'create-channel') {
    const channelName = message.content.split(" ").slice(1).join(" ");
    const guild = message.guild;

    if (!channelName) {
      return message.channel.send("Please provide the course number and channel # (ex. CSC_325_G1).");
    }
    guild.channels
    .create(channelName, { type: 'GUILD_TEXT' })
    .then(channel => message.channel.send(Created ,{channelName} ,channel))
    .catch(console.error);

}
*/
if (command === 'createtextchannel') {
    const channelName = message.content.split(" ").slice(1).join(" ");
    //const name = message.content.replace('!createtextchannel ', '')
    message.channel.send('create channel command works');
    guild.channels
    .create({name: channelName, 
        type: 0,
        //parent: cat[0].ID,
    })
    .then((channel) => {
        message.channel.send('.then works.');
        console.log(channel)
        const categoryId ='1062143661325955123'
        channel.setParent(categoryId)
    })
}
//test poll command
const client2 = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

  
  client2.on('message', message => {
    if (message.content === '!poll') {
      const filter = m => m.author.id === message.author.id;
      let question, options;
  
      message.reply('Please enter the poll question and options in the following format: "Question,Option 1,Option 2,Option 3"')
      .then(() => {
        message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
          .then(collected => {
            const input = collected.first().content;
            const inputArray = input.split(',');
  
            if (inputArray.length < 4) {
              throw new Error('Invalid input'); // Throw an error if the user's input is not in the correct format
            }
  
            question = inputArray[0];
            options = inputArray.slice(1);
  
            const pollEmbed = new Discord.MessageEmbed()
              .setColor('#0099ff')
              .setTitle(question)
              .setDescription('Vote for your favorite option!');
  
            for (let i = 0; i < options.length; i++) {
              pollEmbed.addField(`Option ${i + 1}`, options[i], true);
            }
  
            message.channel.send(pollEmbed)
            .then(pollMessage => {
              for (let i = 0; i < options.length; i++) {
                const emoji = getEmoji(i + 1);
                pollMessage.react(emoji);
              }
            });
          })
          .catch(() => {
            message.reply('You did not enter a poll question and options in time, or your input was invalid. Please try again.');
          });
      });
    }
  });
  
  // Helper function to get the emoji based on the option number
  function getEmoji(optionNumber) {
    const emojiArray = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
    return emojiArray[optionNumber - 1];
  }
  

    }))



client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN);
