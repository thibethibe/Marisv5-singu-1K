module.exports.config = {
  name: "shortcut",
  version: "1.1.0",
  hasPermssion: 0,
  credits: "Niiozic",
  description: "dùng -shortcut tag để thêm câu trả lời khi có người tag",
  commandCategory: "Nhóm",
    usages: "[all/delete/empty/tag]",
  cooldowns: 0,
  dependencies: {
    "fs-extra": "",
        "path": ""
  }
}
let format_attachment = type=>({
  photo: 'png', video: 'mp4', audio: 'mp3', animated_image: 'gif',
})[type] || 'bin';

module.exports.onLoad = function () {
    const { existsSync, writeFileSync, mkdirSync, readFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, '..', 'events', "shortcut", "shortcutdata.json");
    const pathGif = resolve(__dirname, '..', 'events' ,"shortcut", "shortcut");

    if (!global.moduleData.shortcut) global.moduleData.shortcut = new Map();

    if (!existsSync(path)) writeFileSync(path, JSON.stringify([]), "utf-8");
    if (!existsSync(pathGif)) mkdirSync(pathGif, { recursive: true });

    const data = JSON.parse(readFileSync(path, "utf-8"));

    for (const threadData of data) global.moduleData.shortcut.set(threadData.threadID, threadData.shortcuts);

    return;
}

module.exports.handleEvent = async function ({ event, api, Users }) {
    const { threadID, messageID, body, senderID, mentions: Mentions ={}} = event;
    if (!global.moduleData.shortcut) global.moduleData.shortcut = new Map();
    if (!global.moduleData.shortcut.has(threadID)) return;
    let mentions = Object.keys(Mentions);
    const data = global.moduleData.shortcut.get(threadID);
    if(!body) return;
     if ((dataThread = mentions.length > 0?data.find(item=>typeof item.tag_id == 'string' && mentions.includes(item.tag_id)) :false )||( dataThread = data.find(item => (item.input||'').toLowerCase() == body.toLowerCase()))) {
        const { resolve } = global.nodemodule["path"];
        const { existsSync, createReadStream } = global.nodemodule["fs-extra"];
        ;
        //const path = resolve(__dirname, '..', 'events' ,"shortcut", "shortcut",`${dataThread.id}`);

    var object, output;
    var moment = require("moment-timezone");
    var time = moment.tz("Asia/Ho_Chi_Minh").format('HH:mm:ss | DD/MM/YYYY');
        var output = dataThread.output;
        if (/\name}/g.test(output)) {
            const name = global.data.userName.get(senderID) || await Users.getNameUser(senderID);
  output = output.replace(/\name}/g, name).replace(/\time}/g, time);
        }

        if (dataThread.uri/*existsSync(path)*/) object = { body: output, attachment: /*createReadStream(path) */(await require('axios').get(dataThread.uri,{responseType:'stream'}).catch(e=>({data:void 0}))).data}
        else object = { body: output };

        return api.sendMessage(object, threadID, messageID);
}
}

module.exports.handleReply = async function ({ event = {}, api, handleReply }) {
    if (handleReply.author != event.senderID) return;
    const { readFileSync, writeFileSync, unlinkSync } = global.nodemodule["fs-extra"];
  try{
    const { resolve } = global.nodemodule["path"];
    const { threadID, messageID, senderID, body } = event;
    const name = this.config.name;

    const path = resolve(__dirname, '..', 'events', "shortcut", "shortcutdata.json");

    switch (handleReply.type) {
        case "requireInput": {
            if (body.length == 0) return api.sendMessage("❎ Câu trả lời không được để trống", threadID, messageID);
            const data = global.moduleData.shortcut.get(threadID) || [];
            if (data.some(item => item.input == body)) return api.sendMessage("❎ Input đã tồn tại từ trước", threadID, messageID);
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage("📌 Reply tin nhắn này để nhập câu trả lời khi sử dụng từ khóa", threadID, function (error, info) {
                return global.client.handleReply.push({
                    type: "requireOutput",
                    name,
                    author: senderID,
                    messageID: info.messageID,
                    input: body
                });
            }, messageID);
        }
        case "requireOutput": {
            if (body.length == 0) return api.sendMessage("❎ Câu trả lời không được để trống", threadID, messageID);
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage("📌 Reply tin nhắn này bằng tệp video/ảnh/mp3/gif hoặc nếu không cần bạn có thể reply tin nhắn này và nhập 's'", threadID, function (error, info) {
                return global.client.handleReply.push({
                    type: "requireGif",
                    name,
                    author: senderID,
                    messageID: info.messageID,
                    input: handleReply.input,
                    output: body,
                    input_type: handleReply.input_type,
                    tag_id: handleReply.tag_id,
                });
            }, messageID);
        }