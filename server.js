const Discord = require("discord.js");
const myid = ['569861608344518660'];
const prefix = ['#'];
const cmd = require("node-cmd")
const client = new Discord.Client();
const client2 = new Discord.Client();
const Enmap = require("enmap")
const Canvas = require('canvas')
const moment = require("moment");
require('moment-duration-format');
const Ms = require("ms")
const request = require("request");
const hastebin = require("hastebin-paste");


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.login("NzE3MzEzNjgwOTM2NTM0MDY2.XtYgog.yVBgOHn4NxQmf_9rfDVKMQpZxR0");

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ


let lastSeenInVoiceChannel = {};
const newUsers = [];

const { registerFont } = require('canvas')

client.on('ready', function(){
  client.users.forEach(user => {
lastSeenInVoiceChannel[user.id] = { time: (new Date).getTime() }
});
  console.log(`I'm Ready ${client.user.tag} (${client.user.id}) S ${client.guilds.size} U ${client.users.size}`)
    var ms = 60000 ;
    var setGame = ['Soon!','Help? $help','Invite? $invite'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setActivity(setGame[i],{ url: 'https://twitch.tv/Taino/Taino/Taino' , type: 'STREAMING' });
    }, ms);

});

client.on("message",async message => {
  if (message.content === "$user") {

var LS;

let member = message.mentions.members.first();

if(member) {

let invites = await message.guild.fetchInvites();

var invites_arrays = []

invites.forEach((i) => {
if(i.inviter.id === member.user.id) {
invites_arrays.push(i.uses)
}
});

if(member.voiceChannel) { LS = `Online`; } else { if(!lastSeenInVoiceChannel[member.user.id]) { LS = `Fetching`; } else LS =  moment.duration(Math.floor(((new Date).getTime() - lastSeenInVoiceChannel[member.user.id].time))).format('d[ days], h[ hours], m[ minutes, and ]s[ seconds]'); }

let userinfoE = new Discord.RichEmbed()
.setColor("BLURPLE")
.addField("**Joined Discord :**",`\`${moment(member.user.createdAt).format('D/M/YYYY h:mm')}\`\n**${moment(member.user.createdAt).fromNow()}**`,true)
.addField("**Joined Server :**",`\`${moment(member.joinedAt).format('D/M/YYYY h:mm')}\`\n**${moment(member.joinedAt).fromNow()}**`,true)
.addField('**Number of invitations :**',`**${parseInt(invites_arrays.reduce((a, b) => a + b, 0)) || "0" }**`,true)
.addField('**Last seen in voice channels :**',`**${LS}**`,true)
.setThumbnail(member.user.displayAvatarURL)
.setFooter(member.user.tag,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
message.channel.send(userinfoE)
return;
}

let invites = await message.guild.fetchInvites();

var invites_arrays = []

invites.forEach((i) => {
if(i.inviter.id === message.author.id) {
invites_arrays.push(i.uses)
}
});


if(message.member.voiceChannel) { LS = `Online`; } else { if(!lastSeenInVoiceChannel[message.author.id]) { LS = `Fetching`; } else LS =  moment.duration(Math.floor(((new Date).getTime() - lastSeenInVoiceChannel[message.author.id].time))).format('d[ days], h[ hours], m[ minutes, and ]s[ seconds]') }

let userinfoE = new Discord.RichEmbed()
.setColor("BLURPLE")
.addField("**Joined Discord :**",`\`${moment(message.author.createdAt).format('D/M/YYYY h:mm')}\`\n**${moment(message.author.createdAt).fromNow()}**`,true)
.addField("**Joined Server :**",`\`${moment(message.member.joinedAt).format('D/M/YYYY h:mm')}\`\n**${moment(message.member.joinedAt).fromNow()}**`,true)
.addField('**Number of invitations :**',`**${parseInt(invites_arrays.reduce((a, b) => a + b, 0)) || "0" }**`,true)
.addField('**Last seen in voice channels :**',`**${LS}**`,true)
.setThumbnail(message.author.displayAvatarURL)
.setFooter(message.author.tag,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
message.channel.send(userinfoE)
}

});

client.on("message",async message => {
  if (message.content === "$server") {
  let embed = new Discord.RichEmbed()
  .addField(`:id: Server ID:`, `${message.guild.id}`, true)
  .addField(`:calendar: Created on:`, `${moment(message.guild.createdAt).format(`D/M/YYYY h:mm`)} \n ${moment(message.guild.createdAt).locale("EN-nw").fromNow()}`,true)
  .addField(`:crown: Owned by`, `${message.guild.owner.user.toString()}`,true) 
  .addField(`:busts_in_silhouette: Members [${message.guild.members.size}]`, `**${message.guild.members.filter(c => c.presence.status !== "offline").size}** Online`, true)
  .addField(`:speech_balloon: Channels [${message.guild.channels.size}]`,`**${message.guild.channels.filter(f => f.type === "text").size}** Text | **${message.guild.channels.filter(f => f.type === "voice").size}** Voice`,true)
  .addField(`:earth_africa: Others`, `**Region:** ${message.guild.region} \n **Verification level:** ${message.guild.verificationLevel}`, true)  
  .addField(`:closed_lock_with_key: Roles [${message.guild.roles.size}]`, `To see the whole list with all roles use **${prefix}roles**`, true) 
  .setColor(`black`)
  .setAuthor(`${message.guild.name}`, `${message.guild.iconURL || client.user.avatarURL}`);
  message.channel.send(embed);
  

  }

  if(message.content.startsWith(prefix+"roles")) {
      let spaces = "                      "
      const roles = []
      message.guild.roles.forEach(c => { roles.push(c.name+spaces.substring(c.name.length)+c.members.size+" members"); });
      message.channel.send("\`\`\`"+roles.join("\n")+"\`\`\`");
  }
 
 

    if(message.content.split(' ')[0] == `$ban`){
      if(!message.member.hasPermission('BAN_MEMBERS')) return
      if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      if(!user) return message.channel.send(`**🙄 - I can't find this member**`);
      if(user.user.id === message.author.id) return message.channel.send('**🙄 - You can\'t ban yourself!**');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`🙄 **-  You can't ban @${user.user.username}**`);
     if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`🙄 **-  I can't ban @${user.user.username}**`);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD') || user.user.id == message.guild.owner.id) return message.channel.send(`🙄 **-  You can't ban @${user.user.username}**`);
     if(!message.guild.member(user.user).bannable) return message.channel.send(`**🙄 - I couldn't ban that user. Please check my permissions and role position.**`);
      message.guild.member(user).ban(user);
      message.channel.send(`**✅ ${user.user.username} banned from the server! ✈**`)
    }

    if(message.content.split(' ')[0] == `$kick`){
      if(!message.member.hasPermission('KICK_MEMBERS')) return;
      if(!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return;
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      if(!user) return message.channel.send(`**🙄 - I can't find this member**`);
      if(user.user.id === message.author.id) return message.channel.send('**🙄 - You can\'t kick yourself!**');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`🙄 **-  You can't ban @${user.user.username}**`);
     if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`🙄 **-  i can't ban @${user.user.username}**`);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD') || user.user.id == message.guild.owner.id) return message.channel.send(`🙄 **-  You can't kick @${user.user.username}**`);
     if(!message.guild.member(user.user).bannable) return message.channel.send(`**🙄 - I couldn't kick that user. Please check my permissions and role position.**`);
      message.guild.member(user).kick(user);
      message.channel.send(`**✅ ${user.user.username} kicked from the server! ✈**`)
    }
    if(message.content === prefix + "ping") {

  let ping = await message.channel.send("pong")

  ping.edit(`Time taken: ${Date.now() - message.createdTimestamp} ms \nDiscord API: ${Math.round(client.ping)} ms`, {code:"javascript"})

  }
});


client.on('guildMemberAdd', function(member) {
    console.log(`Server: ${member.guild.name} ` + `Member: <@` + `${member.id}` + `>`);
    //post in the guild's log channel
    var log = member.guild.channels.find('name', "member-log-join");
    if (log != null) {
        log.send('**[Joined]** <@' + member.id + '>');
    }

});


client.on('guildMemberRemove', function(member) {
    console.log(`Server: ${member.guild.name} ` + `Member: <@` + `${member.id}` + `>`);

    //post in the guild's log channel
    var log = member.guild.channels.find('name', "member-log-left");
    if (log != null)
        log.send('**[Left]** <@' + member.id + '>');

});

client.on('guildBanRemove', function(guild, user) {

    //log to console
    console.log('[' + guild.name + '][UNBAN] ' + user.username + '#' + user.discriminator);

    //post in the guild's log channel
   var log = guild.channels.find(channel => channel.name === "channel-unban");
    if (log != null)
        log.send('**[Unbanned]** ' + user);

});


client.on('guildBanAdd', function(guild, user) {

    //log to console
    console.log('[' + guild.name + '][BAN] ' + user.username + '#' + user.discriminator);

    //post in the guild's log channel
   var log = guild.channels.find(channel => channel.name === "channel-ban");
    if (log != null)
        log.send('**[Banned]** ' + user);

});


client.on("messageDelete", (messageDelete) => {

  let DeleteEmbed = new Discord.RichEmbed()
  .setTitle("**DELETED MESSAGE**")
  .setColor("#RANDOM")
  .addField("اسم الشخص", messageDelete.author.tag, true)
  .addField("الشات", messageDelete.channel, true)
  .addField("Message", messageDelete.content)
  .setFooter(`رقم الايدي للرسالة: ${messageDelete.id} |  لقد حذف رسالة: ${messageDelete.author.id}`);

  let DeleteChannel = messageDelete.guild.channels.find(x => x.name === "deleted-message");
  DeleteChannel.send(DeleteEmbed);
});




client.on('messageDelete', message => {
	console.log(`A message by ${message.author.tag} was deleted, but we don't know by who yet.`);
  
});



   client.on('messageUpdate', function(oldMessage, newMessage) {

        if (newMessage.channel.type == 'text' && newMessage.cleanContent != oldMessage.cleanContent) {
  
    var log = newMessage.guild.channels.find('name', "log-update-message");
          if (log != null)
              log.send({embed: {
        color: 0xb30b3d,
        author: {
        },
        title: "MESSAGE UPDATE",
        url: "",
        description: "",
        fields: [{
            name: "Message send by",
            value: (`${newMessage.author}`)
          },
          {
            name: "Old message",
            value: (`${oldMessage.cleanContent}`)
          },
          {
            name: "New message",
            value: (`${newMessage.cleanContent}`)
          },
        ],
        timestamp: new Date(),
        footer: {
          text: "logs"
        }
      }
      });
      }
      });


client.on("message",async message => {
  if(!message.guild || message.author.bot) return
  
  let args = message.content.split(' ');
  
  if(!prefix) { client.settings.set("main","-","prefix") }

  const EVargs = message.content.split(" ").slice(1);
  const clean = text => { if (typeof(text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203)); else  return text; }
  function Trim (str, length, ending) { if (length == null) { length = 100; } if (ending == null) { ending = '..';  } if (str.length > length) { return str.substring(0, length - ending.length) + ending; } else { return str; }  };

  if (message.content.startsWith(prefix+"eval")) {
    if(message.author.id !== "569861608344518660") return;
    if(!EVargs) return;
    try {
      const code = EVargs.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

     if(clean(evaled) === "undefined") return;
 
      message.channel.send(clean(evaled), {code:"javascript"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
  
  if(message.content === prefix+"welcome") {



   const canvas = Canvas.createCanvas(654, 276);
	 const ctx = canvas.getContext('2d');

     const a2canvas = Canvas.createCanvas(654, 276);
	   const ctx2 = a2canvas.getContext('2d');

  const background = await Canvas.loadImage("https://media.discordapp.net/attachments/293461233145741312/713629425140498432/welcome.png");
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

  
	ctx.font = '34px Comic Sans'
	ctx.fillStyle = '#ffffff';
  ctx.textAlign = "center";
	ctx.fillText(`${Trim(message.author.username,13)}`, 345, 165);

  /*ctx.font = '20px Comic Sans'
	ctx.fillStyle = '#DCDCDC';
  ctx.textAlign = "center";
	ctx.fillText(`${moment(message.member.joinedAt).fromNow()}`, 299, 205);*/

  ctx.beginPath();
  ctx.arc(140, 150, 110, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();
	const avatar = await Canvas.loadImage(message.author.displayAvatarURL);
	ctx.drawImage(avatar,8, 10, 253, 256);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome.png');

	await message.channel.send(attachment);


    /*
    await message.channel.startTyping();
    let user = message.author.id
    let url = `https://api.probot.io/profile/${user}`;
    request({
      url,
      encoding: null
    }, async (err, res, buffer) => {
      if (err) throw err
      if (!res || !buffer) return;
      await message.channel.send(``, { file: buffer, name: 'profile.png' });
      await message.channel.stopTyping();
    });*/
  }
  const bbg =["https://media.giphy.com/media/BHNfhgU63qrks/giphy.gif", 
            "https://media.giphy.com/media/BHNfhgU63qrks/giphy.gif", 
           ];
  if(message.content.startsWith(prefix+"id")) {
 let bbs = bbg[Math.floor(Math.random() * bbg.length)]

  const member = message.mentions.members.first()

  
  if(member) {
    const canvas = Canvas.createCanvas(800 , 500);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage("https://media.giphy.com/media/BHNfhgU63qrks/giphy.gif");
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	// Add an exclamation point here and below

  var username = new String(member.user.username)
  if(username.length > 10) {
  username = Trim(member.user.username,8)
  } 
	ctx.font = '40px Comic Sans'
	ctx.fillStyle = '#ffffff';
  ctx.textAlign = "center";
	ctx.fillText(`${username}`, 670, 173);

  const status = { online: "Online", idle: "Idle", dnd: "DND", offline: "Offline" };

  ctx.font = '40px Comic Sans'
	ctx.fillStyle = '#ffffff';
  ctx.textAlign = "center";
	ctx.fillText(`${status[member.user.presence.status]}`, 660, 306);


  ctx.font = '40px Comic Sans'
	ctx.fillStyle = '#ffffff';
  ctx.textAlign = "center";
	ctx.fillText(`#${member.user.discriminator}`, 395, 150);

  let playing = `${member.user.presence.game ? `${member.user.presence.game.name}` : "Nothing"}`

  if(playing.length > 30) {playing = Trim(playing,30)}

  ctx.font = '40px Comic Sans'
	ctx.fillStyle = '#ffffff';
  ctx.textAlign = "center";
	ctx.fillText(playing, 395, 390);

  
  ctx.font = '40px Comic Sans'
	ctx.fillStyle = '#ffffff';
  ctx.textAlign = "center";
	ctx.fillText(`${moment.utc(member.user.createdAt).format('YYYY/MM/DD')}`, 138, 173);

  ctx.font = '40px Comic Sans'
	ctx.fillStyle = '#ffffff';
  ctx.textAlign = "center";
	ctx.fillText(`${moment.utc(member.joinedAt).format('YYYY/MM/DD')}`, 138, 306);
 
	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar,339, 9, 147, 150);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'ID.png');

	await message.channel.send(attachment);
  return; 
  }
    
  const canvas = Canvas.createCanvas(800 , 500);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage("https://media.giphy.com/media/BHNfhgU63qrks/giphy.gif");
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	// Add an exclamation point here and below

  var username = new String(message.author.username)
  if(username.length > 10) {
  username = Trim(message.author.username,8)
  } 
	ctx.font = '40px Comic Sans'
	ctx.fillStyle = '#ffffff';
  ctx.textAlign = "center";
	ctx.fillText(`${username}`, 670, 173);

  const status = { online: "Online", idle: "Idle", dnd: "DND", offline: "Offline" };

  ctx.font = '40px Comic Sans'
	ctx.fillStyle = '#ffffff';
  ctx.textAlign = "center";
	ctx.fillText(`${status[message.member.user.presence.status]}`, 660, 306);


  ctx.font = '40px Comic Sans'
	ctx.fillStyle = '#ffffff';
  ctx.textAlign = "center";
	ctx.fillText(`#${message.author.discriminator}`, 395, 263);

  let playing = `${message.member.user.presence.game ? `${message.member.user.presence.game.name}` : "Nothing"}`

  if(playing.length > 30) {playing = Trim(playing,30)}

  ctx.font = '40px Comic Sans'
	ctx.fillStyle = '#ffffff';
  ctx.textAlign = "center";
	ctx.fillText(playing, 395, 390);

  
  ctx.font = '40px Comic Sans'
	ctx.fillStyle = '#ffffff';
  ctx.textAlign = "center";
	ctx.fillText(`${moment.utc(message.member.user.createdAt).format('YYYY/MM/DD')}`, 138, 173);

  ctx.font = '40px Comic Sans'
	ctx.fillStyle = '#ffffff';
  ctx.textAlign = "center";
	ctx.fillText(`${moment.utc(message.member.joinedAt).format('YYYY/MM/DD')}`, 138, 306);
 
	const avatar = await Canvas.loadImage(message.author.displayAvatarURL);
	ctx.drawImage(avatar,339, 9, 147, 150);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'ID.gif');

	await message.channel.send(attachment);
  }
   
  if(message.content.startsWith(prefix + "mute")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return
 let muteRole = message.guild.roles.find("name","mute")
  

 if(!muteRole) return message.channel.send("Please create an ``mute`` role")
  
 let user = message.mentions.users.first();
  
 if(!user) return message.channel.send("Please mention ``@someone``")
  
  
  
 let usernamelength = new String(user)
 
 let time = message.content.slice(prefix.length+5+usernamelength.length)
 
 if(!time) {

 if (message.guild.member(user).roles.has(muteRole.id)) return message.channel.send("This person already have ``mute`` role") 
 
 message.guild.member(user).addRole(muteRole.id)
 .then(member => message.channel.send(`\`\`${member.user.tag}\`\` The process has been successful. The silence has been added`))
 .catch(error => console.log(error))
 return;
 }

 if (message.guild.member(user).roles.has(muteRole.id)) return message.channel.send("This person already have ``mute`` role") 
  
  
 let timing = new String(time)
 
 let numbers = ["1","2","3","4","5","6","7","8","9"]
 let char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

 let testime = Ms(timing.slice(1))
 
 let seconds = parseInt(Math.floor(testime / 1000));
  
 if(seconds < 1) return message.channel.send("You can't complete this process Please write a valid time ")
  
 message.guild.member(user).addRole(muteRole.id)
 .then(member => message.channel.send(`\`\`${member.user.tag}\`\` The process has been successful. The silence has been added for \`\`${time}\`\``))
 .catch(error => console.log(error))
  
  
 setTimeout(() => {
 message.guild.member(user).removeRole(muteRole.id)
 },Ms(timing.slice(1)));


}  
  
if(message.content.startsWith(prefix + "unmute")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return
 let muteRole = message.guild.roles.find("name","mute")
  

 if(!muteRole) return message.channel.send("Please create an ``mute`` role")
  
 let user = message.mentions.users.first();
  
 if(!user) return message.channel.send("Please mention ``@someone``")

 if (!message.guild.member(user).roles.has(muteRole.id)) return message.channel.send("This person doesn't already have ``mute`` role") 
  
message.guild.member(user).removeRole(muteRole.id)
.then(member => message.channel.send(`\`\`${member.user.tag}\`\` The process has been successful. The silence has been removed`))
.catch(error => console.log(error))

}
});




client.on('message', message => { 
    if (message.content.startsWith(prefix + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('? Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 

    }
});




client.on('message', message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// +say
  if (command === "say") {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
          message.delete()
    message.channel.send(args.join(" "))
  }
  
 

if (command == "embed") {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `MANAGE_MESSAGES`' );
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.send(say);
    message.delete();
    
  }


});



client.on("message", message => {

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "serveravatar"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });


   client.on('message',function(message) {
  if (message.author.bot) return;
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info 
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });  



client.on('message', message => {
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing...";
}
if (z.bot) {
var w = 'BOT';
}else {
var w = 'MEMBER';
}
let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(`**INFO** ${z.username}`)
.addField('`Your Name`',`**<@` + `${z.id}` + `>**`, true)
.addField('`ID`', "**"+ `${z.id}` +"**",true)
.addField('`Status`','**'+y+'**' , true)
.addField('`Acount Type`',"**"+ w + "**",true)    
.addField('`Your Tag`',"**#" +  `${z.discriminator}**`,true)
.addField('`Your account created in`' ,year + "-"+ month +"-"+ day)    
.addField("`Entered the server in`", message.member.joinedAt.toLocaleString())    
.addField("`Last Message`", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ? **')

}
});



client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'سحب')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "اسحب [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك? `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("?")
 }}});



client.on('message', message => {
    if(message.content == prefix + 'top-servers') {
             if(!message.author.id === '434845976050794516') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server Member Count:',gmemb = g.members.size)
    .setColor('RANDOM')
    
          message.channel.send(serv);
    }) 
    }
    });

client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});


client.on('message', async message => {
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);
  if(message.content.startsWith(prefix + "invinfo")) {
    if(!args) return message.reply('**حدد اسم دعوة**');
    message.guild.fetchInvites().then(i => {
      let inv = i.get(args[0]);
      if(!inv) return message.reply(`**لم اقدر على ايجاد ${args}**`);
      var iNv = new Discord.RichEmbed()
      .setAuthor(message.author.username,message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .addField('# - صاحب الدعوة',inv.inviter,true)
      .addField('# - روم الدعوة',inv.channel,true)
      .addField('# - تاريخ انتهاء الدعوة',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
      .addField('# - تم انشاء الدعوة',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
      .addField('# - مدة الدعوة',moment(inv.maxAge).format('DD **ساعة** h **يوم**'),true)
      .addField('# - الاستخدامات',inv.uses || inv.maxUses,true)
      message.channel.send(iNv);
    });
  }
});



client.on("message", async message => {
            if(!message.channel.guild) return;
             if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});


client.on('message', message => {
if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)

                  message.channel.send({embed:zPeRms});

    }
});







client.on('message', message => {
  if (true) {
if (message.content === prefix + 'invite') {
      message.author.send(' رابط البوت |  https://discord.com/api/oauth2/authorize?client_id=704511043707207842&permissions=0&scope=bot ').catch(e => console.log(e.stack));

    }
   } 
  });







client.on('message', message => {
                            var prefix = "$";
                           if(!message.channel.guild) return;
                        if(message.content.startsWith(prefix + 'clear')) {
                        if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
                        if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
                        let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
                        let request = `Requested By ${message.author.username}`;
                        message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
                        msg.react('✅')
                        .then(() => msg.react('❌'))
                        .then(() =>msg.react('✅'))
                        
                        let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
                        let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
                        
                        let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
                        let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
                        reaction1.on("collect", r => {
                        message.channel.send(`Chat will delete`).then(m => m.delete(5000));
                        var msg;
                                msg = parseInt();
                        
                              message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
                              message.channel.send("", {embed: {
                                title: "`` Chat Deleted ``",
                                color: 0x06DF00,
                                footer: {
                        
                                }
                              }}).then(msg => {msg.delete(3000)});
                        
                        })
                        reaction2.on("collect", r => {
                        message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
                        msg.delete();
                        })
                        })
                        }
                        });





client.on('message', message => { //By |dominant 
    if (message.content.startsWith("$bot")) { //By |dominant 
    message.channel.send({ //By |dominant 
        embed: new Discord.RichEmbed() //By |dominant 
            .setAuthor(client.user.username,client.user.avatarURL) //By |dominant 
            .setThumbnail(client.user.avatarURL) //By |dominant 
            .setColor('RANDOM') //By |dominant 
            .setTitle('Info Bot. ./dominant , 5bz') //By |dominant 
            .addField('**My Ping**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true) //By |dominant 
            .addField('**RAM Usage**', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true) //By |dominant 
            .addField('**Servers**', [client.guilds.size], true) //By |dominant 
            .addField('**Channels**' , `[ ${client.channels.size} ]` , true) //By |dominant 
            .addField('**Users**' ,`[ ${client.users.size} ]` , true) //By |dominant 
            .addField('**My Name**' , `[ ${client.user.tag} ]` , true) //By |dominant 
            .addField('**My ID**' , `[ ${client.user.id} ]` , true) //By |dominant 
            .addField('**DiscordJS**' , `[ ${Discord.version} ]` , true) //By |dominant 
            .addField('**NodeJS**' , `[ ${process.version} ]` , true) //By |dominant 
            .addField('**Arch**' , `[ ${process.arch} ]` , true) //By |dominant 
            .addField('**Platform**' , `[ ${process.platform} ]` , true) //By |dominant 
                  .addField('**My Prefix**' , `[ ${prefix} ]` , true) //By |dominant 
                  .addField('**My Language**' , `[ Java Script + ]` , true) //By |dominant 
                  .setFooter(' ./dominant , 5bz') //By |dominant 
    }) //By |dominant 
} //By |dominant 
});






client.on('guildCreate', guild => {
   
  client.channels.get("714267892493058058")
const embed = new Discord.RichEmbed()
   .setAuthor(`بوتك دخل سيرفر جديد مبروك ✅`)
   .setDescription(`**
Server name: __${guild.name}__
Server id: __${guild.id}__
Server owner: __${guild.owner}__
Member Count: __${guild.memberCount}__
Servers Counter : __${client.guilds.size}__**`)
         .setColor("#f3ae10")
         .addField("New Server!")
         .setFooter('Bot /dominant , 5bz' , client.user.avatarURL)
           client.channels.get("714267892493058058").send({embed}); //ddd
}
 
);


client.on("message", message => {
if(message.content.startsWith(`${prefix}check`)){;

    let roleName = message.content.split(" ").slice(1).join(" ");
    //Filtering the guild members only keeping those with the role
    //Then mapping the filtered array to their usernames
    let membersWithRole = message.guild.members.filter(member => { 
        return member.roles.cache.find("name", roleName);
    }).map(member => {
        return member.user;
    })

    let embed = new Discord.RichEmbed({
        "title": `Users with the ${roleName} role:`,
        "description": membersWithRole.join("\n"),
        "color": 0xFFFF
    });

    return message.channel.send(`**Users with the** **[${roleName}]** **role**: \n `+membersWithRole.join(`\n`));
  }
});


  client.on('channelDelete', async (channel, member) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channel[channelremover.id]) {
    channel[channelremover.id] = {
    deleted : 0
     }
 }
 channel[channelremover.id].deleted += 1;
 if(channel[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر `);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channel[channelremover.id].deleted = 0;
  },Otime)
  });



 client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "channel-create"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channel[channelcreate.id]) {
    channel[channelcreate.id] = {
    created : 0
     }
 }
 channel[channelcreate.id].created += 1;
 if(channel[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channel[channelcreate.id].created = 0;
  },Otime)
  });




client.on('message', message => {
    if (message.content.startsWith("-bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});








///////////

client.on('message', message => {
 if(message.content === prefix + 'restart') {
      message.channel.send('**Restarting**').then((m) => m.delete(2500));
      console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
      console.log('Restarting....');    
        setTimeout(() => {  
       }, 3000);
      message.delete(2500);
 }
 });


 

client.on('message', message => {
         if(message.content === prefix + "lock") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **ليس لديك صلاحيات**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("**تم تقفيل الشات **")
                });
                  }
      if(message.content === prefix + "unlock") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**ليس لديك صلاحيات**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("**تم فتح الشات:white_check_mark:**")
                });
      }
         
});



client.on('message', message => { 
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`Probot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });


client.on('roleCreate', role => {
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
    var logChannel = role.guild.channels.find(c => c.name === 'channel-create-role');
    if(!logChannel) return;
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleCreate = new Discord.RichEmbed()
        .setTitle('[ROLE WAS CREATED]')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleCreate);
    })
});


client.on('roleDelete', role => {
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
    var logChannel = role.guild.channels.find(c => c.name === 'channel-delete-role');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleDelete = new Discord.RichEmbed()
        .setTitle('[ROLE WAS DELETED]')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleDelete);
    })
});






client.on('roleUpdate', (oldRole, newRole) => {
 
    if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldRole.guild.channels.find(c => c.name === 'channel-update-role');
    if(!logChannel) return;
 
    oldRole.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldRole.name !== newRole.name) {
            let roleUpdateName = new Discord.RichEmbed()
            .setTitle('[ROLE WAS EDITED]')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateName);
        }
        if(oldRole.hexColor !== newRole.hexColor) {
            if(oldRole.hexColor === '#000000') {
                var oldColor = '`Default`';
            }else {
                var oldColor = oldRole.hexColor;
            }
            if(newRole.hexColor === '#000000') {
                var newColor = '`Default`';
            }else {
                var newColor = newRole.hexColor;
            }
            let roleUpdateColor = new Discord.RichEmbed()
            .setTitle('[ROLE COLOR EDITED]')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateColor);
        }
    })
});




client.on('channelCreate', channel => {
 
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'اسم الروم');
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelCreate = new Discord.RichEmbed()
        .setTitle('**voice or text channel was created**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelCreate);
    })
});



client.on('channelDelete', channel => {
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'channel-delete');
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelDelete = new Discord.RichEmbed()
        .setTitle('**voice or text channel was deleted**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelDelete);
    })
});




client.on('channelUpdate', (oldChannel, newChannel) => {
    if(!oldChannel.guild) return;
 
    var logChannel = oldChannel.guild.channels.find(c => c.name === 'channel-update');
    if(!logChannel) return;
 
    if(oldChannel.type === 'text') {
        var channelType = 'Text';
    }else
    if(oldChannel.type === 'voice') {
        var channelType = 'Voice';
    }else
    if(oldChannel.type === 'category') {
        var channelType = 'Category';
    }
 
    oldChannel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldChannel.name !== newChannel.name) {
            let newName = new Discord.RichEmbed()
            .setTitle('**voice or text channel was edited**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newName);
        }
        if(oldChannel.topic !== newChannel.topic) {
            let newTopic = new Discord.RichEmbed()
            .setTitle('**voice or text channel was edited**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newTopic);
        }
    })
});
 
client.on("roleUpdate", (oldr , newr) => {
var role = "714280302918500433";
  const msh1 = oldr.guild.roles.get(role);
    if(!oldr.hasPermission("ADMINISTRATOR") && newr.hasPermission("ADMINISTRATOR")) {

      if(oldr.position < msh1.position || newr.position < msh1.position) { 
        newr.setPermissions(0, "صلاحيات زائدة.")   
         } 
    }
    if(!oldr.hasPermission("MOVE_MEMBERS") && newr.hasPermission("MOVE_MEMBERS")) {
      if(oldr.position < msh1.position || newr.position < msh1.position) {
        newr.setPermissions(0, "صلاحيات زائدة.")
      }
    }

    if(!oldr.hasPermission("BAN_MEMBERS") && newr.hasPermission("BAN_MEMBERS") ) {

      if(oldr.position < msh1.position || newr.position < msh1.position) { 
        newr.setPermissions(0, "صلاحيات زائدة.")
      } 
    }
    if(!oldr.hasPermission("MANAGE_ROLES") && newr.hasPermission("MANAGE_ROLES")) {

      if(oldr.position < msh1.position || newr.position < msh1.position) { 
        newr.setPermissions(0, "صلاحيات زائدة.")
      } 
    }
    if(!oldr.hasPermission("KICK_MEMBERS") && newr.hasPermission("KICK_MEMBERS") ) {

      if(oldr.position < msh1.position || newr.position < msh1.position) { 
        newr.setPermissions(0, "صلاحيات زائدة.")
      } 
    }
    if(!oldr.hasPermission("MANAGE_CHANNELS") && newr.hasPermission("MANAGE_CHANNELS")) {

      if(oldr.position < msh1.position || newr.position < msh1.position) { 
        newr.setPermissions(0, "صلاحيات زائدة.")
      } 
    }
    if(!oldr.hasPermission("MANAGE_GUILD") && newr.hasPermission("MANAGE_GUILD")) {

      if(oldr.position < msh1.position || newr.position < msh1.position) { 
        newr.setPermissions(0, "صلاحيات زائدة.")
      } 
    }
     
  });





const discord = require("discord.js");
var dis = {};
client.on('ready', async () => {
  let guild = client.guilds.get('593324630492839937');
 let fetch = await guild.fetchAuditLogs({type: "MEMBER_DISCONNECT",limit:50});
 let i = 1;
 fetch.entries.forEach(x => { 
  if(!dis[x.executor.id]) dis[x.executor.id] = {ex:x.executor.id,time:0};
 dis[x.executor.id] = {ex:x.executor.id,time:dis[x.executor.id].time + 1};
 console.log(x.executor.id)
 Object.values(dis).map(e => console.log(e.ex +'|' +e.time))
 })
})

client.on('voiceStateUpdate', async (o,n) => {
    
        let fetchedLogs = await n.guild.fetchAuditLogs({type: "MEMBER_DISCONNECT",limit:50});
        const log = fetchedLogs.entries.first();
        if(!dis[log.executor.id]) dis[log.executor.id] = {ex:log.executor.id,time:0};
        if(!log) {
            return;
        }
       let size = fetchedLogs.entries.filter(f => f.executor.id == log.executor.id).size;
       console.log(size)
       console.log(dis[log.executor.id].time)
         if(dis[log.executor.id].time < size) {
          dis[log.executor.id] = {ex:log.executor.id,time:dis[log.executor.id].time + 1};
        const { executor , target} = log;
                if(n.id == executor.id) return;
                if(n.id == dis[n.id].id && executor.id == dis[n.id].ex) return;
                client.channels.find('name', 'log-dis').send(new discord.RichEmbed()
            .setTitle("Member Disconnected")
            .addField("User: ", `<@${n.id}>`)
            .addField("By: ", `<@${executor.id}>`)
            .setColor("RED")
            .setFooter(n.guild.name, n.guild.iconURL)
            )
         }
        
});




client.on('voiceStateUpdate', async (o,n) => {
    if(o.voiceChannel !== null && n.voiceChannel == null) {
        let fetchedLogs = await n.guild.fetchAuditLogs({type: "MEMBER_DISCONNECT", limit: 2});
        const log = fetchedLogs.entries.first();
        if(!log) {
            return;
        }
        const { executor , target} = log;
                if(n.id == executor.id) return;
              client.channels.find('name', 'log-dis').send(new discord.RichEmbed()
            .setTitle("Member Disconnected")
            .addField("User: ", `<@${n.id}>`)
            .addField("By: ", `<@${executor.id}>`)
            .setColor("RED")
            .setFooter(n.guild.name, n.guild.iconURL)
            )
        }
});



client.on('message', async message => {
if(message.content.startsWith(prefix + "Owner")) {
  let i = client.users.size;
  if(message.author.id !== '569861608344518660') return message.channel.send('❎ » انت لست صاحب البوت');
  message.channel.send("**انت صاحب البوت تم الاثبات ✅**")
}
})



const bbg =["https://i.pinimg.com/236x/22/75/5f/22755f39c8f4f712cfdb237a4b8f0e7a.jpg", 
            "https://i.pinimg.com/564x/b6/d9/94/b6d994a07f9dd19a98b52994b5fcf7d7.jpg", 
            "https://i.pinimg.com/236x/2d/7a/92/2d7a92241570589639f5922a5021a38e.jpg", 
            "https://i.pinimg.com/236x/2a/f7/f3/2af7f307ccfda22028e261657f07ca7b.jpg", 
            "https://i.pinimg.com/236x/1e/08/fc/1e08fca2fc4df9f5cbca156d61b6ecd3.jpg",  
            "https://i.pinimg.com/236x/f5/f8/38/f5f8380ef692c55e7b97cf0f64d07556.jpg", 
           ]; //MA$TER_killer!!

  client.on("message",async msg => {  //MA$TER_killer!!
if(msg.content.startsWith(prefix + "serverss")){  //MA$TER_killer!!
const Canvas = require("canvas");        //MA$TER_killer!!
let mentions = msg.mentions.members.first()  //MA$TER_killer!!
if(!mentions) {  //MA$TER_killer!!
let bbs = bbg[Math.floor(Math.random() * bbg.length)]
let serverid = msg.guild.id  //MA$TER_killer!!
let serverna = msg.guild.name  //MA$TER_killer!! 
let owner = msg.guild.owner   //MA$TER_killer!!
let ownerna = owner.user.username //MA$TER_killer!!
let ownerta = owner.user.discriminator//MA$TER_killer!!
let channels = msg.guild.channels.size   //MA$TER_killer!! 
let voice = msg.guild.channels.filter(f => f.type === "voice").size  //MA$TER_killer!! 
let text = msg.guild.channels.filter(f => f.type === "text").size  //MA$TER_killer!! 
let createdo = moment(msg.guild.createdAt).format(`D/M/YYYY h:mm`)   //MA$TER_killer!! 
let createdf = moment(msg.guild.createdAt).locale("EN-eg").fromNow()   //MA$TER_killer!! 
let members = msg.guild.members.size //MA$TER_killer!!
let online = msg.guild.members.filter(c => c.presence.status !== "offline").size //MA$TER_killer!!
let region = msg.guild.region   //MA$TER_killer!! 
let verificationl = msg.guild.verificationLevel   //MA$TER_killer!! 
let roles = msg.guild.roles.size   //MA$TER_killer!!
let by = msg.author.username  //MA$TER_killer!!
let townerna = "owner:"  //MA$TER_killer!!
let tchannels = "channels:"  //
let tvoice = "voice:"  //
let ttext = "text:"  //
let tcreatedo = "created at:"   //
let tregion = "region:"   //
let tverificationl = "verification level:"   //
let troles = "roles:"   //MA$TER_killer!!
let tmembers = "members:"  //
let tonline = "online:" //MA$TER_killer!!
let hm = "Requested by" //MA$TER_killer!!
let servericon = msg.guild.iconURL   //MA$TER_killer!!
let canvas = Canvas.createCanvas(800 , 500) //MA$TER_killer!!
let ctx = canvas.getContext('2d'); //MA$TER_killer!!
const background = await Canvas.loadImage(`${bbs}`);//MA$TER_killer!!
const bg = await Canvas.loadImage("https://cdn.discordapp.com/attachments/637449457658494999/642490023954087946/hmmmm.PNG");
const icon = await Canvas.loadImage(`${servericon}`); //MA$TER_killer!!
const avatar = await Canvas.loadImage(`${msg.author.avatarURL}`);
ctx.drawImage(background, 0, 0, canvas.width, canvas.height); //MA$TER_killer!!
ctx.drawImage(bg, 0, 0, canvas.width, canvas.height); //MA$TER_killer!!
ctx.font = '25px Elephant';//MA$TER_killer!!
ctx.fontSize = '30px';//MA$TER_killer!!
ctx.textAlign = "center";//MA$TER_killer!!
ctx.fillStyle = "#fffff"; //MA$TER_killer!!
ctx.fillText(serverna, canvas.width / 2, canvas.height / 2); //MA$TER_killer!!
ctx.font = '25px Elephant';//MA$TER_killer!!
ctx.fillStyle = "#ffffff"; //MA$TER_killer!!
ctx.fillText(ownerna+"#"+ownerta, canvas.width / 2, canvas.height / 1.8); //MA$TER_killer!!
ctx.fillStyle = "#ffffff"; //MA$TER_killer!!
ctx.fillText(channels, canvas.width / 4, canvas.height / 1.4); //MA$TER_killer!!
ctx.fillText(voice, canvas.width / 5.6, canvas.height / 1.3); //MA$TER_killer!!
ctx.fillText(text, canvas.width / 6.7, canvas.height / 1.2); //MA$TER_killer!!
ctx.fillStyle = "#ffffff"; //MA$TER_killer!!
ctx.fillText(createdo, canvas.width / 5, canvas.height / 3.1); //MA$TER_killer!!
ctx.fillText(createdf, canvas.width / 5, canvas.height / 2.75); //MA$TER_killer!!
ctx.fillStyle = "#ffffff"; //MA$TER_killer!!
ctx.fillText(region, canvas.width / 1.2, canvas.height / 2.9); //MA$TER_killer!!
ctx.fillText(verificationl, canvas.width / 2.5, canvas.height / 1.1); //MA$TER_killer!!
ctx.fillText(roles, canvas.width / 1.2, canvas.height / 2.5); //MA$TER_killer!!
ctx.font = '30px Elephant';//MA$TER_killer!!
ctx.fillStyle = "#ffffff"; //MA$TER_killer!!
ctx.fillText(townerna, canvas.width / 2.8, canvas.height / 1.8); //MA$TER_killer!!
ctx.fillStyle = "#ffffff"; //MA$TER_killer!!
ctx.font = '30px Elephant';//MA$TER_killer!!
ctx.fillText(tchannels, canvas.width / 7.2, canvas.height / 1.4); //MA$TER_killer!!
ctx.fillText(tvoice, canvas.width / 9.6, canvas.height / 1.3); //MA$TER_killer!!
ctx.fillText(ttext, canvas.width / 10.3, canvas.height / 1.2); //MA$TER_killer!!
ctx.fillStyle = "#ffffff"; //MA$TER_killer!!
ctx.fillText(tcreatedo, canvas.width / 5, canvas.height / 3.6); //MA$TER_killer!!
ctx.fillStyle = "#ffffff"; //MA$TER_killer!!
ctx.font = '30px Elephant';//MA$TER_killer!!
ctx.fillText(tregion, canvas.width / 1.4, canvas.height / 2.9); //MA$TER_killer!!
ctx.fillText(tverificationl, canvas.width / 4.6, canvas.height / 1.1); //MA$TER_killer!!
ctx.font = '30px Elephant';//MA$TER_killer!!
ctx.fillText(troles, canvas.width / 1.4, canvas.height / 2.5); //MA$TER_killer!!
ctx.font = '25px Elephant';//MA$TER_killer!!
//ctx.fillText(hm, canvas.width / 4.3, canvas.height / 1.1); //MA$TER_killer!!
ctx.font = '30px Elephant';//MA$TER_killer!!
ctx.fillStyle = "#ffffff"; //MA$TER_killer!!
ctx.fillText(tmembers, canvas.width / 7.5, canvas.height / 1.5); //MA$TER_killer!!
ctx.fillStyle = "#ffffff"; //MA$TER_killer!!
ctx.fillText(tonline, canvas.width / 8.9, canvas.height / 1.6); //MA$TER_killer!!
ctx.fillStyle = "#ffffff"; //MA$TER_killer!!
ctx.font = '25px Elephant';//MA$TER_killer!!
ctx.fillText(members, canvas.width / 4, canvas.height / 1.5); //MA$TER_killer!!
ctx.fillStyle = "#fffff"; //MA$TER_killer!!
ctx.fillText(online, canvas.width / 5.5, canvas.height / 1.6); //MA$TER_killer!!
ctx.fillStyle = "#ffffff"; //MA$TER_killer!!
ctx.fillText(by, canvas.width / 1.99, canvas.height / 1.1); //MA$TER_killer!!
//ctx.drawImage(avatar, 50, 410, 50, 50); //MA$TER_killer!!
ctx.strokeStyle = '#74037b'; //MA$TER_killer!!
ctx.strokeRect(0, 0, canvas.width, canvas.height); //MA$TER_killer!!
ctx.beginPath(); //MA$TER_killer!!
ctx.arc(394, 125, 85, 0, Math.PI * 2, true); //MA$TER_killer!!
ctx.closePath(); //MA$TER_killer!!
ctx.clip(); //MA$TER_killer!!
ctx.drawImage(icon, 309, 40, 170, 170); //MA$TER_killer!!
msg.channel.sendFile(canvas.toBuffer()) //MA$TER_killer!!
}//MA$TER_killer!!
}//MA$TER_killer!!
});//MA$TER_killer!!

client.on("message", async message => {
  let args = message.content.split(" ");
      const ms = new Date().getTime() - message.member.joinedAt.getTime();
  var seconds = parseInt((ms/1000)%60)
    , minutes = parseInt((ms/(1000*60))%60)
    , hours = parseInt((ms/(1000*60*60))%24);
  const now = new Date(); 
  const joinedAt = ms / 1000 / 60 / 60 / 24; 
  if (args[0] === prefix + "since") {
    let embed = new Discord.RichEmbed()
    .setTitle(message.author.username)
    .addField("> Since:", `⏲️ ${joinedAt.toFixed(0)} days , ${hours} Hours , ${minutes} Minutes , ${seconds} seconds ⏲️`)
    .setTimestamp()
    .setThumbnail(message.author.avatarURL);
message.channel.send(embed)
  }
});





client.on("guildMemberAdd", async member => {
	     let moment = require("moment"),  
           moment2 = require("moment-duration-format"), 
		         date = moment.duration(new Date() - member.user.createdAt).format("d");
          
		  if(date < 10) {
			  member.ban(" الحساب اقل من 10 أيام ")
		  }
});


client.on('message', message => {
			var mintionchannel = message.content.split(' ').slice(1);
      if(message.content.startsWith(prefix + 'channel')) {
       
         if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
          message.channel.send("You Don't Have A Permissions `MANAGE_CHANNELS` ");
        } else {
			     var room1 = message.guild.channels.find('name', `${mintionchannel}`);
          if(!room1) {
           message.channel.send( "**Usage :** ```" + "  " + `${prefix}` + 'channel'+ " " + 'ChannelName```' );
            } else {
             
             if (room1.type = "text"){
              var filtertitle = "Channel Last Message : ";
              var filtermessage =  room1.lastMessage; 
             }if (room1.type = "voice"){
              var filtertitle = "Channel Timestamp";
              var filtermessage = room1.createdTimestamp;
             }
              let embed = new Discord.RichEmbed()
              .addField(' Chanel Name : ', room1.name, true)
              .addField(' Channel ID : ',room1.id, true)
              .addField(' Channel CreateAt  : ', room1.createdAt,true)
              .addField(`${filtertitle}`, filtermessage , true)
              .addField(' Channel Type : ', room1.type, true)
               message.channel.sendEmbed(embed);
		    	}
            
          }
     }
    });



/*const fs = require("fs")
  
let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));//require antihack.json file
client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('ADMINSTRATOR')) return message.channel.send('**Sorry But You Dont Have Permission** `ADMINSTRATOR`' );
antibots[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**✅ The AntiBots Is ON !**`)
         fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
         });
            });
          }

        })
        


client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
antibots[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**⛔ The AntiBots Is OFF !**`)
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }

        })

client.on("guildMemberAdd", member => {
  if(!antibots[member.guild.id]) antibots[member.guild.id] = {
onoff: 'Off'
}
  if(antibots[member.guild.id].onoff === 'Off') return;
if(member.user.bot) return member.kick()
})

fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
if (err) console.error(err)
.catch(err => {
console.error(err);
});

})*/







/*const fs = require("fs");
const blacklist = JSON.parse(fs.readFileSync('./blacklist.json', 'utf8'));
client.on('message',message=>{
if(message.author.bot || !message.guild)return
if(!message.member) return
if(!message.member.hasPermission('MANAGE_GUILD'))return;
if(message.content.startsWith(prefix+'blacklist add')){
let user = message.mentions.members.first() || message.guild.members.get(message.content.split(" ")[2])
if(!user)return message.channel.send('**Please Mention the User Or Type His ID :x:**')
if(user.id == message.author.id || user.id == client.user.id) return message.channel.send(`**You Can't Add this Member!**`)
if(blacklist[message.guild.id+user.id]) return message.channel.send('**This Member Allready Blacklisted!**')
blacklist[message.guild.id+user.id] = {};
message.channel.send(`**Added ${user} to The Blacklist ✅**`)
}if(message.content.startsWith(prefix+'blacklist remove')){
let user =  message.content.split(" ")[2]
if(!user)return message.channel.send('**Please Type His ID :x:**')
if(!blacklist[message.guild.id+user]) 
  return message.channel.send('**I Cant Find This member In The Blacklist!\nplease Check the Member ID')
delete blacklist[message.guild.id+user];message.guild.unban(user).catch(err=>{
  return message.channel.send(`:x: I couldn't unban that user.`)
})
message.channel.send(`**Removed <@${user}> from The Blacklist ✅**`)}
if(message == prefix+'blacklist list'){
const blacklistss = [];
client.users.forEach(m => {
if(!blacklist[message.guild.id + m.id]) return
blacklistss.push(`<@${m.id}>`);
});let MS = blacklistss.join("n")
message.channel.send(new Discord.MessageEmbed().setAuthor(message.guild.name,message.guild.iconURL)
.setTitle('**⛔ This This The Blacklist:**')
.setDescription(`${MS}`).setColor('RED').setFooter(message.author.username,message.author.avatarURL)
)
};
fs.writeFile("./blacklist.json", JSON.stringify(blacklist, null, 2), function (e) {if (e) throw e;})
fs.writeFile("./blacklist.json", JSON.stringify(blacklist, null, 2), function (e) {if (e) throw e;})})
*/

client.on("message", message =>{
  if(message.content.startsWith(prefix + 'topservers')){ // الامر (topserver)
    let count = message.content.split(" ")[1];
    const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
    if(!count) count = 15;
    if(isNaN(count)) count = 15;
    if(count <= 0) count = 15;
    if(count > top.length) count = top.length;
    let embed = new Discord.RichEmbed();
    for(let i = 0; i < count; i++){
    embed.addField(`**${top[i].name}** : ${top[i].memberCount}`," ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎");
    }
    embed.setTitle(`**Top ${count} Servers**`);
    embed.setThumbnail(message.author.displayAvatarURL);
    embed.setTimestamp();
    embed.setFooter(client.user.username,client.user.displayAvatarURL);
    message.channel.send(embed);
  }});



 client.on('message', message => {
    if (message.content.includes('discord.com')){
                        if(!message.channel.guild) return message.reply ('')
                    if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
       message.channel.send('ban <@' + message.author.id + '>')
       message.delete() 
       } 
    } 
          if (message.content.startsWith("ban")) {
             if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply();
             var member= message.mentions.members.first();
             member.ban().then((member) => {
                 message.channel.sendMessage("", {embed: {
                 author: {  
                 },  
                 title: 'بسبب النشر ' + member.displayName + ' تم حظر', 
                 color: 490101,
                 }
               });
           } 
         ) 
       }  
   });  















client.on("message", msg =>{	
	
if(msg.content.startsWith(`${prefix}topservers`)){ // Hamo , PixelBot Team
  let noTop = msg.content.split(" ")[1];
  const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse() // Hamo , PixelBot Team
  if(!noTop) noTop = 10; // Hamo , PixelBot Team
  if(isNaN(noTop)) noTop = 10;
  if(noTop <= 0) noTop = 10; // Hamo , PixelBot Team
  if(noTop > top.length) noTop = top.length;
  let serveremmbed = new Discord.RichEmbed(); // Hamo , PixelBot Team
  for(let i = 0; i < noTop; i++){ // Hamo , PixelBot Team
  serveremmbed.addField(`\n **⇏ ${top[i].name}** \n Members » ${top[i].memberCount}`," ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎");
  } // Hamo , PixelBot Team
  serveremmbed.setTitle(`\n **Top ${noTop} Servers** \n`); // Hamo , PixelBot Team
  serveremmbed.setThumbnail(msg.author.displayAvatarURL);
  serveremmbed.setTimestamp(); // Hamo , PixelBot Team
  serveremmbed.setFooter(client.user.username,client.user.displayAvatarURL);
  msg.channel.send(serveremmbed);
}}); // Hamo , PixelBot Team



client.on("message", async (message) => {
  if (!message.guild || message.author.bot) return;
  let args = message.content.split(" ");
  let prefix = "!!";
  if (args[0] == `${prefix}nickall`) {
    if (!message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.me.hasPermission("MANAGE_NICKNAMES")) return;
    if (!args[1]) return message.reply("Type the nickname ( [name] = member username ).");
    let members = message.guild.members.filter(m => m.manageable);
    message.channel.send(`Changing nickname for ${members.size} members.`);
    members.forEach((m, i) => {
      setTimeout(() => {
        m.setNickname(args.slice(1).join(" ").replace("[name]", m.user.username)).catch(e => {
          message.channel.send(`Could not change nickname for **${m.user.tag}**.`);
        });
      }, (2000 * i));
    });
  }
});


/*client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('اي دي الروم الصوتي');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online: [ ${currentSize} ]`);
  if (currentSize !== size) channel.setName(`Voice Online: [ ${currentSize} ]`);
});*/
client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == '$color'){
           const embedd = new Discord.RichEmbed()
     .setFooter(''+message.author.username, message.author.avatarURL)
   .setDescription('**هذا الرقم لا يوجد له لون**')
   .setColor(`RANDOM`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter(''+message.author.username, message.author.avatarURL)
   .setDescription(`**تم تغيير اللون بنجاح** ✅ `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});







  
