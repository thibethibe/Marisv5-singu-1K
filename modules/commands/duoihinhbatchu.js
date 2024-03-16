module.exports.config = {
	name: "duoihinhbatchu",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "trò chơi 1 người vẽ những nguời còn lại đoán",
	commandCategory: "Game",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args, Threads }) {
	try {
		var listUserID = (await Threads.getInfo(event.threadID)).participantIDs;
		const botID = api.getCurrentUserID();
		listUserID = listUserID.filter(ID => ID != botID && ID != event.senderID);
		var body = (args.length != 0) ? args.join(" ") : "Link tải game:\n- Android: https://play.google.com/store/apps/details?id=io.gartic.Gartic\n- Link IOS: https://apps.apple.com/us/app/gartic-io/id1270393677\n----------------------\nHoặc mọi người có thể chơi online trên máy tính: https://gartic.io/\nLink phòng: https://gartic.io/077dTt0i", mentions = [], index = 0;

		return api.sendMessage({ body, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
}