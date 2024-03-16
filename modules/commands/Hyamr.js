const fs = require("fs");
module.exports.config = {
name: "hyamr",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "hyamr",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hyamr")==0 || (event.body.indexOf("Hyamr")==0)) {
		var msg = {
				body: "Họ Yêu Ai Mất Rồi",
				attachment: fs.createReadStream(__dirname + `/noprefix/y2mate.com - VẺ BỀ NGOÀI QUAN TRỌNG ĐẾN THẾ SAO  HỌ YÊU AI MẤT RỒI REMIX l Nhạc Tâm Trạng Tik Tok.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}