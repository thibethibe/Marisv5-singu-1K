const imgur = require("imgur");
const fs = require("fs");
const { downloadFile } = require("../../utils/index");

module.exports.config = {
  name: "import",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SINGU-💌💌",
  description: "Lấy link ảnh imgur",
  commandCategory: "Công cụ",
  usages: "[reply]",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
  const { threadID, type, messageReply, messageID } = event;
  const ClientID = "100074293234284";
  if (type !== "message_reply" || messageReply.attachments.length == 0) return api.sendMessage("➜ Bạn phải reply một video, ảnh nào đó", threadID, messageID);
  imgur.setClientId(ClientID);
  const attachmentSend = [];
  async function getAttachments(attachments) {
    let startFile = 0;
    for (const data of attachments) {
      const ext = data.type == "photo" ? "jpg" :
        data.type == "video" ? "mp4" :
          data.type == "audio" ? "m4a" :
            data.type == "animated_image" ? "gif" : "txt";
      const pathSave = __dirname + `/cache/${startFile}.${ext}`
      ++startFile;
      const url = data.url;
      await downloadFile(url, pathSave);
      attachmentSend.push(pathSave);
    }
  }
  await getAttachments(messageReply.attachments);
  let msg = "", Succes = 0, Error = [];
  for (const getImage of attachmentSend) {
    try {
      const getLink = await imgur.uploadFile(getImage)
      console.log(getLink);
      msg += `${++Succes}/ ${getLink.link}\n`
      fs.unlinkSync(getImage)
    } catch {
      Error.push(getImage);
      fs.unlinkSync(getImage)
    }
  }
  return api.sendMessage({body: `=== [ 𝗜𝗠𝗚𝗨𝗥 𝗨𝗣𝗟𝗢𝗔𝗗 ] ===
━━━━━━━━━━━━━━━━━━\n➜ 𝗧𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 : ${Succes}\n➜ 𝗧𝗵𝗮̂́𝘁 𝗯𝗮̣𝗶 : ${Error.length}\n⊱ ⋅ ━━━━━━━━━━━━━━━━━━ ⋅ ⊰\n➜ 𝗯𝗼𝘁 𝘃𝘂̛̀𝗮 𝘂𝗽 𝘀𝗮𝗻𝗴 𝗹𝗶𝗻𝗸 𝗻𝗲̀:\n${msg}`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.jrtxtracy.repl.co/imgur')).data.url,
method: "GET",
responseType: "stream"
})).data
},threadID);
}