module.exports.config = {
    name: "infov2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SINGU-💌💌",
    description: "Xem thông tin của người dùng facebook",
    commandCategory: "Nhóm",
    usages: "[reply/tag/id]",
    cooldowns: 3

};
module.exports.run = async function ({ api, event, args, Users }) {
    const axios = require('axios')
    const { threadID, messageID, senderID, type, mentions } = event;
    if (type == "message_reply") {
        var uid = event.messageReply.senderID
    } else if (args.join().indexOf(".com/") !== -1) {
        const res_ID = await axios.get(`https://api.sadgirlluytink.repl.co/finduid?url=${args.join(' ')}`);
        var uid = res_ID.data.id;
    } else if (args.join().indexOf('@') !== -1) {
        var uid = Object.keys(mentions)[0]
    } else {
        var uid = senderID
    }
    var data = (await Users.getUserFull(uid)).data;
    try {
        var location = data.location.name || null;
    }
    catch {
         var location = null
    }
    try {
        var love = data.love.name || null;
    }
    catch {
         var love = null
    }
    try {
        var hometown = data.hometown.name || null;
    }
    catch {
         var hometown = null
    }
    var gender = data.gender.replace('female', 'Nữ')
                            .replace('male', 'Nam')
    var img = (await axios.get(data.imgavt, { responseType: "stream" })).data;
    var msg = {
          body: `Tên: ${data.name}\nNgười theo dõi: ${data.follow}\nSinh nhật: ${data.birthday}\nGiới tính: ${gender}\nNơi sống: ${location}\nQuê quán: ${hometown}\nMối quan hệ: ${data.relationship_status}${(love != null) ? ' với ' + love : ''}\n`
    }
    return api.sendMessage(msg, threadID, messageID);
}
