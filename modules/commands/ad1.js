module.exports.config = {
    name: "nst",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SINGU-💌💌",
    description: "",
    commandCategory: "𝐍𝐨 𝐏𝐫𝐞𝐟𝐢𝐱",
    usages: "",
    cooldowns: 10,
    denpendencies: {
        "fs": "",
        "request": ""
    }

};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });

    if (!fs.existsSync(dirMaterial + "ad.mp4")) request("https://i.imgur.com/Dmf88xO.jpeg").pipe(fs.createWriteStream(dirMaterial + "ad.mp4"));

}

module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {

    const fs = require("fs");

    let name = await Users.getNameUser(event.senderID)
    let uid = event.senderID;
    const res = await axios.get(`https://apivip.nvt20011.repl.co/thinh`);
    var vantan = res.data.url; 
    const dcm = process.uptime(); 
    var anh = Math.floor(dcm / (60 * 60));
    var la = Math.floor((dcm % (60 * 60)) / 60);
	  var vtan = Math.floor(dcm % 60);
    var time = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');
    var msg = {
               
                body: `🥨 ====[𝘼𝘿𝙈𝙄𝙉 𝘽𝙊𝙏]==== 🥨\n━━━━━━━━━━━━━━━━━━\n[👋] → Xin Chào ${name}\n[🍒] → Đây Là Admin Chính Của Bot\n[🌐] → FB của Admin Đây Nhé : https://www.facebook.com/profile.php?id=100081797352234\n━━━━━━━━━━━━━━━━━━\n[🧸] → Cảm Ơn Bạn Đã Sử Dụng Bot Của Mình\n[💓] → Chúc ${name} Một Ngày Vui Vẻ\n[🥞] → Thính : ${vantan}\n━━━━━━━━━━━━━━━━━━\n[🍗] → Bot Đã Onl Được : ${anh} : ${la} : ${vtan}\n[🥯] → Bây Giờ Là : ${time}`,

                attachment: fs.createReadStream(__dirname + `/noprefix/ad.mp4`)

            }

    if (event.body.toLowerCase() == "Admin"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "ad"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "admin bot"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "vtan"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

        };

module.exports.run = async ({ event, api, Currencies, args, utils }) => {

return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)

                       }