const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "true" || "postgresql://sibloe_user:n8IZGsGxhvSgMeExV8vHnJqLbmdfv4fv@dpg-cskuu43v2p9s73acaofg-a.oregon-postgres.render.com/sibloe"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "PoweredbyMcDonaldSibz" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263717087726";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_05_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgODEsXG4gICAgICAgIDczLFxuICAgICAgICA1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDU5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDM2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICA3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDc5LFxuICAgICAgICA2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDUwLFxuICAgICAgICA0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgzLFxuICAgICAgICA1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDg4LFxuICAgICAgICA0OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImIwZjZ3ajlaaU11YW1DdnFlMlBYOUJSZEZwVktFdmx3Vi9XSDNjZVFvRlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdRZ2hEUnFJVFdTU2tDZmhQa2FZZ1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDhlNmFjNjktNDg5MC00MTg0LThjYjEtZTAyZjc5ZTY3YmFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDE3MyxcbiAgICAgIDQ0LFxuICAgICAgOTEsXG4gICAgICA0OCxcbiAgICAgIDMzLFxuICAgICAgOTEsXG4gICAgICAxOTMsXG4gICAgICA4NyxcbiAgICAgIDQ1LFxuICAgICAgMTA2LFxuICAgICAgMTQzLFxuICAgICAgMjE2LFxuICAgICAgOTEsXG4gICAgICAxOTgsXG4gICAgICAxMTMsXG4gICAgICAxMTIsXG4gICAgICAyMjUsXG4gICAgICA2MSxcbiAgICAgIDE2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICAyMSxcbiAgICAgIDE0NSxcbiAgICAgIDIzLFxuICAgICAgMTI5LFxuICAgICAgMjI4LFxuICAgICAgMjQ0LFxuICAgICAgMyxcbiAgICAgIDExMSxcbiAgICAgIDE3NixcbiAgICAgIDE2OCxcbiAgICAgIDM5LFxuICAgICAgMTQzLFxuICAgICAgMTY4LFxuICAgICAgMTI4LFxuICAgICAgMTUzLFxuICAgICAgMTYyLFxuICAgICAgMjgsXG4gICAgICA1NSxcbiAgICAgIDE3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIUENORUVIV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE3MDg3NzI2OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTEwODQxMDIwNDMxNDo0NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQWGxxZjRERU0zYnA3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkF5Y0FWU1dic24wWC9YS2tQVDhuM3VLU1NodHVEVktHb3A4M3VjRS9Ralk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieDRKTU9pWDBEeDdyRVJ2QnEwN0xNRzg0UVljeXIrVlBVdmdoUmlzd01uSThYRzdSK3pMdEU5dFVyd3FRY3E4Vk9BYUhwQzdVRXlJeGo3QTFQUlRRQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVCszUjdDMFhZRERuWG13RWxLdlNteTM0VmU1WWxvdDFNMUR3SFBFTzFON0MvMHY0aTh0Y1RmQmJkREM2emdFMzk0N2EzU2gydGlhNWt2R2RMeEY4Z2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3MDg3NzI2OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA4MDExMDVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Sibloe-XMD",
  ownername:process.env.OWNER_NAME|| "Sibloe",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
