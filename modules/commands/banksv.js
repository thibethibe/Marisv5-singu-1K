module.exports.config = {
  name: "banksv",
  version: "BETA",
  hasPermssion: 0,
  credits: "SINGU-💌💌",
  description: "",
  commandCategory: "Coins",
  usages: "",
  cooldowns: 0,
};
module.exports.run = async function ({ api, args, event, Users, permssion, Currencies }) {
  const axios = require("axios")
  const fs = require('fs-extra');
  const request = require('request')
  const { threadID, messageID, senderID } = event;
  const lmao = (await Users.getData(senderID)).name
  var date = new Date();
  var duocsui = date.getDay();
  const dataMoney = await Currencies.getData(senderID);
  const moneyUser = dataMoney.money;
  if (duocsui == "9") {
    return api.sendMessage(`[ WARNING ] - Nay  CN không làm việc đâu`, threadID, messageID)
  }
  const araxy = await axios.get("https://api-van-tan.fca-tan.repl.co/")
  if (`${araxy.data.data}` == "false") {
    return api.sendMessage("[ ADMIN ] - ĐÃ ĐẬP SV", threadID, messageID)
  } else {
    if (args[0] == '-r' || args[0] == 'register') {
      const res = await axios.get(`https://api.vantan.repl.co/banking/register?uid=${senderID}&name=${encodeURI(lmao)}`)
      if (`${res.data.data}` == "gban" || `${res.data.data}` == "true") {
        return api.sendMessage(`${res.data.msg}`, threadID, messageID)
      }

      else {
        return api.sendMessage(`${res.data.msg}`, senderID, () => api.sendMessage("Đăng Ký Thành Công, Vui Lòng Check Tin Nhắn Chờ", event.threadID)
        )
      }
    }
    if (args[0] == 'dangkyvay' || args[0] == '-rvay') {
      const res = await axios.get(`https://Ryo-Api-Bank.hteendepzai004.repl.co/dangkyvay?uid=${senderID}&name=${encodeURI(lmao)}`)
      if (`${res.data.data}` == "gban" || `${res.data.data}` == "true") {
        return api.sendMessage(`${res.data.msg}`, threadID, messageID)
      }

      else {
        return api.sendMessage(`${res.data.msg}`, senderID, () => api.sendMessage("Đăng Ký Thành Công, Vui Lòng Check Tin Nhắn Chờ", event.threadID)
        )
      }
    }
    if (args[0] == 'reset' || args[0] == 'resetpass') {
      const res = await axios.get(`https://Ryo-Api-Bank.hteendepzai004.repl.co/resetpass?sender=${senderID}`)
      if (`${res.data.data}` == "gban" || `${res.data.data}` == "true") {
        return api.sendMessage(`${res.data.msg}`, senderID, () => api.sendMessage("[ PHỤC HỒI ] - Thành Công Check Tin Nhắn Chờ Đi", event.threadID)
        )
      }
      else {
        return api.sendMessage(`[ WARN ] - LỖI RỒI`, threadID, messageID)
      }
    }
    if (args[0] == '-f' || args[0] == 'find') {
      if (!args[1]) { return api.sendMessage("[ WARNING ]- Nhập Type Chưa Ạ?", threadID, messageID) };
      return api.sendMessage(`bạn chọn cách coi là bằng ${args[1]} reply tin nhắn này để nhập ${args[1]}`, event.threadID, async (err, info) => {
        return global.client.handleReply.push({
          type: "pay",
          name: this.config.name,
          author: senderID,
          pay: args[1],
          messageID: info.messageID
        });
      }, messageID);
    }
    if (args[0] == "all" || args[0] == "-a") {
      const res = await axios.get(`https://Ryo-Api-Bank.hteendepzai004.repl.co/all`)
      return api.sendMessage(`${res.data.data}`, threadID, messageID)
    }
    if (args[0] == "check" || args[0] == "-c") {
      var msg = { body: "[ BANK ] - Reply Tin Nhắn Này Để Nhập Pass" }
      api.sendMessage(msg, senderID,
        async (err, info) => {
          global.client.handleReply.push({
            thread: event.threadID,
            type: "check",
            name: this.config.name,
            lmao: threadID,
            find_type: args[1],
            author: senderID,
            messageID: info.messageID
          });
        })
      api.sendMessage("[ BANK ] - Check Tin Nhắn Chờ", threadID, messageID)
    }
    if (args[0] == "checkvay" || args[0] == "-cv") {
      var msg = { body: "[ BANK ] - Reply Tin Nhắn Này Để Nhập Pass" }
      api.sendMessage(msg, senderID,
        async (err, info) => {
          global.client.handleReply.push({
            thread: event.threadID,
            type: "check",
            name: this.config.name,
            lmao: threadID,
            find_type: args[1],
            author: senderID,
            messageID: info.messageID
          });
        })
      api.sendMessage("[ BANK ] - Check Tin Nhắn Chờ", threadID, messageID)
    }
    if (args[0] == "gửi" || args[0] == "send") {
      var money = args[1];
      if (!money || money < 50 || isNaN(money)) return api.sendMessage("[ BANK ] - Số Dư Không Đủ Để GD", threadID, messageID);
      if (moneyUser < money) return api.sendMessage(`[ BANK ] - Số Dư Không Đủ Để GD`, threadID, messageID);
      var msg = { body: "[ BANK ] - Reply Tin Nhắn Này Để Nhập Pass" }
      api.sendMessage(msg, senderID,
        async (err, info) => {
          global.client.handleReply.push({
            thread: event.threadID,
            type: "send",
            name: this.config.name,
            lmao: threadID,
            send: money,
            author: senderID,
            messageID: info.messageID
          });
        })
      api.sendMessage("[ BANK ] - Check Tin Nhắn Chờ", threadID, messageID)
    }
    if (args[0] == "gban" || args[0] == "gbanadd") {
      const res = await axios.get(`https://Ryo-Api-Bank.hteendepzai004.repl.co/gban?uid=${args[1]}&reson=${encodeURI(args.slice(2).join(" "))}&author=${event.senderID}`)
      if (`${res.data.data}` == "false") { return api.sendMessage(`${res.data.msg}`, threadID, messageID) } else {
        return api.sendMessage(`${res.data.msg}`, threadID, messageID)
      }
    }
    if (args[0] == "vay" || args[0] == "mượn") {
      var money = args[1];
      if (!money || money < 50 || isNaN(money)) return api.sendMessage("[ VAY ] - Số Dư Ít Quá Nên Không GD Đâu", threadID, messageID);
      var msg = { body: "[ VAY ] - Reply Tin Nhắn Này Để Nhập Pass" }
      api.sendMessage(msg, senderID,
        async (err, info) => {
          global.client.handleReply.push({
            thread: event.threadID,
            type: "vay",
            name: this.config.name,
            lmao: threadID,
            send: money,
            author: senderID,
            messageID: info.messageID
          });
        })
      api.sendMessage("[ VAY ] - Check Tin Nhắn Chờ", threadID, messageID)
    }
    if (args[0] == "trả") {
      var money = args[1];
      if (!money || money < 50 || isNaN(money)) return api.sendMessage("[ VAY ] - Số Dư Ít Quá Nên Không GD Đâu", threadID, messageID);
      var msg = { body: "[ VAY ] - Reply Tin Nhắn Này Để Nhập Pass" }
      api.sendMessage(msg, senderID,
        async (err, info) => {
          global.client.handleReply.push({
            thread: event.threadID,
            type: "trả",
            name: this.config.name,
            lmao: threadID,
            send: money,
            author: senderID,
            messageID: info.messageID
          });
        })
      api.sendMessage("[ VAY ] - Check Tin Nhắn Chờ", threadID, messageID)
    }
    if (args[0] == "pay") {
      var money = args[1];
      if (!money || money < 50 || isNaN(money)) return api.sendMessage("[ BANK ] - Số Dư Không Đủ Để GD", threadID, messageID);
      var msg = { body: `[ BANK ] - Số Tiền Bạn Muốn Chuyển Là ${args[1]} Reply Tin Nhắn Này Để Nhập Pass` }
      api.sendMessage(msg, senderID,
        async (err, info) => {
          global.client.handleReply.push({
            thread: event.threadID,
            type: "pay",
            name: this.config.name,
            lmao: threadID,
            paymm: money,
            author: senderID,
            messageID: info.messageID
          });
        })
      api.sendMessage("[ BANK ] - Check Tin Nhắn Chờ", threadID, messageID)
    }
    if (args[0] == "rút" || args[0] == "lấy") {
      var money = args[1];
      if (!money || isNaN(money)) return api.sendMessage("[ BANK ] - Không Phải Là Một Con Số", threadID, messageID);


      var msg = { body: "[ BANK ] - Reply Tin Nhắn Này Để Nhập Pass" }
      api.sendMessage(msg, senderID,
        async (err, info) => {
          global.client.handleReply.push({
            thread: event.threadID,
            type: "rút",
            name: this.config.name,
            lmao: threadID,
            sotien: money,
            author: senderID,
            messageID: info.messageID
          });
        })
      api.sendMessage("[ BANK ] - Check Tin Nhắn Chờ", threadID, messageID)
    }
    if (args[0] == "top") {
      const res = await axios.get(`https://api.vantan.repl.co/banking/topmoney`)
      return api.sendMessage(`${res.data.data}`, threadID, messageID)
    }
    if (args[0] == "changepass" || args[0] == "change") {
      var msg = { body: "[ BANK ] - Reply Tin Nhắn Này Để Nhập Pass" }
      api.sendMessage(msg, senderID,
        async (err, info) => {
          global.client.handleReply.push({
            thread: event.threadID,
            type: "changepass",
            name: this.config.name,
            author: senderID,
            messageID: info.messageID
          });
        })
      api.sendMessage("[ BANK ] - Check Tin Nhắn Chờ", threadID, messageID)
    }
    if (!args[0]) {
      const res = await axios.get("https://Ryo-Api-Bank.hteendepzai004.repl.co/home")
      var callback = () => api.sendMessage({ body: `${res.data.msg}`, attachment: fs.createReadStream(__dirname + "/cache/bank.jpg") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bank.jpg"), event.messageID);
      return request(encodeURI(`${res.data.link}`)).pipe(fs.createWriteStream(__dirname + '/cache/bank.jpg')).on('close', () => callback());
    }
  }
}
module.exports.handleReply = async function ({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
  const axios = require("axios")
  if (handleReply.author != event.senderID) return;
  const { threadID, messageID, senderID, body } = event;
  switch (handleReply.type) {
    case "find": {
      var find_type = handleReply.find_type;
      const res = await axios.get(`https://Ryo-Api-Bank.hteendepzai004.repl.co/find?luachon=${find_type}&find=${event.body}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, threadID, messageID)
      } else {
        return api.sendMessage(`${res.data.data}`, threadID, messageID)
      }
    }
      break;
    case "check": {
      var uh = handleReply.thread
      const res = await axios.get(`https://Ryo-Api-Bank.hteendepzai004.repl.co/check?senderID=${senderID}&pass=${encodeURI(event.body)}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, threadID, messageID)
      } else {
        return api.sendMessage(`${res.data.data}`, uh, () => api.sendMessage("[ BANK ] - NHẬP MẬT KHẨU ĐÃ ĐÚNG", threadID)
        )
      }
    }
      break;
    case "checkvay": {
      var uh = handleReply.thread
      const res = await axios.get(`https://Ryo-Api-Bank.hteendepzai004.repl.co/checkvay?senderID=${event.senderID}&pass=${encodeURI(event.body)}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, threadID, messageID)
      } else {
        return api.sendMessage(`${res.data.data}`, uh, () => api.sendMessage("[ BANK ] - NHẬP MẬT KHẨU ĐÃ ĐÚNG", threadID)
        )

      }
    }
      break;
    case "vay": {
      var uh = handleReply.thread;
      var money = handleReply.send;
      const res = await axios.get(`https://Ryo-Api-Bank.hteendepzai004.repl.co/vay?senderID=${senderID}&pass=${event.body}&sotien=${money}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, uh, () => api.sendMessage(`${res.data.msg}`, threadID)
        )
      } else {
        await Currencies.increaseMoney(senderID, parseInt(money));
        return api.sendMessage(`${res.data.data}`, uh, () => api.sendMessage("[ BANK ] - NHẬP MẬT KHẨU ĐÃ ĐÚNG", threadID)
        )
      }
    } break;
    case "trả": {
      var uh = handleReply.thread;
      var money = handleReply.send;
      const res = await axios.get(`https://Ryo-Api-Bank.hteendepzai004.repl.co/tra?senderID=${event.senderID}&pass=${event.body}&sotien=${money}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, uh, () => api.sendMessage(`${res.data.msg}`, threadID)
        )
      } else {
        await Currencies.decreaseMoney(senderID, parseInt(money));
        return api.sendMessage(`${res.data.data}`, uh, () => api.sendMessage("[ BANK ] - NHẬP MẬT KHẨU ĐÃ ĐÚNG", threadID)
        )
      }
    } break;
    case "send": {
      var uh = handleReply.thread;
      var money = handleReply.send;
      const res = await axios.get(`https://Ryo-Api-Bank.hteendepzai004.repl.co/send?senderID=${senderID}&sotien=${money}&pass=${encodeURI(event.body)}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, threadID, messageID)
      } else {
        await Currencies.decreaseMoney(senderID, parseInt(money));
        return api.sendMessage(`${res.data.data}`, uh, () => api.sendMessage("[ BANK ] - NHẬP MẬT KHẨU ĐÃ ĐÚNG", threadID)
        )
      }
    } break;
    case "rút": {
      var uh = handleReply.thread;
      var money = handleReply.sotien;
      const res = await axios.get(`https://Ryo-Api-Bank.hteendepzai004.repl.co/rut?senderID=${senderID}&sotien=${money}&pass=${encodeURI(event.body)}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, uh, () => api.sendMessage(`${res.data.msg}`, threadID)
        )
      } else {
        await Currencies.increaseMoney(senderID, parseInt(money));
        return api.sendMessage(`${res.data.data}`, uh, () => api.sendMessage("[ BANK ] - NHẬP MẬT KHẨU ĐÃ ĐÚNG", threadID)
        )
      }
    } break;
    case "pay": {
      return api.sendMessage(`[ BANK ] - Reply Tin Nhắn Này Để Nhập STK Mà Bạn Muốn Chuyển`, event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "pay_next",
          name: this.config.name,
          author: senderID,
          paymm: handleReply.paymm,
          thread: handleReply.thread,
          text2: event.body,
          messageID: info.messageID
        });
      }, messageID)
    }
    case "pay_next": {
      var paymm = handleReply.paymm;
      var thread = handleReply.thread;
      var text2 = handleReply.text2;
      var text3 = event.body;
      const res = await axios.get(`https://Ryo-Api-Bank.hteendepzai004.repl.co/pay?sotien=${paymm}&sender=${event.senderID}&nguoinhan=${text3}&pass=${text2}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, thread, () => api.sendMessage(`${res.data.msg}`, threadID)
        )
      } else {

        return api.sendMessage(`${res.data.data}`, thread, () => api.sendMessage("[ BANK ] - NHẬP MẬT KHẨU ĐÃ ĐÚNG", threadID)
        )
      }
    } break;
    case "changepass": {
      return api.sendMessage(`[ BANK ] - Bạn Nhập Pass Cũ Của Bạn Là: ${event.body}, Reply Tin Nhắn Này Để Nhập Pass Mới`, event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "next",
          name: this.config.name,
          author: senderID,
          text1: event.body,
          thread: handleReply.thread,
          messageID: info.messageID
        });
      }, messageID)
    }
    case "next": {
      var text1 = handleReply.text1;
      var thread = handleReply.thread;
      var text2 = event.body;
      const res = await axios.get(`https://Ryo-Api-Bank.hteendepzai004.repl.co/changepass?sender=${event.senderID}&pass=${text1}&newpass=${text2}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, thread, () => api.sendMessage(`${res.data.msg}`, threadID)
        )
      } else {
        return api.sendMessage(`[ BANK ] - Đổi Mật Khẩu Thành Công`, thread, () => api.sendMessage(`${res.data.data}`, threadID)
        )
      }
    }
  }
}