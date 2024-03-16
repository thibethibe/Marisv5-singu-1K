const fs = require("fs");
module.exports.config = {
	name: "asr",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "SINGU-💌💌", 
	description: "no prefix",
	commandCategory: "KhÃ´ng cáº§n dáº¥u lá»‡nh",
	usages: "Anh Sai Rá»“i",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("asr")==0 || (event.body.indexOf("Asr")==0)) {
		var msg = {
				body: "Anh Sai Rá»“i ðŸ˜” Xin lá»—i Ä‘Æ°á»£c chÆ°a ?",
				attachment: fs.createReadStream(__dirname + `/noprefix/asr.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}