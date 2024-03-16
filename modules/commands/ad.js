const request = require('request');

const fs = global.nodemodule["fs-extra"]

module.exports.config = {

  name: "ad",

  version: "1.0.0",

  hasPermssion: 0,

  credits: "SINGU-💌💌",

  description: "Kiểm tra thông tin adminbot",

  commandCategory: "Thông tin",

  usages: "ad",

  cooldowns: 0,

  dependencies: {

"request": ""

}

};
module.exports.run = async({api,event,args,Users,global,Currencies}) => {

var callback = () => api.sendMessage(

  {body:`[💌]=== 『 INFORMATION ADMIN 』 ===[💌]
◆━━━━━━━━━━━━━━━━◆


[👀]➜ Tên: Hiếu kawaii 
[💮]➜ Biệt danh: Hiếu kawaii 
[❎]➜ Ngày tháng năm sinh: 24/05/2000
[👤]➜ Giới tính: Nam
[💫]➜ Chiều cao cân nặng: 1m75 x 68 kg
[💘]➜ Mối quan hệ: Sadboiz cô đơn
[🌎]➜ Quê quán: Sao Hoả 
[🌸]➜ Tính cách: Hòa đồng, năng nổ, dứt khoát, thân thiện và hài hước
[🌀]➜ Sở thích: GYM,Football,coi sếch jav

[💌]=== 『 CONTACT 』 ===[💌]
◆━━━━━━━━━━━━━━━━◆

[👉]➜ Information: SINGU-💌💌 
[☎]➜ SĐT & Zalo: 0396416146
0[🌐]➜ Facebook: https://www.facebook.com/100074293234284
[✉️]➜ Email: sng7850@gmail.com

[💌]=== 『 PROBLEM 』 ===[💌]
◆━━━━━━━━━━━━━━━━◆


[❗]➜ Mọi thắc mắc hay bot không hoạt động có thể hỏi trực tiếp admin theo các link ở trên.
[📌]➜ Hãy đồng hành cùng BOT và mình nhé. Cảm ơn mọi người <3

✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

[📝]➜ Bot được điều hành bởi Hiếu Kawaii`,

    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 

    fs.unlinkSync(__dirname + "/cache/1.png"));  

      return request(

        encodeURI(`https://graph.facebook.com/${100075885595966}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(

fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());

       };