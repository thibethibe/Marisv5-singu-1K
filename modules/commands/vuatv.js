const timeout = 60
const coinsup = 100000 
const coinsdown = 5000
const tientrochoi = 100
module.exports.config = {
	name: "vuatv", 
	version: "1.0.0", 
	hasPermssion: 0, 
	credits: "SINGU-💌💌", 
	description: "Thử thách trả lời câu hỏi",
	commandCategory: "Trò Chơi", 
	usages: "",
	cooldowns: 5,
};
module.exports.run = async function ({ api, args, event, Currencies, Users }) {
  const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    const { senderID ,threadID, messageID } = event;
    var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    var arraytag = [], img = [];
        arraytag.push({id: event.senderID, tag: nameSender});
        let balance = (await Currencies.getData(senderID)).money;
    if (balance <= 100) return api.sendMessage('bạn nghèo  quá nên không có tiền chơi đâu liuliu',threadID,messageID);
     await Currencies.decreaseMoney(event.senderID, parseInt(tientrochoi));
    const datagame = (await axios.get(`https://api.blacksky04.repl.co/game/vuatiengviet`)).data;
    const random = datagame.keyword;
    const answer = datagame;
    let Avatar = (await axios.get(`https://api.blacksky04.repl.co/game/vuatiengviet/image?word=${encodeURI(random)}`, { responseType: "arraybuffer" } )).data; 
         fs.writeFileSync(__dirname + "/cache/vuatv.png", Buffer.from(Avatar, "utf-8") );
         img.push(fs.createReadStream(__dirname + "/cache/vuatv.png"));
     var msg = {body: `${nameSender} trả lời câu hỏi này để được 1 số tiền hời nhé UwU (-${tientrochoi}$)` ,mentions: arraytag,attachment: img}
        
        return api.sendMessage(msg, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "reply",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            answer: answer.keyword
        })
    }) 
}
module.exports.handleReply = async function ({ args, event, Users, Currencies, api, handleReply }) {
    const axios = global.nodemodule['axios'];  
    let { author, answer, messageID } = handleReply;
    if (event.senderID != author) return api.sendMessage("xàm lồn quá cho người ta trả lời đi đbrr", event.threadID, event.messageID); 
    switch (handleReply.type) {
        case "reply": {
            const dapan = event.body
            if (dapan == answer) {
               await Currencies.increaseMoney(event.senderID, parseInt(coinsup))
               
               var namePlayer = await Users.getData(event.senderID)
                api.unsendMessage(handleReply.messageID)
                var msg = {body: `${namePlayer.name} đã trả lời chính xác!\nĐáp án: ${answer} (+${coinsup}$)`}
                return api.sendMessage(msg, event.threadID, event.messageID)
            }
            else
               await Currencies.decreaseMoney(event.senderID, parseInt(coinsdown))
            return api.sendMessage(`Câu trả lời không đúng. Đáp án: ${answer} (-${coinsdown}$)!!!`, event.threadID, event.messageID),
            api.unsendMessage(handleReply.messageID);
        }
    }
}