const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="anu733689@gmail.com"
global.location="India,Kerala."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Rozarioxero/ROZARIO-ANSHIF-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©  ᴀɴsʜɪғ xᴇʀ💐💖" 


global.devs = "916282524515" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "916282524515";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "916282524515";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,916282524515";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,916282524515";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "916282524515,916282524515";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_09_10_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY1LFxuICAgICAgICA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjExLFxuICAgICAgICA2MixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzLFxuICAgICAgICA3MixcbiAgICAgICAgODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEwLFxuICAgICAgICA3MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg5LFxuICAgICAgICA3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTczLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc4LFxuICAgICAgICA2MixcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDkwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg4LFxuICAgICAgICA0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5LFxuICAgICAgICAzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDksXG4gICAgICAgIDMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDYwLFxuICAgICAgICA3NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDk5LFxuICAgICAgICA2NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImFCa0ZsRlNPeGc5cWg1TnZLcTA2dms3WTdaOHB6anVVVnh1NlpuYkFyZzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhVb24zYTh6UlJ1SWJDTTZnR2RJc3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzEwYjMxOWEtYWMzZS00YzNhLWEyNTgtOTE2NzJlYzQ0MGNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgMjI1LFxuICAgICAgMTIxLFxuICAgICAgMTM4LFxuICAgICAgMjExLFxuICAgICAgNzAsXG4gICAgICA2NSxcbiAgICAgIDE3NixcbiAgICAgIDE1MyxcbiAgICAgIDE2NyxcbiAgICAgIDY1LFxuICAgICAgMjIsXG4gICAgICAxODUsXG4gICAgICAyMDYsXG4gICAgICAxMjAsXG4gICAgICA5MixcbiAgICAgIDk5LFxuICAgICAgMTU3LFxuICAgICAgNzcsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICA4MyxcbiAgICAgIDU1LFxuICAgICAgMjcsXG4gICAgICA1NCxcbiAgICAgIDEwMixcbiAgICAgIDIzMixcbiAgICAgIDc5LFxuICAgICAgNCxcbiAgICAgIDE1MCxcbiAgICAgIDE0LFxuICAgICAgMjM0LFxuICAgICAgMTU5LFxuICAgICAgMTY0LFxuICAgICAgMTIxLFxuICAgICAgMTcwLFxuICAgICAgMjI0LFxuICAgICAgNTAsXG4gICAgICA1NCxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2RTVZTko5SlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE2MjgyNTI0NTE1OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTA1Njk4NTYxNzYxNjE6MzVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQU5TSElGIFhFUlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ052UHdkUUZFTENMaUxrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNW9TamxBa3R1WitVa2xQNWx2bzRxUlc4OTlrM0JaMVJBSTVMSVFhZ1VFaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVOHY1OVlNa2xTd29jNnhpMFJRYjZRd2pya3RCdlg4NUt2anNMbzdCZ3k0ZDkzS3kvTVowYlFzQnlCcW95YWovOUJyT2IwdDJRT1dqOW9QZm16VGdDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6QmdMK2xoREsvWG9VMkdPNFUyNFdGeDJLNFJrMmVOTThYYlhlNWtMSXNPOGU0dk5zVVg2N1FMaFNBZCtuNlk3eHlhVnNVQUZjOUozYTB2TVJFa0tEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTYyODI1MjQ1MTU6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAyODI5MzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFZFBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVkUC5qc29uIjogIntcImtleURhdGFcIjpcIkNEWlZhcW56eUx6YzdSV1FYL0Q3SEhqUUhVd2QzMHYyNDU0cVVjenFnN1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUxOTQxMzIwOCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "ROZARIO💖",
  packname: process.env.PACK_NAME || " ᴀɴsʜɪғ xᴇʀ",
  botname : process.env.BOT_NAME  || " ᴀɴsʜɪғ xᴇʀ",
  ownername:process.env.OWNER_NAME|| " ᴀɴsʜɪғ xᴇʀ",


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
