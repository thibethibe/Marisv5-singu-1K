const fs = require("fs");
module.exports.config = {
    name: "mrmsc",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "Mrmsc",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Mrmsc")==0 || (event.body.indexOf("mrmsc")==0)) {
		var msg = {
				body: "Muộn Rồi Mà Sao Còn-Sếp",
				attachment: fs.createReadStream(__dirname + `/noprefix/bbbb.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}