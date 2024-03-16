module.exports.config = {
	name: "logoblock",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "baner",
	commandCategory: "Image",
	usages: "",
	cooldowns: 5
};
module.exports.run = async ({ event,
    api,
    global,
    Config,
    logger,
    Threads,
    Users,
    args,
    body,
    is }) => {
  try {
        const axios = require("axios");
        const request = require("request");
        const fs = require("fs-extra");
        var ag = args.join(" ").split(' | ');
        var text1 = ag[0],
            text2 = ag[1],
            text3 = ag[2],
            text4 = ag[3];
    let imag = (await axios.get(`https://dino.araxy.repl.co/tad?color1=${text1}&color2=${text2}&tenchinh=${encodeURI(text3)}&ten_phu=${encodeURI(text4)}`, {
        responseType: "stream"
      })).data;
    var msg = { body: 'Ảnh Của Bạn Đây',
attachment: imag 
}
    return api.sendMessage(msg, event.threadID, event.messageID)
  } catch (e){
    api.sendMessage('Lỗi Rồi', event.threadID, event.messageID)
  }
                                                                                                                                       }