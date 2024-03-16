const fs = require("fs");
module.exports.config = {
name: "haha",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "Cười Cc",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat haha",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Haha")==0 || (event.body.indexOf("haha")==0)) {
		var msg = {
				body: "hhahaha dui quá cười kẹt 😼😼",
				attachment: fs.createReadStream(__dirname + `/noprefix/tka.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

