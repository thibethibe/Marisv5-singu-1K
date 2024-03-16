module.exports.config = {
  name: "threadlist",
  version: "1.0.0",
  credits: "JRT",
  hasPermssion: 0,
  description: "Lấy tên và id các nhóm chứa bot",
  commandCategory: "Nhóm",
  usages: "threadlist",
  cooldowns: 5
};

module.exports.run = function({ api, event, clientL }) {
  var num = 0, box = "";
  api.getThreadList(100, null, ["INBOX"], (err, list) => {
    list.forEach(info => {
      if (info.isGroup && info.isSubscribed) {
        box += `[💌] ${num+=1} [💌]\n\n➜ BOX: ${info.name} \n➜ UIDBOX: ${info.threadID}\n\n`;
      }			
    })
    return api.sendMessage(box, event.threadID, event.messageID);
  })
}