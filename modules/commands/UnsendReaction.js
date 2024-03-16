const fs = require('fs');
module.exports.config = {
	name: "unsendReaction", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "1.0.0", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "SINGU-💌💌", // Công nhận module sở hữu là ai
	description: "cũng là unsend nhưng bằng reaction", // Thông tin chi tiết về lệnh
	commandCategory: "Dành cho người dùng", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "[on/off]", // Cách sử dụng lệnh
	cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
};

module.exports.run = async({ api, event, args }) => {
    const { threadID, messageID } = event;
    let path = __dirname + "/cache/unsendReaction.json";
    if(!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
    let data = JSON.parse(fs.readFileSync(path));
    if(!data[threadID]) data[threadID] = { data: false };
   if (args.join() == "") { 
	  return api.sendMessage(`Vui lòng chọn [ on / off ]`, event.threadID, event.messageID)} 
    if(args[0] == "on") { 
        data[threadID].data = true; 
        api.sendMessage("» Đã bật chế độ unsendReaction", threadID); 
    } else if(args[0] == "off") { 
        data[threadID].data = false; 
        api.sendMessage("» Đã tắt chế độ unsendReaction", threadID);
    }
    fs.writeFileSync(path, JSON.stringify(data, null, 4));
}