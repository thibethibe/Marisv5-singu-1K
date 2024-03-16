const fs = require("fs");
module.exports.config = {
	name: "cua gái",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "SINGU-💌💌", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "cua gái",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("cua gái")==0 || (event.body.indexOf("Cua gái")==0)) {
		var msg = {
				body: "gái con cặc, bố mẹ thì còng lưng nuôi ăn học, Mày lại ở đây yêu với chả đương, gái với chả gú",
				attachment: fs.createReadStream(__dirname + `/noprefix/gaigu.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}