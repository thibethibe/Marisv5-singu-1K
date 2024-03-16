module.exports.config = {
	name: "infomp4",	version: "1.0.0", 
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "", 
	commandCategory: "test",
	usages: "",
	cooldowns: 5, 
	dependencies: '',
};

module.exports.run = async function({ api, event, args }) {
  
    var content = args.join(" ");
    const axios = require("axios");
    
var data = (axios.get(`https://mp3.zing.vn/xhr/recommend?type=audio&id=ZO0AFICD`)).data;
		
api.sendMessage(data.msg, event.threadID, event.messageID)
 }