module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SINGU-💌💌",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Không cần dấu lệnh",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "") {
    var aid = ["100039464403149"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag Admin có gì ko?","Sao gọi chủ tôi có việc gì?","Tag nữa ăn đấm","Tag làm gì?","Sao tag có việc gì ngồi xuống uống tách trà tâm sự","Anh ấy đang bận ? Có chi ko?","Hãy dùng callad để liên hệ với admin >,<","Tag cc","kiu chi"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}