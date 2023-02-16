
// Create role function
function createRole(message) {
    const guild = message.guild;
    const role = guild.roles.cache.find(role => role.name === "student");
  
    if (message.content === '!test' && message.reactions.cache.has('1️⃣')) {
      const member = message.member;
      member.roles.add(role);
      message.channel.send('You have been assigned the "student" role!');
    }
  }
  

  client.on("messageCreate", (message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    // ... other code ...
  
    // Call createRole function
    createRole(message);
  }));
  