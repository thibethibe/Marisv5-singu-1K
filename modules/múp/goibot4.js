const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot4",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "SINGU-💌💌",
  description: "goibot",
  commandCategory: "Không xài lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = ["hmmmm", "Đừng spam em nha :<<", "Đừng để em nóng!!!", "cậu gọi bot có gì không?", "mệt kêu hoài -.-", "Chăm chỉ học hành đi", "Bae ăn cơm chưa?", "Tuyển phi công nè ạ", "Nếu cậu đang cô đơn thì chúng ta có thể thành đôi :3", "Đang làm gì vậy?", "Được của ló :)))", "Làm chồng em không ạ?", "đi ga chỗ khác chơi", "Công chúa em sao đấy?", "Có gì ăn không:(( đói quáaa", "Yêu em không?", "cậu bị làm sao í@@", "Bạn là nhất!!!", "Kêu chi lắm thế? Bộ thích tao rồi à :v", "Chần chờ gì chồng ơi em đâyyy", "Em... Sao em lại nói những cái lời đó chi zay em?", "Thầy dạy phờ ri màaa", "Yeu em rat nhieu ^^", "Đồ con lợn lùn :))", "Đợi xí. Đi ẻ cái :()", "500k bao phòng!!!", "Yeu anh den luy ^^", "Nên nhớ đừng bao giờ cướp ghệ của admin :))", "Anh quát em à?\nNói to thế á?", "Trả quần cho em huhu", "Baby, take my hand. I want you to be my husband. Cause you're my Iron Man. And I love you 3000 <3", "Tao cười tao đi toilet=))", "Hãy nên nhớ, cuộc tình nào cũng có lúc tàn phai", "hoa hồng nở rộ 4 mùa...nối tiếp đi:)", "lalalalaaaa", "Đừng quá yêu một ai đó, khi chính bản thân bạn vẫn bị tổn thương!", "Bae, em nhu bong hoa. Nhung nguoi hai dau phai ta 💔", "Nuôi cậu để thịt ~~", "Overnight không?", "Hãy gọi cho admin tôi để được yêu thương<3", "Hát đi cho kẹo 🍭", "vợ gọi có việc gì không?", "Dzạaaaaa~~~", "gọi bot có gì hemm :3", "Dzạ em đây :>", "sao thế bae yêu dấu :>", "Sao thế công chúa", "Được của ló :)))", "Nếu một ngày nào đó bạn gọi tôi mà tôi không trả lời nghĩa là bot bị payyy acccc ;-;", "Em đây", "chào bạn tôi là bot của Des", "Vợ gọi có việc gì không?", "Sử dụng •callad để liên lạc với admin!", "Em đây~~~~", "Yêu anh Des nhất", "chị ấy là bae của Des", "Sao thế công chúa nhõng nhẽo của em", "Đừng làm em đau ~~~~", "Tuyển máy bay trực thăng nè ai yêu em hog", "Cậu có cô đơn ko để mik tâm sự", "Yêu ko ạ vã quá!!!", "bot dthw như chủ của bot ạ", "Đừng khen anh ngại quá hí hí" ,"Làm vợ anh ko ạ?", "Đừng spam anh nha :<<, cậu chủ anh mệt lắm ời", "Cút ra😏 tớ có vợ rồi😏🖕", "Ai Làm Vợ Em Hog?", "Alaba Trap", "không được spam bot nhé các bae", "Yêu anh ko?", "Vợ anh đây rồi", "chủ tớ là thứ hai hong ai là nhất", "làm Vợ em đuy😏", "Chủ Em Đẹp Zai Khoai To Lắm UwU", "Yêu Tất Cả Mụi Người:3", "Tuyển Ghệ nè các bbi😏🖕y ạ :3"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "singu")) {
    return api.sendMessage(" 𝙭𝙞𝙣 𝙘𝙝𝙖̀𝙤 𝙗𝙖̣𝙣, 𝙩𝙤̂𝙞 𝙡𝙖̀ 𝙨𝙞𝙣𝙜𝙪 𝙣𝙝𝙖", threadID);
  };

  if ((event.body.toLowerCase() == "ơ")) {
    return api.sendMessage("𝙤̛ 𝙘𝙖́𝙞 𝙘𝙝𝙤́ 𝙜𝙞𝙚̂̀, 𝙘𝙝𝙪̛𝙖 𝙩𝙝𝙖̂́𝙮 𝙗𝙖𝙤 𝙜𝙞𝙤̛̀ 𝙖̀,", threadID);
  };

   if ((event.body.toLowerCase() == "có")) {
    return api.sendMessage("𝙘𝙤́ 𝙘𝙖́𝙞 𝙣𝙞̣𝙩 𝙣𝙝𝙖 🥰🥰🥰", threadID);
  };

  if ((event.body.toLowerCase() == "cho")) {
    return api.sendMessage("𝖈𝖍𝖔 𝖈𝖆́𝖎 𝖉𝖆́𝖎 𝖓𝖍𝖆̀ 𝖒𝖆̀𝖞. 𝕿𝖚̛̣ 𝖑𝖆̀𝖒 𝖆̀𝖒 𝖆̆𝖓 😠", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "da")) {
    return api.sendMessage("Ngoan đấy tặng cậu 10 anh ny đẹp zai", threadID);
  };

  if ((event.body.toLowerCase() == "xin") || (event.body.toLowerCase() == "Vũ")) {
    return api.sendMessage("𝖃𝖎𝖓 𝖈𝖆́𝖎 𝖌𝖎̀ 𝖛𝖆̣̂𝖞, 𝖇𝖔𝖙 𝖐𝖍𝖔̂𝖓𝖌 𝖍𝖎𝖊̂̉𝖚 <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "a singu") || (event.body.toLowerCase() == "a vũ")) {
    return api.sendMessage("𝓐𝓷𝓱 𝓪̂́𝔂 𝓽𝓾𝔂 𝓴𝓸 𝓭𝓮̣𝓹 𝓽𝓻𝓪𝓲 𝓱𝓪𝔂 𝓰𝓲𝓸̉𝓲 𝓰𝓲̀ 𝓷𝓱𝓾̛𝓷𝓰 𝓭𝓾̛𝓸̛̣𝓬 𝓬𝓪́𝓲 𝓱𝓪̀𝓲 𝓱𝓾̛𝓸̛́𝓬 𝓿𝓪̀ 𝓵𝓾𝓸̂𝓷 𝓶𝓸𝓷𝓰 𝓭𝓪̣𝓽 𝓭𝓾̛𝓸̛̣𝓬 𝓶𝓾̣𝓬 𝓽𝓲𝓮̂𝓾 𝓪𝓷𝓱 𝓪̂́𝔂 𝓶𝓾𝓸̂́𝓷 <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "@singu") || (event.body.toLowerCase() == "@vũ")) {
    return api.sendMessage("𝓐𝓲 𝓴𝓮̂𝓾 𝓬𝓱𝓾̉ 𝓽𝓪𝓸 𝓭𝓪̂́𝔂, 𝓶𝓪̀ 𝓵𝓪̀𝓶 𝓸̛𝓷 𝓭𝓾̛̀𝓷𝓰 𝓽𝓪𝓰 𝓪𝓷𝓱 𝓪̂́𝔂 𝓶𝓪̀ 𝓱𝓪̃𝔂 𝓵𝓲𝓮̂𝓷 𝓱𝓮̣̂ 𝓺𝓾𝓪 𝓕𝓫: 𝓱𝓽𝓽𝓹𝓼://𝔀𝔀𝔀.𝓯𝓪𝓬𝓮𝓫𝓸𝓸𝓴.𝓬𝓸𝓶/100074293234284", threadID);
  };

  if ((event.body.toLowerCase() == "singu ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("nói , tao còn phải phục vụ các box khác nữa :)", threadID);
  };

  if ((event.body.toLowerCase() == "singu ơi") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ngại lắm thôi yêu admin của bot nhé :))", threadID);
  };

   if ((event.body.toLowerCase() == "Thắng") || (event.body.toLowerCase() == "yeu anh")) {
    return api.sendMessage("𝕮𝖆́𝖎 𝖌𝖎̀ 𝖈𝖔̛, 𝖌𝖔̣𝖎 𝖙𝖆𝖔 𝖆̀", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }