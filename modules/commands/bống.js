module.exports.config = {
	name: "bống",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "Random ảnh gái xinh nhất Việt Nam :))",
	commandCategory: "hình ảnh",
	usages: "bống",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://lebong.ocvat2810.repl.co/').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/bống.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/bống.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/bống.${ext}`)).on("close", callback);
			})
}