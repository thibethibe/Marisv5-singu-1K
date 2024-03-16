const axios = require("axios");
module.exports.config = {
    name: "keobo",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SINGU-💌💌",
    description: "Game kéo bò",
    commandCategory: "Game",
    usages: "keobo",
    cooldowns: 0
};
module.exports.run = async ({ api, event, Threads, args, Currencies }) => {
const { threadID, messageID, senderID } = event;
  if(args[0] == "help"){
  let imag = (await axios.get("https://i.imgur.com/VYf0UGv.jpg", {
        responseType: "stream"
      })).data;
  var msg = { body: 'kéo bò thì là kéo bò chứ đòi hỏi gì ba =)))',
attachment: imag 
}
    return api.sendMessage(msg, threadID, messageID)
  }
if(!args[0] || isNaN(args[0])){
    return api.sendMessage('Bạn Chưa Nhập Hoặc Nhận Một Số Không Hợp Lệ', threadID, messageID)
    }
 else {
   if (await checkMoney(senderID, 50) == false){return api.sendMessage('Yêu cầu có ít nhất 50$ để tham gia!', threadID, messageID)}
     await Currencies.decreaseMoney(senderID, parseInt(args[0]));
var tile_1 = Math.floor(Math.random() * 100)
    var tile_2 = Math.floor(Math.random() * 100)
    var tile_3 = Math.floor(Math.random() * 100)
    var tile_4 = Math.floor(Math.random() * 100)
    var tile_5 = Math.floor(Math.random() * 100)
  var sotien_1 = args[0]
  var sotien_2 = args[0] * 2
  var sotien_3 = args[0] * 12
  var sotien_4 = args[0] * 144
  var sotien_5 = args[0] * 2880
let gif = (await axios.get("https://i.ibb.co/2dgF3vf/keobogif.gif", {
        responseType: "stream"
      })).data;
  const cuoc = parseInt(args[0])
  var msg = { body: `Chọn bò:\n1. Bò 1 [${sotien_1}$] || Tỷ Lệ ${tile_1}\n2. Bò 2 [${sotien_2}$] || Tỷ Lệ ${tile_2}\n3. Bò 3 [${sotien_3}$] || Tỷ Lệ ${tile_3}\n4. Bò 4 [${sotien_4}$] || Tỷ Lệ ${tile_4}\n5. Bò 5 [${sotien_5}$] || Tỷ Lệ ${tile_5}\nReply tin nhắn này với số`,
   attachment: gif
}
return api.sendMessage(msg, threadID, (err, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: senderID,
            cuoc
        });
    }, messageID)
}
   async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return false;
        else return true;
    }
}
module.exports.handleReply = async ({ api, Currencies, event, handleReply }) => {
const { threadID, senderID, messageID, body } = event;
  const { cuoc, author } = handleReply;
   const dataMoney = await Currencies.getData(senderID);
    const moneyUser = dataMoney.money;
if (author !== senderID) { return api.sendMessage('Bạn Không Phải Người Chơi Nên Không Thể Reply Tin Nhắn Này', threadID, messageID)};
 if(!("keobo" in global.client)) global.client.keobo = {}
 if(isNaN(body)) return api.sendMessage("Bạn phải nhập một số!", threadID);
if(1 > body || body > 5) return api.sendMessage("Bạn chỉ có thể chọn từ 1 đến 5", threadID, messageID);
  if(body == "1"){
    var tienan = cuoc,
    win = "https://i.ibb.co/VH1jcVH/bo1-success.jpg",
      losse = "https://i.ibb.co/JCNFMF1/bo1-fail.jpg"
  }
  else if(body == "2"){
    var tienan = cuoc * 2,
    win = "https://i.ibb.co/cX2BN8Q/bo2-success.jpg",
      losse = "https://i.ibb.co/473dpvW/bo2-fail.jpg"
  }
  else if(body == "3"){
    var tienan = cuoc * 12,
    win = "https://i.ibb.co/vhkgzS4/bo3-success.jpg",
      losse = "https://i.ibb.co/42r5pPd/bo3-fail.jpg"
  }
  else if(body == "4"){
    var tienan = cuoc * 144,
    win = "https://i.ibb.co/gb0fbPS/bo4-success.jpg",
      losse = "https://i.ibb.co/hMfRHHr/bo4-fail.jpg"
  }
  else if(body == "5"){
    var tienan = cuoc * 2880,
    win = "https://i.ibb.co/RTSKc7q/bo5-success.jpg",
      losse = "https://i.ibb.co/sFRsTr2/bo5-fail.jpg"
  }
  if( moneyUser < tienan){
    return api.sendMessage(`Bạn Không Đủ Tiền Để Chọn Con Bò Số ${body} với số tiền là ${tienan} và bạn còn thiếu ${tienan - moneyUser}`, threadID)
  } else {
  
var msg = `Bạn đã chọn bò ${body} và số tiền có thể bạn nhận được là ${tienan}!\nNhập "kéo" để bắt đầu\nvà liên tục nhập "kéo" trong 10s sau đó để kéo bò`;

const keobo = (msg, bo) => api.sendMessage(msg, threadID, (err, info) => {
        global.client.keobo[senderID] = {
            spam: 10,
            count: 0,
            bo,
            stt: body,
            author: senderID,
            tienan: tienan,
          win: win,
          lose: losse
        }
    })
keobo(msg, body.trim())
}
}
module.exports.handleEvent = async({ api, event, Currencies, Users }) => {
  const { threadID, senderID, body } = event;
    if(!("keobo" in global.client)) global.client.keobo = {};
    if (!([senderID] in global.client.keobo)) return;
    const { increaseMoney, decreaseMoney } = Currencies;
  if(body == "kéo" || body == "Kéo") {
        global.client.keobo[senderID].count++;
     if (global.client.keobo[senderID].count > 1) return;
    setTimeout(async () => {
      let name1 = await Users.getNameUser(senderID)
      let reward = global.client.keobo[senderID].tienan * 2
      let type_bo = global.client.keobo[senderID].stt
       let type_bo_win = global.client.keobo[senderID].win
      let type_bo_lose = global.client.keobo[senderID].lose
      if( type_bo == '1'){
        var choose = ["true", "false"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 5){
        let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} đã kéo hụt!\nMất ${global.client.keobo[senderID].tienan}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} đã kéo trúng!\nNhận ${reward}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      } else if( type_bo == '2'){
        var choose = ["true", "false", "false", "false","false","true"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 7){
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} đã kéo hụt!\nMất ${global.client.keobo[senderID].tienan}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} đã kéo trúng!\nNhận ${reward}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      } 
      else if( type_bo == '3'){
        var choose = ["true", "false", "false", "false","false","true","false","false"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 8){
let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} đã kéo hụt!\nMất ${global.client.keobo[senderID].tienan}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} đã kéo trúng!\nNhận ${reward}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      } else if( type_bo == '4'){
        var choose = ["true", "false", "false", "false","false","true","false","false","false","false","false","false","false","true"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 9){
      let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} đã kéo hụt!\nMất ${global.client.keobo[senderID].tienan}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} đã kéo trúng!\nNhận ${reward}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      }
      else if( type_bo == '5'){
        var choose = ["true", "false", "false", "false","false","true","false","false","false","false","false","false","false","true","true","false","fale","fale"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 10){
       let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} đã kéo hụt!\nMất ${global.client.keobo[senderID].tienan}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} đã kéo trúng!\nNhận ${reward}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
        }}}, 10000);
    }
  }
