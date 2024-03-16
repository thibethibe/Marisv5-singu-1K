module.exports.config = {
  name: "canbang",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SINGU-💌💌",
  description: "Cân bằng phương trình với tốc độ nhanh hơn người yêu cũ trở mặt",
  commandCategory: "tiện ích",
  usages: "[Phương trình]", 
  cooldowns: 5, 
  dependencies: {"chem-eb":""}, 
  info: [
    {
      key: 'Phương trình',
      prompt: 'Nhập phương trình',
      type: 'Văn Bản',
      example: 'chemeb H2+O2=H2O'
    },
  ],
};
module.exports.run = function({ api, event, args, getText }) {
    const chemeb = global.nodemodule["chem-eb"];
//     if (event.type != "message_reply") {
//         var msg = event.messageReply.body;
//         console.log(event.messageReply.body)
//         if (msg.includes('(') && msg.includes(')')) return api.sendMessage(getText('notSupportXYz'), event.threadID, event.messageID);
//         var balanced = chemeb(msg);
//         return api.sendMessage(`=> ${balanced.outChem}`, event.threadID, event.messageID);
//     }
// else
    var msg = args.join(" ");
    if (msg.includes('(') && msg.includes(')')) return api.sendMessage(getText('notSupportXYz'), event.threadID, event.messageID);
    var balanced = chemeb(msg);
    return api.sendMessage(`=> ${balanced.outChem}`, event.threadID, event.messageID);
}