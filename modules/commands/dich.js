module.exports.config = {
	name: "dich", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "1.0.0", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "SINGU-💌💌", // Công nhận module sở hữu là ai
	description: "Copilot ggdich test", // Thông tin chi tiết về lệnh
	commandCategory: "group", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "[lang] [text]", // Cách sử dụng lệnh
	cooldowns: 5
};

module.exports.run = ({ api, event, args }) => {
    const { threadID, messageID } = event;
    const lang = args[0];
    const text = args.slice(1).join(" ");
    if (!lang) return api.sendMessage("Bạn chưa nhập ngôn ngữ", threadID, messageID);
    if (!text) return api.sendMessage("Bạn chưa nhập nội dung", threadID, messageID);
    //translate text from lang to vi using google translate
    const axios = require('axios');
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${lang}&tl=vi&dt=t&q=${encodeURIComponent(text)}`;
    axios.get(url).then(res => {
        const result = res.data[0][0][0];
        api.sendMessage(`${result}\n\nFrom: ${lang} to: vi`, threadID, messageID);
    }).catch(err => {
        api.sendMessage(`${err}`, threadID, messageID);
    });
}