const fs = require("fs");
module.exports.config = {
name: "yêu",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "VanHung",
  description: "yêu",
  commandCategory: "Không cần dấu lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Yêu")==0 || (event.body.indexOf("yêu")==0)) {
    var msg = {
        body: "🥰 yêu cậu lắm đó 💞",
        attachment: fs.createReadStream(__dirname + `/noprefix/lpstb.mp4`)
      }
      return api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

}