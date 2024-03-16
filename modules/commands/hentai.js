module.exports.config = {
	name: "hentai",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "Random ảnh hentaiz",
	commandCategory: "NSFW",
	usages: "hentai",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
		axios.get('https://docs-api.jrtxtracy.repl.co/nsfw/butter?apikey=JRTvip_8675561608').then(res => {
		let callback = function () {
					api.sendMessage({
						body : ``,
						attachment: fs.createReadStream(__dirname + '/cache/gaidep.jpg')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/gaidep.jpg'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/gaidep.jpg')).on("close", callback);
			})
}