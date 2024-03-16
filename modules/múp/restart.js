module.exports.config = {
  name: "restart",
  version: "2.0.2",
  hasPermssion: 3,
  credits: "SINGU-💌💌",
  description: "Khởi động lại bot",
  commandCategory: "Admin",
  usages: "restart",
  cooldowns: 5,
  dependencies: {}
}

module.exports.run = async function({ api, args, Users, event }) {
  const { threadID, messageID } = event;
  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
  var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
  var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  let name = await Users.getNameUser(event.senderID);
  if (args.length == 0) api.sendMessage(`Tiến hành khởi động lại!!`, threadID, () => process.exit(1));
}