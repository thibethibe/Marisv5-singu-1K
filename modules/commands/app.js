module.exports.config = {
  name: "app",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "SINGU-💌💌",
  description: "Làm mới appstate.json",
  commandCategory: "admin",
  usages: "",
  cooldowns: 5
}

module.exports.run = async function ({ api, event, args }) {
  const fs = global.nodemodule["fs-extra"];
  const permission = ["100074293234284", "", "", "", "", ""];
	if (!permission.includes(event.senderID)) return api.sendMessage("Không cần làm mới appstate hộ admin đâu", event.threadID, event.messageID);
  let appstate = api.getAppState();
  // convert JSON object to a string
  const data = JSON.stringify(appstate);
  // write file to disk
  fs.writeFile(`${__dirname}/../../${global.config.APPSTATEPATH}`, data, 'utf8', (err) => {
    if (err) {
      return api.sendMessage(`Error writing file: ${err}`, event.threadID);
    } else {
      return api.sendMessage(`Đã làm mới ${global.config.APPSTATEPATH} thành công`, event.threadID);
    }
  });

}
