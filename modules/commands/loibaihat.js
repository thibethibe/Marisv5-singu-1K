module.exports.config = {
	name: "loibaihat",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "Lời bài hát from nhaccuatui",
	commandCategory: "Phương tiện",
	usages: "loibaihat [tên bài hát]",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
  const axios = require('axios');
let timkiem = args.join(" ");
timkiem = encodeURIComponent(timkiem);
const res = await axios.get(`https://jrt-api.jrtxtracy.repl.co/lyrics?q=${timkiem}`);
if(res.data.error) return api.sendMessage("Lỗi khi lấy bài hát", event.threadID, event.messageID);
var lyrics = res.data.lyrics;
var name = res.data.name;
var singer = res.data.singer;
return api.sendMessage(`[⚜️] Tên bài hát: ${name}\n[⚜️] Tên ca sĩ: ${singer}\n≻───── •⚜️• ─────≺\n[⚜️] Lời bài hát:\n${lyrics} `, event.threadID, event.messageID);

	}