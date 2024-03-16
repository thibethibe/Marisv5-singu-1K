module.exports.config = {
  name: "spam",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "SINGU-💌💌",
  description: "spam đến chết một nội dung",
  commandCategory: "War",
  usages: "",
  cooldowns: 1,
  envConfig: {
    spamDelay: 5  
  }
};

const spamThreads = new Set();  
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports.run = async function ({ api, event, args }) { 
  const { threadID, messageID, senderID } = event;
  const content = (args.length != 0) ? args.join(" ") : "💌💌𝙑𝙖̣𝙣 𝙠𝙞𝙚̂́𝙥 𝙡𝙪𝙤̂𝙣 𝙝𝙤̂̀𝙞🔥,  𝘼𝙣𝙝 𝙢𝙖̃𝙞 𝙗𝙖́ " 🆂🅸🅽🅶🆄"✨🫧🌟";
  if (args[0] === "stop") {
    if (spamThreads.has(threadID)) {
      spamThreads.delete(threadID);
      return api.sendMessage('Đã dừng spam!', threadID, messageID);
    } 
    return api.sendMessage('Không có quá trình spam nào đang diễn ra!', threadID, messageID);
  } 
  if (!spamThreads.has(threadID)) {
    spamThreads.add(threadID);
    api.sendMessage(`Bắt đầu spam!`, threadID, messageID);
    while (spamThreads.has(threadID)) {
      await delay(this.config.envConfig.spamDelay * 1000);
      if (spamThreads.has(threadID)) {
        api.sendMessage(content, threadID);
      }
    }
  } else {
    api.sendMessage('Quá trình spam đã được bắt đầu trước đó!', threadID, messageID);
  }
};