module.exports.config = {
	name: "duyetbox",
	version: "1.0.2",
	hasPermssion: 3,
	credits: "SINGU-💌💌",
	description: "Duyệt box dùng bot xD",
	commandCategory: "Hệ thống admin-bot",
    cooldowns: 5
};


const dataPath = __dirname + "/cache/approvedThreads.json";
const dataPending = __dirname + "/cache/pendingdThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
  const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
  if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "biaadmin.mp4")) request("https://i.imgur.com/5AcfvTx.mp4").pipe(fs.createWriteStream(dirMaterial + "biaadmin.mp4"));
	if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(dataPending)) fs.writeFileSync(dataPending, JSON.stringify([]));
}
module.exports.handleReply = async function ({ event, api, Currencies, handleReply, Users, args }) {
    if (handleReply.author != event.senderID) return;
    const { body, threadID, messageID, senderID } = event;
    const { type } = handleReply;
    let data = JSON.parse(fs.readFileSync(dataPath));
    let dataP = JSON.parse(fs.readFileSync(dataPending));
    let idBox = (args[0]) ? args[0] : threadID;
  switch (type) {
        case "pending": {
          switch (body) {
                case `A`: {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`[💌]➜ Phê duyệt thành công box:\n${idBox}`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
    		fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
    	}, messageID)
        }
        }
      }
    }
  }
module.exports.run = async function ({ event, api, args, Threads, Users, handleReply  }) {
	const { threadID, messageID, senderID } = event;
	let data = JSON.parse(fs.readFileSync(dataPath));
  let dataP = JSON.parse(fs.readFileSync(dataPending));
  let msg = "";
  var lydo = args.splice(2).join(" ");
  let idBox = (args[0]) ? args[0] : threadID;
        if (args[0] == "list" || args[0] == "l") {
    	msg = `[💌]=== 『 APPROVED GROUP LIST ${data.length} 』 ===[💌]\n◆━━━━━━━━━━━━━━━━◆\n`;
    	let count = 0;
    	for (e of data) {
        let threadInfo = await api.getThreadInfo(e);
          let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
    		msg += `\n\n[${count+=1}]➜ ${threadName}\n[💌]➜ ID: ${e}`;
    	}
    	api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "a",
        })
    }, messageID);
        }
     else if (args[0] == "pending" || args[0] == "p") {
    	msg = `[💌]=== 『 UNAPPROVED GROUP LIST ${dataP.length} 』 ===[💌]\n◆━━━━━━━━━━━━━━━━◆\n`;
    	let count = 0;
    	for (e of dataP) {
        let threadInfo = await api.getThreadInfo(e);
          let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
    		msg += `\n\n[${count+=1}]➜ ${threadName}\n[💌]➜ ID: ${e}`;
    	}
    	api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "pending",
        })
    }, messageID);
     }
       else if (args[0] == "help" || args[0] == "h") {
         const tst = (await Threads.getData(String(event.threadID))).data || {};
  const pb = (tst.hasOwnProperty("PREFIX")) ? tst.PREFIX : global.config.PREFIX;
  const nmdl = this.config.name
  const cre = this.config.credits
        return api.sendMessage(`[💌]=== 『 APPROVED 』 ===[💌]\n◆━━━━━━━━━━━━━━━━◆\n\n${pb}${nmdl} l/list => xem danh sách box được duyệt\n\n${pb}${nmdl} p/pending => xem danh sách box chưa duyệt\n\n${pb}${nmdl} d/del => kèm theo ID để xóa khỏi danh sách được dùng bot\n\n${pb}${nmdl} => kèm theo ID để duyệt box đó\n\n⇒ ${cre} ⇐`, threadID, messageID);
       }
      
    else if (args[0] == "del" || args[0] == "d") {
    	idBox = (args[1]) ? args[1] : event.threadID;
      if (isNaN(parseInt(idBox))) return api.sendMessage("[💌]➜ Không phải một con số", threadID, messageID);
    	if (!data.includes(idBox)) return api.sendMessage("[💌]➜ Box không được duyệt từ trước!", threadID, messageID);
      api.sendMessage(`[💌]➜ Nhóm bạn đã bị admin gỡ khỏi danh sách duyệt với lý do: ${lydo}`, idBox);
    	api.sendMessage(`[💌]➜ Box đã bị gỡ khỏi danh sách được phép dùng bot`, threadID, () => {
    		data.splice(data.indexOf(idBox), 1);
    		fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    	}, messageID)
    }
    else if (isNaN(parseInt(idBox))) api.sendMessage("[💌]➜ ID bạn nhập không hợp lệ", threadID, messageID);
    else if (data.includes(idBox)) api.sendMessage(`[💌]➜ ID ${idBox} đã được phê duyệt từ trước!`, threadID, messageID);
   	else api.sendMessage("[💌]➜ Nhóm bạn đã được admin phê duyệt", idBox, (error, info) => {
   		api.changeNickname(`» ${global.config.PREFIX} « → ${(!global.config.BOTNAME) ? "𝕓𝕠𝕥 của 𝙝𝙪̛̃𝙪 𝙩𝙝𝙖̆́𝙣𝙜 <3" : global.config.BOTNAME}`, idBox, global.data.botID);
      api.sendMessage({body: `▂▃▅▆𝐋𝐨𝐚𝐝𝐢𝐧𝐠...𝟏𝟎𝟎%▆▅▃▂\n⫸ 𝑲𝒆̂́𝒕 𝒏𝒐̂́𝒊 𝒕𝒉𝒂̀𝒏𝒉 𝒄𝒐̂𝒏𝒈 ⫷\n●▬▬▬▬▬๑⇩⇩๑▬▬▬▬▬●\n[💌] 𝓛𝓾𝓪̣̂𝓽 𝓑𝓸𝓽 𝙝𝙪̛̃𝙪 𝙩𝙝𝙖̆́𝙣𝙜 [💌]\n[💌]➜ 𝐻𝑎̣𝑛 𝑐ℎ𝑒̂́ 𝑠𝑝𝑎𝑚\[💌]➜ 𝐃𝐚𝐧𝐡 𝐬á𝐜𝐡 𝐥ệ𝐧𝐡 ${global.config.PREFIX}help và ${global.config.PREFIX}menu\n●▬▬▬▬▬๑⇧⇧๑▬▬▬▬▬●\n❛━━･❪ 𝑷𝒓𝒆𝒇𝒊𝒙 [ ${global.config.PREFIX} ]❫･━━❜\n[💌]➜ 𝑋𝑒𝑚 𝑡ℎ𝑜̂𝑛𝑔 𝑡𝑖𝑛 𝐴𝐷𝑀𝐼𝑁𝐵𝑂𝑇 𝑣𝑎̀ 𝐵𝑜𝑡: ${global.config.PREFIX}bot và ${global.config.PREFIX}ad\n📲[💌]➜ 𝑴𝒐̣𝒊 𝒕𝒉𝒂̆́𝒄 𝒎𝒂̆́𝒄 𝒍𝒊𝒆̂𝒏 𝒉𝒆̣̂ 𝒂𝒅𝒎𝒊𝒏: https://www.facebook.com/100074293234284\n◆━━━━━━━━━━━━━◆\n[💌]➜ 𝐓𝐡𝐢𝐬 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐛𝐲 ${global.config.BOTNAME}. 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐮𝐬𝐢𝐧𝐠\n[©]➜ 𝙰𝚍𝚖𝚒𝚗: 𝙝𝙪̛̃𝙪 𝙩𝙝𝙖̆́𝙣𝙜 `, attachment: fs.createReadStream(__dirname + "/cache/singummm.mp4")}, idBox);
   		if (error) return api.sendMessage("[💌]➜ Đã có lỗi xảy ra, đảm bảo rằng id bạn nhập hợp lệ và bot đang ở trong box!", threadID, messageID);
   		else {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`[💌]➜ Phê duyệt thành công box:\n${idBox}`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
    		fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
    	}, messageID)
        }
   	});
      }