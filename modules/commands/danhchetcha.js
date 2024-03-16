const fs = require("fs");
module.exports.config = {
name: "Đánh chết cha",
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
	if (event.body.indexOf("đánh chết cha")==0 || (event.body.indexOf("đánh chết mẹ")==0)) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/cache/danhchetcha.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}