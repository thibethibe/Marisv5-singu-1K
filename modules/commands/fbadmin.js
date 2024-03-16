module.exports.config = {
  name: "fbadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SINGU-💌💌",
  description: "Kiểm tra thông tin fb admin .",
  commandCategory: "Thông tin admin",
  usages: "fb",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"", 
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/eEUQ0Lr.mp4",
"https://i.imgur.com/UDy5Uu1.mp4",
"https://i.imgur.com/9IedWfa.mp4",
"https://i.imgur.com/1ToRgVK.mp4",
"https://i.imgur.com/8EhUaUf.mp4",
];
  var callback = () => api.sendMessage({body:`𝐅𝐛 𝐀𝐝𝐦𝐢𝐧 `,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };