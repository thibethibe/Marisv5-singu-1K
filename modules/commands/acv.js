const fs = require("fs");
module.exports.config = {
	name: "acv",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "SINGU-💌💌", 
	description: "no prefix",
	commandCategory: "KhÃ´ng cáº§n dáº¥u lá»‡nh",
	usages: "Anh Ä‘Ã£ tá»«ng cá»‘ gáº¯ng",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("acv")==0 || (event.body.indexOf("Acv")==0)) {
		var msg = {
				body: "Anh Ä‘Ã£ tá»«ng cá»‘ gáº¯ng vun Ä‘áº¯p cho tÃ¬nh yÃªu chÃºng mÃ¬nh ðŸ˜”",
				attachment: fs.createReadStream(__dirname + `/noprefix/acv.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}