const fs = require("fs");
module.exports.config = {
	name: "còn cái nịt",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "SINGU-💌💌", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "còn cái nịt",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("còn cái nịt")==0 || (event.body.indexOf("Còn cái nịt")==0)) {
		var msg = {
				body: "Ôi còn cái nịt. Còn đúng cái nịt",
				attachment: fs.createReadStream(__dirname + `/noprefix/concainit.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}