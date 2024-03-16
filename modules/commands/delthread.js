module.exports.config = {
	name: "delthread",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "SINGU-💌💌",
	description: "Gửi tin nhắn tới các nhóm!",
	commandCategory: "Nhóm",
	usages: "sendnoti [Text]",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "Đoạn văn bản bạn muốn gửi tới mọi người",
			type: 'Văn bản',
			example: 'Hello Em'
		}
	]
};

module.exports.run = async ({ api, event, args }) => {
	return api.getThreadList(100, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.deleteThread(item.threadID) : '');
		api.sendMessage(' Đã xoá tin nhắn của tất cả nhóm.', event.threadID);
	});
}