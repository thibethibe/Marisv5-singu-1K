const fs = require("fs");
module.exports.config = {
name: "Xách balo",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "Đạo lý",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("xách ba lô và đi")==0 || (event.body.indexOf("xách ba lô")==0)) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/cache/xachbalo.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}