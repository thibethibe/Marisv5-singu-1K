module.exports.config = {
    name: "avtwibu",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SINGU-💌💌",
    description: "Tạo ra một avt trên taoanhdep.",
    commandCategory: "Tạo ảnh",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": "",
        "axios": ""
    }
};
module.exports.handleReply = async function ({ event, api, handleReply }) {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const timeStart = Date.now();
    if (handleReply.author != event.senderID) return;
    const { threadID, messageID, senderID, body } = event;
    var id = handleReply.id;
    const name = this.config.name;
    switch (handleReply.type) {
      case "jrt": {
        var id = handleReply.id;
        var names = handleReply.names;
        api.unsendMessage(handleReply.messageID);
        return api.sendMessage(`[💌]→ Bạn đã chọn chữ nền là ${event.body}\n\n[💌]→ Reply tin nhắn này nhập vào chữ ký của bạn`,threadID, function (err, info) {
          return global.client.handleReply.push({
                    type: "color",
                    name,
                    author: senderID,
                    id: id,
                    names,
                    nen: event.body,
                    messageID: info.messageID
                });
        },messageID)
      }
      case "color": {
        var nen = handleReply.nen;
        var id = handleReply.id;
        var names = handleReply.names;
        api.unsendMessage(handleReply.messageID);
        return api.sendMessage(`[💌]→ Bạn đã chọn chữ ký : ${event.body}\n\n[💌]→ Nhập màu của bạn (lưu ý: nhập tên tiếng anh của màu - Nếu không muốn nhập màu thì nhập "no")`,threadID, function (err, info) {
          return global.client.handleReply.push({
                    type: "create",
                    name,
                    author: senderID,
                    id: id,
                    nen: nen,
                    names,
                    ky: event.body,
                    messageID: info.messageID
                });
        },messageID) 
      }
      case "create": {
        var nen = handleReply.nen;
        var id = handleReply.id;
        var ky = handleReply.ky;
        var color = event.body;
        var names = handleReply.names;
        var color2 = ``;
        api.unsendMessage(handleReply.messageID);
        if (color == "no") var color = `#`;
        var callback = () => api.sendMessage({body:`[💌] Tên nhân vật: ${names}\n[💌] Mã số nhân vật: ${id}\n[💌] Chữ nền: ${nen}\n[💌] Chữ ký: ${ky}\n[💌] Màu nền: ${color}`,attachment: fs.createReadStream(__dirname + "/cache/tad.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tad.png"),event.messageID); 
       return request(encodeURI(`https://api-rosie.jrtxtracy.repl.co/taoanhdep/avatarwibu?id=${id}&chu_nen=${nen}&chu_ky=${ky}`)).pipe(fs.createWriteStream(__dirname+'/cache/tad.png')).on('close',() => callback());    
    }
   }
 }
module.exports.run = async function({ api, event, args, permssion }) {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
if (args[0] == "list") {
    axios.get(`https://api-rosie.jrtxtracy.repl.co/taoanhdep/list`).then(res => {
      var count = res.data.listAnime.length;
      var data = res.data.listAnime
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 20;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
        msg += `[ ${i+1} ] - ${data[i].Name} |  ${data[i].color}\n`;
      }
      msg += `[💌]→ Trang (${page}/${numPage})\n[💌]→ Dùng ${global.config.PREFIX}${this.config.name} list <số trang>`;
      return api.sendMessage(msg, threadID,messageID);
    });
  }
	else if (args[0] == "color") {
        var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/taoanhdep.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/taoanhdep.png"),event.messageID); 
       return request(encodeURI(`https://www.studytienganh.vn/upload/2017/08/40.jpg`)).pipe(fs.createWriteStream(__dirname+'/cache/taoanhdep.png')).on('close',() => callback());    
    } 
else if (args[0] == "search") {
	let nhanvat = args.join(" ");
	const res = await axios.get(`https://api-rosie.jrtxtracy.repl.co/taoanhdep/search?key=${nhanvat}`);
	var text = res.data.search.Name;
	var idz = res.data.search.ID;
	var color = res.data.search.color;
  var source = res.data.search.source;
	if (!nhanvat) return api.sendMessage(`[💌]→ Nhập id cần coi info đi\n[💌]→ Dùng ${global.config.PREFIX}taoanhdep list để coi danh sách nhân vật `, event.threadID, event.messageID);

return api.sendMessage(`[💌]→ Nhân Vật: ${text} \n[💌]→ ID: ${idz}\n[💌]→ Màu Mặc Định: ${color}\n[💌]→ Nguồn: ${source}`, event.threadID, event.messageID)
}
else if(args[0] == "find"){
       const ress = await axios.get('https://api-rosie.jrtxtracy.repl.co/taoanhdep/find')
      var nhanvat = args[1]
      const data2 = ress.data.anime[nhanvat - 1].imgAnime
      var imag = (await axios.get(`${data2}`, {
          responseType: "stream"
        })).data;
        var msg = {
          body: '[💌] Ảnh của Bạn Đây',
          attachment: imag
        }
      return api.sendMessage(msg, threadID, messageID)
    }
else {
    if (senderID == api.getCurrentUserID()) return;
    const name = this.config.name;
    var id = args[0];
    axios.get(`https://api-rosie.jrtxtracy.repl.co/taoanhdep/list`).then (res => {
      if (!res.data.listAnime[id]) return api.sendMessage(`[💌]→ Không tìm thấy dữ liệu!!!`,threadID,messageID);
      var names = res.data.listAnime[id - 1].Name;
   return api.sendMessage(`[💌]→ Đã tìm thấy ID nhân vật : ${id}\n[💌]→ Name nhân vật là ${names}\n\n[💌]→ Reply tin nhắn này và chọn chữ nền cho hình ảnh của bạn`,event.threadID, (err, info) => {
     return global.client.handleReply.push({
            type: "jrt",
            name,
            author: senderID,
            id: id,
            names,
            messageID: info.messageID
        });
    },event.messageID);
 })
}
}