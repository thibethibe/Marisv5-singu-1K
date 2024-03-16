const fs = require("fs");
module.exports.config = {
name: "Wowy",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "wowy",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("wowy")==0 || (event.body.indexOf("Wowy")==0)) {
		var msg = {
				body: " BROTHER ",
				attachment: fs.createReadStream(__dirname + `/noprefix/wowy.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}