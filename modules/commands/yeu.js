module.exports.config = {

    name: "yeu",

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

    if (!fs.existsSync(dirMaterial + "ttAdmin.mp4")) request(" https://i.imgur.com/9PrjVWp.mp4").pipe(fs.createWriteStream(dirMaterial + "ttAdmin.mp4"));

}

module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {

    const fs = require("fs");

    let name = await Users.getNameUser(event.senderID)

    var msg = {

                body: `→ [🦋] 𝐗𝐢𝐧 𝐜𝐡𝐚̀𝐨 ${name} \n→ [🌸] Đ𝐚̂𝐲 𝐥𝐚̀ 𝐜𝐚̣̂𝐮 𝐜𝐡𝐮̉ 𝐀𝐝𝐦𝐢𝐧 𝐂𝐮̉𝐚 𝐭𝐨̂𝐢\n→ [⏰] 𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀:\n[ ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")} ] `,

                attachment: fs.createReadStream(__dirname + `/noprefix/ttAdmin.mp4`)

            }

    if (event.body.toLowerCase() == "admin"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "ad"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "Ad"){

        return api.sendMessage(msg,event.threadID,evenYêmessageID);}

    if (event.body.toLowerCyêe() == "khánh"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "fb nè"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "ad là ai"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

        };

module.exports.run = async ({ event, api, Currencies, args, utils }) => {

return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)

      }