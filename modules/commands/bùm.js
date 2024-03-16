const fs = require("fs");
module.exports.config = {
	name: "bùm",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "SINGU-💌💌", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Bắn bỏ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bùm")==0 || (event.body.indexOf("Bùm")==0)) {
		var msg = {
				body: "Chiu Chiu ! Trúng tim pạn chưa 😉😋",
				attachment: fs.createReadStream(__dirname + `/noprefix/bắn.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}