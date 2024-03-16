module.exports.config = {
    name: "ct12",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SINGU-💌💌",
    description: "",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/rankup/`;
    if (!fs.existsSync(dirMaterial + "rankup")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "ct12.jpg")) request("https://data.whicdn.com/images/312923454/original.gif").pipe(fs.createWriteStream(dirMaterial + "ct12.jpg"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `Sau đây là bảng công thức 12 thì trong TA`,
                attachment: fs.createReadStream(__dirname + `/rankup/ct12.jpg`)
    }
  if (event.body.toLowerCase() == "12 thì trong TA"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "công thức 12 thì"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
      if (event.body.toLowerCase() == "ct12"){

        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
      }