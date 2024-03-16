const fs = require("fs");
module.exports.config = {
name: "lthm",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "lthm",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lthm")==0 || (event.body.indexOf("Lthm")==0)) {
		var msg = {
				body: "Love To Hate Me",
				attachment: fs.createReadStream(__dirname + `/noprefix/yt1s.com - BLACKPINK Love To Hate Me Lyrics Color Coded Lyrics.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}