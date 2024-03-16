module.exports.config = {
    name: "restart",
    version: "2.0.2",
    hasPermssion: 3,
    credits: "SINGU-💌💌",
    description: "Khởi động lai bot",
    commandCategory: "Admin",
    usages: "restart",
    cooldowns: 5,
    dependencies: { }
}
 
module.exports.run = async function({ api, args, Users, event}) {
const { threadID, messageID } = event;
const axios = global.nodemodule["axios"];

const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
    var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
    var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
  //if (permssion != 3) return api.sendMessage(`[DONATE]→ Momo/Mbbank: 0965113021. Xin cám ơn ạ!! ❤️`, threadID, messageID);
if(args.length == 0) api.sendMessage(`Dạ thưa ADMIN ${name}\n💌ADMIN💌 vui lòng chờ em đái trong giây lát, BOT sẽ quay trở lại sau 10s ạ`,event.threadID, () =>process.exit(1))
else{    
let time = args.join(" ");
setTimeout(() =>
api.sendMessage(`🔮Bot sẽ khỏi động lại sau: ${gio}s\n⏰Bây giờ là: ${gio}:${phut}:${giay} `, threadID), 0)
setTimeout(() =>
api.sendMessage("⌛Đang bắt đầu quá trình khỏi động lại",event.threadID, () =>process.exit(1)), 1000*`${time}`);
}
}