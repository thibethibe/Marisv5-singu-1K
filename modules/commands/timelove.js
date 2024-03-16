module.exports.config = {
  name: "timelove",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MạnhG",
  description: "Tình yêu",
  commandCategory: "Tình yêu",
  cooldowns: 5
}
module.exports.onLoad = () => {
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
  const dirMaterial = __dirname + `/Noprefix/`;
  if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "jrtxtracy.mp4")) request("https://i.imgur.com/jGHLV3S.mp4").pipe(fs.createWriteStream(dirMaterial + "jrtxtracy.mp4"));
}

module.exports.handleEvent = async ({ event, api, Users }) => {
  const fs = global.nodemodule["fs-extra"];
  //let name = await Users.getNameUser(event.senderID);
  var { threadID, messageID, body, senderID } = event;
  if (senderID == api.getCurrentUserID()) return;
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  let dateBegin = new Date(2022, 10, 12, 00, 00, 00).getTime()
  let dateNow = Date.now()- dateBegin
  let Time = dateNow
  let parseDays = Math.floor(Time / (1000 * 60 * 60 * 24))
  let parseHours = Math.floor((Time - parseDays * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let parseMinutes = Math.floor((Time - parseDays * (1000 * 60 * 60 * 24) - parseHours * (1000 * 60 * 60)) / (1000 * 60))
  let parseSeconds = Math.floor((Time - parseDays * (1000 * 60 * 60 * 24) - parseHours * (1000 * 60 * 60) - parseMinutes * (1000 * 60)) / (1000))
  //trả lời
  let mung = [
    "𝐶ℎ𝑢́𝑐 2 𝑏𝑎̣𝑛 𝑡𝑟𝑎̆𝑚 𝑛𝑎̆𝑚 ℎ𝑎̣𝑛ℎ 𝑝ℎ𝑢́𝑡",
    "𝐶ℎ𝑢́𝑐 2 𝑏𝑎̣𝑛 𝑥𝑎̂𝑦 𝑑𝑢̛̣𝑛𝑔 đ𝑢̛𝑜̛̣𝑐 1 𝑡𝑜̂̉ 𝑎̂́𝑚 ℎ𝑎̣𝑛ℎ 𝑝ℎ𝑢́𝑐",
    "𝐶ℎ𝑢́𝑐 2 𝑏𝑎̣𝑛 𝑐𝑢̀𝑛𝑔 𝑛ℎ𝑎𝑢 𝑛𝑢̛𝑜̛𝑛𝑔 𝑡𝑢̛̣𝑎 đ𝑒̂́𝑛 𝑐𝑢𝑜̂́𝑖 đ𝑜̛̀𝑖",
    "𝐶ℎ𝑢́𝑐 2 𝑏𝑎̣𝑛 ℎ𝑎̣𝑛ℎ 𝑝ℎ𝑢́𝑐",
    "𝑇𝑟𝑎́𝑐ℎ 𝑝ℎ𝑎̣̂𝑛 𝑣𝑜̂ 𝑑𝑢𝑦𝑒̂𝑛...",
  "3 𝑝ℎ𝑎̂̀𝑛 𝑑𝑢𝑦𝑒̂𝑛 𝑛𝑜̛̣, 7 𝑝ℎ𝑎̂̀𝑛 𝑐𝑜̂́ 𝑔𝑎̆́𝑛𝑔",
  "𝐻𝑎̃𝑦 𝑜̛̉ 𝑔𝑎̂̀𝑛 𝑣𝑜̛́𝑖 𝑛ℎ𝑎𝑢 đ𝑖. Đ𝑒̂̉ 𝑚𝑜̂́𝑖 𝑞𝑢𝑎𝑛 ℎ𝑒̣̂ 𝑛𝑎̀𝑦 𝑐𝑜́ 𝑡ℎ𝑒̂̉ 𝑡𝑖𝑒̂́𝑛 𝑥𝑎 ℎ𝑜̛𝑛",
  "𝐻𝑎̃𝑦 𝑐ℎ𝑢̉ đ𝑜̣̂𝑛𝑔 𝑏𝑎̆́𝑡 𝑐ℎ𝑢𝑦𝑒̣̂𝑛 ℎ𝑜̛𝑛 𝑛𝑢̛̃𝑎. 𝐻𝑎𝑖 𝑏𝑎̣𝑛 𝑟𝑎̂́𝑡 𝑙𝑎̀ ℎ𝑜̛̣𝑝 đ𝑜̂𝑖",
  "𝐻𝑎̃𝑦 𝑡𝑖𝑛 𝑣𝑎̀𝑜 𝑑𝑢𝑦𝑒̂𝑛 𝑠𝑜̂́ đ𝑖, 𝑣𝑖̀ 𝑛𝑜́ 𝑐𝑜́ 𝑡ℎ𝑎̣̂𝑡 đ𝑎̂́𝑦!",
  "𝐻𝑜̛̣𝑝 đ𝑜̂𝑖 𝑙𝑎̆́𝑚 đ𝑎̂́𝑦. 𝑄𝑢𝑎𝑛 𝑡𝑎̂𝑚 𝑐ℎ𝑎̆𝑚 𝑠𝑜́𝑐 𝑐ℎ𝑜 𝑚𝑜̂́𝑖 𝑞𝑢𝑎𝑛 ℎ𝑒̣̂ 𝑛𝑎̀𝑦 𝑛ℎ𝑖𝑒̂̀𝑢 ℎ𝑜̛𝑛 𝑛𝑢̛̃𝑎 𝑛ℎ𝑒́!",
  "𝐿𝑢̛𝑢 𝑠𝑜̂́ 𝑛ℎ𝑎𝑢 đ𝑖, 𝑏𝑎𝑜 𝑔𝑖𝑜̛̀ 𝑐𝑢̛𝑜̛́𝑖 𝑡ℎ𝑖̀ 𝑔𝑜̣𝑖 𝑛ℎ𝑎𝑢 𝑙𝑒̂𝑛 𝑙𝑒̂̃ đ𝑢̛𝑜̛̀𝑛𝑔!",
  "𝐶𝑢̛𝑜̛́𝑖 đ𝑖 𝑐ℎ𝑜̛̀ 𝑐ℎ𝑖!"
  ]
  let chuc = mung[Math.floor(Math.random() * mung.length)]
  var msg = {
    body: `[❤️] Đ𝑬̂́𝑴 𝑵𝑮𝑨̀𝒀 𝒀𝑬̂𝑼 𝑪𝑼̉𝑨 𝑨𝑫𝑴𝑰𝑵 [❤️]\n\n◆━━━━━━━━━━━━━━━━◆\n\n[💟] 𝑰 𝑳𝒐𝒗𝒆 𝒀𝒐𝒖 [💟]\n[💓]→ 𝑳𝒐̛̀𝒊 𝒄𝒉𝒖́𝒄: ${chuc}\n[😘]→ 𝑻𝒉𝒐̛̀𝒊 𝒈𝒊𝒂𝒏 𝒃𝒆̂𝒏 𝒏𝒉𝒂𝒖: ${parseDays} 𝒏𝒈𝒂̀𝒚 : ${parseHours} : 𝒕𝒊𝒆̂́𝒏𝒈 ${parseMinutes} : 𝒑𝒉𝒖́𝒕 ${parseSeconds} 𝒈𝒊𝒂̂𝒚`, attachment: fs.createReadStream(__dirname + `/Noprefix/jrtxtracy.mp4`)
  }
  // Gọi bot
  var arr = ["demngayyeu", "đếm ngày yêu", "số ngày yêu nhau", "đny", "time love", "Time love", "timelove", "Timelove"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.run = function ({ event, api }) {

  let dateBegin = new Date(2022, 10, 12, 00, 00, 00).getTime()
  let dateNow = Date.now()
  let Time = dateNow - dateBegin
  let parseDays = Math.floor(Time / (1000 * 60 * 60 * 24))
  let parseHours = Math.floor((Time - parseDays * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let parseMinutes = Math.floor((Time - parseDays * (1000 * 60 * 60 * 24) - parseHours * (1000 * 60 * 60)) / (1000 * 60))
  let parseSeconds = Math.floor((Time - parseDays * (1000 * 60 * 60 * 24) - parseHours * (1000 * 60 * 60) - parseMinutes * (1000 * 60)) / (1000))
  let mung = [
    "𝐶ℎ𝑢́𝑐 2 𝑏𝑎̣𝑛 𝑡𝑟𝑎̆𝑚 𝑛𝑎̆𝑚 ℎ𝑎̣𝑛ℎ 𝑝ℎ𝑢́𝑡",
    "𝐶ℎ𝑢́𝑐 2 𝑏𝑎̣𝑛 𝑥𝑎̂𝑦 𝑑𝑢̛̣𝑛𝑔 đ𝑢̛𝑜̛̣𝑐 1 𝑡𝑜̂̉ 𝑎̂́𝑚 ℎ𝑎̣𝑛ℎ 𝑝ℎ𝑢́𝑐",
    "𝐶ℎ𝑢́𝑐 2 𝑏𝑎̣𝑛 𝑐𝑢̀𝑛𝑔 𝑛ℎ𝑎𝑢 𝑛𝑢̛𝑜̛𝑛𝑔 𝑡𝑢̛̣𝑎 đ𝑒̂́𝑛 𝑐𝑢𝑜̂́𝑖 đ𝑜̛̀𝑖",
    "𝐶ℎ𝑢́𝑐 2 𝑏𝑎̣𝑛 ℎ𝑎̣𝑛ℎ 𝑝ℎ𝑢́𝑐",
    "𝑇𝑟𝑎́𝑐ℎ 𝑝ℎ𝑎̣̂𝑛 𝑣𝑜̂ 𝑑𝑢𝑦𝑒̂𝑛...",
  "3 𝑝ℎ𝑎̂̀𝑛 𝑑𝑢𝑦𝑒̂𝑛 𝑛𝑜̛̣, 7 𝑝ℎ𝑎̂̀𝑛 𝑐𝑜̂́ 𝑔𝑎̆́𝑛𝑔",
  "𝐻𝑎̃𝑦 𝑜̛̉ 𝑔𝑎̂̀𝑛 𝑣𝑜̛́𝑖 𝑛ℎ𝑎𝑢 đ𝑖. Đ𝑒̂̉ 𝑚𝑜̂́𝑖 𝑞𝑢𝑎𝑛 ℎ𝑒̣̂ 𝑛𝑎̀𝑦 𝑐𝑜́ 𝑡ℎ𝑒̂̉ 𝑡𝑖𝑒̂́𝑛 𝑥𝑎 ℎ𝑜̛𝑛",
  "𝐻𝑎̃𝑦 𝑐ℎ𝑢̉ đ𝑜̣̂𝑛𝑔 𝑏𝑎̆́𝑡 𝑐ℎ𝑢𝑦𝑒̣̂𝑛 ℎ𝑜̛𝑛 𝑛𝑢̛̃𝑎. 𝐻𝑎𝑖 𝑏𝑎̣𝑛 𝑟𝑎̂́𝑡 𝑙𝑎̀ ℎ𝑜̛̣𝑝 đ𝑜̂𝑖",
  "𝐻𝑎̃𝑦 𝑡𝑖𝑛 𝑣𝑎̀𝑜 𝑑𝑢𝑦𝑒̂𝑛 𝑠𝑜̂́ đ𝑖, 𝑣𝑖̀ 𝑛𝑜́ 𝑐𝑜́ 𝑡ℎ𝑎̣̂𝑡 đ𝑎̂́𝑦!",
  "𝐻𝑜̛̣𝑝 đ𝑜̂𝑖 𝑙𝑎̆́𝑚 đ𝑎̂́𝑦. 𝑄𝑢𝑎𝑛 𝑡𝑎̂𝑚 𝑐ℎ𝑎̆𝑚 𝑠𝑜́𝑐 𝑐ℎ𝑜 𝑚𝑜̂́𝑖 𝑞𝑢𝑎𝑛 ℎ𝑒̣̂ 𝑛𝑎̀𝑦 𝑛ℎ𝑖𝑒̂̀𝑢 ℎ𝑜̛𝑛 𝑛𝑢̛̃𝑎 𝑛ℎ𝑒́!",
  "𝐿𝑢̛𝑢 𝑠𝑜̂́ 𝑛ℎ𝑎𝑢 đ𝑖, 𝑏𝑎𝑜 𝑔𝑖𝑜̛̀ 𝑐𝑢̛𝑜̛́𝑖 𝑡ℎ𝑖̀ 𝑔𝑜̣𝑖 𝑛ℎ𝑎𝑢 𝑙𝑒̂𝑛 𝑙𝑒̂̃ đ𝑢̛𝑜̛̀𝑛𝑔!",
  "𝐶𝑢̛𝑜̛́𝑖 đ𝑖 𝑐ℎ𝑜̛̀ 𝑐ℎ𝑖!"
  ]
  let chuc = mung[Math.floor(Math.random() * mung.length)]
  return api.sendMessage(`[❤️] Đ𝑬̂́𝑴 𝑵𝑮𝑨̀𝒀 𝒀𝑬̂𝑼 𝑪𝑼̉𝑨 𝑨𝑫𝑴𝑰𝑵 [❤️]\n\n◆━━━━━━━━━━━━━━━━◆\n\n[💟] 𝑰 𝑳𝒐𝒗𝒆 𝒀𝒐𝒖 [💟]\n[💓]→ 𝑳𝒐̛̀𝒊 𝒄𝒉𝒖́𝒄: ${chuc}\n[😘]→ 𝑻𝒉𝒐̛̀𝒊 𝒈𝒊𝒂𝒏 𝒃𝒆̂𝒏 𝒏𝒉𝒂𝒖: ${parseDays} 𝒏𝒈𝒂̀𝒚 : ${parseHours} : 𝒕𝒊𝒆̂́𝒏𝒈 ${parseMinutes} : 𝒑𝒉𝒖́𝒕 ${parseSeconds} 𝒈𝒊𝒂̂𝒚`, event.threadID, event.messageID);

}