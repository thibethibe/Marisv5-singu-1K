module.exports.config = {
  name: "waifu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SINGU-💌💌",
  description: "Kho Ảnh waifu",
  commandCategory: "Random-img",
  usages: "[]",
  cooldowns: 5
};

module.exports.run = async function({ api, event, args, Users }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  let name = await Users.getNameUser(event.senderID)
  const { threadID, messageID } = event;
  var type;
  switch (args[0]) {
    case "rem":
      type = "rem";
      break;
    case "aqua":
      type = "aqua";
      break;
      case "umaru":
      type = "umaru";
      break;
      case "kanna":
      type = "kanna";
      break;
      case "kurumi":
      type = "kurumi";
      break;
      case "lucy":
      type = "lucy";
      break;
      case "sagiri":
      type = "sagiri";
      break;
    default:
      return api.sendMessage(`❤️LIST WAIFU❤️\n»1/Rem\n»2/Aqua\n»3/Kanna\n»4/Umaru\n»5/Kurumi\n»6/Lucy\n»7/Sagiri`, threadID, messageID);
      break;
  }
  axios.get(`http://api-ttrungkien.000webhostapp.com/waifu1/${type}.php`).then(res => {
    let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
    let callback = function() {
      api.sendMessage({
        body: `Hi ${name}\nẢnh của bạn đây! `,
        attachment: fs.createReadStream(__dirname + `/cache/${type}.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${type}.${ext}`), event.messageID);
    };
    request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/${type}.${ext}`)).on("close", callback);
  })
}