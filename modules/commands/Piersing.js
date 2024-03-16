module.exports.config = {
	name: "piersing",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "Random ảnh gì đó :))",
	commandCategory: "hình ảnh",
	usages: "piersing",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	return request('https://api.nekos.dev/api/v3/images/nsfw/img/piersing_lewd').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/piersing_lewd.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/piersing_lewd.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/piersing_lewd.${ext}`)).on("close", callback);
			})
}