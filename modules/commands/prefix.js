module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Gọi bot",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

const axios = require('axios');
const request = require('request');
const fs = require("fs");
module.exports.run = async({api,event,args}) => {
  const { threadID, messageID, senderID, body } = event;
const moment = require("moment-timezone");
 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
	const res = await axios.get(`https://docs-api.jrtxtracy.repl.co/saying/hearing?apikey=JRTvip_8675561608`);
var thinh = res.data.data;
  const res1 = await axios.get(`https://docs-api.jrtxtracy.repl.co/images/wallpaper?apikey=JRTvip_8675561608`);
  var img = res1.data.url;
	var callback = () => api.sendMessage({body:`◆━━━◆『 JRTxTracy 』◆━━━◆\n𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${gion}\n━━━━━━━━━━━━━━━━\n𝐂𝐚̂𝐮 𝐓𝐡𝐢́𝐧𝐡:\n「 ${thinh} 」`,attachment: fs.createReadStream(__dirname + "/cache/333.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/333.png"), event.messageID);	
      return request(encodeURI(`${img}`)).pipe(fs.createWriteStream(__dirname+'/cache/333.png')).on('close',() => callback());
   };