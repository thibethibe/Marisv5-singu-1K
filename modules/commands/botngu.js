module.exports.config = {
name: "bot ngu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "bot ngu",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("bot ngu")==0 || (event.body.indexOf("bot ngu")==0)) {
		var msg = {
				body: "Đitmemay nói gì đấy?",
				attachment: fs.createReadStream(__dirname + `/noprefix/hihi.jpeg`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}