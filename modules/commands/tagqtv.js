module.exports.config = {
	name: "tagqtv",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "tag qtv nhóm bạn",
	commandCategory: "THÀNH VIÊN",
	usages: ""
};

module.exports.languages = {
	"vi": {
	},
	"en": {
	}
};

module.exports. run = async function ({ api, event }) {
	const { adminIDs, userInfo } = await api.getThreadInfo(event.threadID);
	const mentions = [];
	let msg = "";
	for (const user of adminIDs) {
		const name = userInfo.find(item => item.id == user.id).name;
		mentions.push({ tag: name, id: user });
		msg += `${name}\n`;
	}
	return api.sendMessage({ body: `${msg}`, mentions}, event.threadID, event.messageID);
};