module.exports.config = {
    name: "callndh",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SINGU-💌💌",
    description: "Gửi tin nhắn đến các ADMIN",
    commandCategory: "Đóng góp ý kiến",
    usages: "< nội dung >",
    cooldowns: 5,
  };
  
  module.exports.handleReply = async function({ api, args, event, handleReply, Users }) {
    try {
        if (event.senderID == api.getCurrentUserID()) return;
      var name = (await Users.getData(event.senderID)).name;
      var s = [];
      var l = [];
      const fs = require('fs-extra');
      const { join } = require('path');
      const axios = require('axios');
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      var charactersLength = characters.length || 20;
      if (event.attachments.length != 0) {
        for (var p of event.attachments) {
          var result = '';
          for (var i = 0; i < charactersLength; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
          if (p.type == 'photo') {
            var e = 'jpg';
          }
          if (p.type == 'video') {
            var e = 'mp4';
          }
          if (p.type == 'audio') {
            var e = 'mp3';
          }
          if (p.type == 'animated_image') {
            var e = 'gif';
          }
          var o = join(__dirname, 'cache', `${result}.${e}`);
          let m = (await axios.get(encodeURI(p.url), { responseType: "arraybuffer" })).data;
          fs.writeFileSync(o, Buffer.from(m, "utf-8"));
          s.push(o);
          l.push(fs.createReadStream(o));
        }
      };
      switch (handleReply.type) {
          
        case "reply": {
            var ls = require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
          var idad = global.config.NDH;
          var ex = (await Users.getNameUser(handleReply.author));
          if (s.length == 0) {
            for (let ad of idad) {
              api.sendMessage({
                body: `→ Phản hồi từ: ${name}\n→ Đến NDH: ${ex}\n→ Tại tin nhắn: ${handleReply.body}\n-------------------------------\n→ ${event.body || "Không có nội dung"}\n-------------------------------\n→ Thời gian: ${ls}`}, ad, (e, info) => global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                messID: event.messageID,
                author: event.senderID,
                id: event.threadID,
                body: event.body,
                type: "calladm"
              }));
            }
          }
          else {
            var ls = require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
            for (let ad of idad) {
              api.sendMessage({
                body: `→ Phản hồi từ: ${name}\n→ Đến NDH: ${ex}\n→ Tại tin nhắn: ${handleReply.body}\n-------------------------------\n→ ${event.body || "Không có nội dung"}\n-------------------------------\n→ Thời gian: ${ls}`, attachment: l }, ad, (e, info) => global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                messID: event.messageID,
                author: event.senderID,
                id: event.threadID,
                body: event.body,
                type: "calladm"
              }));
              for (var b of s) {
                fs.unlinkSync(b);
              }
            }
          }
          break;
        }
        case "calladm": {
            var ls = require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
          if (s.length == 0) {
            api.sendMessage({ body: `→ Phản hồi từ NDH: ${name}\n→ Tại tin nhắn: ${handleReply.body}\n-------------------------------\n→ Tin nhắn: ${event.body || "Không có nội dung"}\n-------------------------------\n→ Hãy phản hồi tin nhắn bằng video, ảnh, voice để gửi tiếp đến NDH\n→ Thời gian: ${ls}` }, handleReply.id, (e, info) => global.client.handleReply.push({
              name: this.config.name,
              author: event.senderID,
              body: event.body,
              messageID: info.messageID,
              type: "reply"
            }), handleReply.messID);
            var s = global.config.NDH;
            for (let o of s) {
            var user = await Users.getNameUser(handleReply.author);
            api.sendMessage({	body: `→ NDH: ${name}\n→ Đã phản hồi đến thành viên: ${user}\n→ Tại tin nhắn: ${handleReply.body || "Tệp"}\n-------------------------------\n→ Tin nhắn: ${event.body}\n-------------------------------\n→ Thời gian: ${ls}`
          
        },o)
    }
          }
          else {
            api.sendMessage({ body: `→ Phản hồi từ NDH: ${name}\n→ Tại tin nhắn: ${handleReply.body}\n-------------------------------\n→ Tin nhắn: ${event.body || "Không có nội dung"}\n-------------------------------\n→ Hãy phản hồi tin nhắn bằng video, ảnh, voice để có thể gửi tiếp cho NDH\n→ Thời gian: ${ls}`, attachment: l }, handleReply.id, (e, info) => global.client.handleReply.push({
              name: this.config.name,
              author: event.senderID,
              messageID: info.messageID,
              body: event.body,
              type: "reply"
            }), handleReply.messID);
            for (var b of s) {
              fs.unlinkSync(b);
            }
            var s = global.config.NDH;
            for (let o of s) {
            var user = await Users.getNameUser(handleReply.author);
            api.sendMessage({	body: `→ NDH: ${name}\n→ Đã phản hồi đến thành viên: ${user}\n→ Tại tin nhắn: ${handleReply.body || "Tệp"}\n-------------------------------\n→ Tin nhắn: ${event.body || "Chỉ có tệp"}\n-------------------------------\n→ Thời gian: ${ls}`, attachment: l
        },o)
    }
          }
        }
      }
    }
    catch (ex) {
      console.log(ex);
    }
  };
  
  module.exports.run = async function({ api, event, Threads, args, Users }) {
    try {
      var s = [];
      var l = [];
      const fs = require('fs-extra');
      const { join } = require('path');
      const axios = require('axios');
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      var charactersLength = characters.length || 20;
      if (event.messageReply) {
      if (event.messageReply.attachments.length != 0) {
        for (var p of event.messageReply.attachments) {
          var result = '';
          for (var i = 0; i < charactersLength; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
          if (p.type == 'photo') {
            var e = 'jpg';
          }
          if (p.type == 'video') {
            var e = 'mp4';
          }
          if (p.type == 'audio') {
            var e = 'mp3';
          }
          if (p.type == 'animated_image') {
            var e = 'gif';
          }
          var o = join(__dirname, 'cache', `${result}.${e}`);
          let m = (await axios.get(encodeURI(p.url), { responseType: "arraybuffer" })).data;
          fs.writeFileSync(o, Buffer.from(m, "utf-8"));
          s.push(o);
          l.push(fs.createReadStream(o));
        }
      }
    }
      if (!args[0] && event.messageReply.attachments.length == 0)
        return api.sendMessage(
          "Bạn chưa nhập nội dung cần gửi cho NDH",
          event.threadID,
          event.messageID
        );
  
      var name = (await Users.getData(event.senderID)).name;
      var idbox = event.threadID;
  
      var datathread = (await Threads.getData(event.threadID)).threadInfo;
      var namethread = datathread.threadName;
  
      const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
      var soad = global.config.NDH.length;
      api.sendMessage(
    `→ Đã gửi thành công tin nhắn của bạn đến NDH\n→ Thời gian: ${gio}`,
        event.threadID,
        () => {
          var idad = global.config.NDH;
          if (s.length == 0) {
            for (let ad of idad) {
              api.sendMessage({ body: `→ Báo cáo từ: ${name}\n→ Tên nhóm: ${namethread}\n→ ID nhóm: ${idbox}\n→ ID thành viên: ${event.senderID}\n-------------------------------\n→ Tin nhắn: ${args.join(" ")}\n-------------------------------\n→ Thời gian: ${gio}`},
                ad, (error, info) =>
                global.client.handleReply.push({
                  name: this.config.name,
                  messageID: info.messageID,
                  body: event.body,
                  author: event.senderID,
                  messID: event.messageID,
                  id: idbox,
                  type: "calladm"
                })
              );
            }
          }
          else {
            for (let ad of idad) {
              api.sendMessage({
                body: `→ Báo cáo từ: ${name}\n→ Tên nhóm: ${namethread}\n→ ID nhóm: ${idbox}\n→ ID thành viên: ${event.senderID}\n-------------------------------\n→ Tin nhắn: ${args.join(" ") || "Không có nội dung"}\n-------------------------------\n→ Thời gian: ${gio}`, attachment: l
              },
                ad, (error, info) =>
                global.client.handleReply.push({
                  name: this.config.name,
                  messageID: info.messageID,
                  body: event.body,
                  author: event.senderID,
                  messID: event.messageID,
                  id: idbox,
                  type: "calladm"
                })
              );
            }
            for (var b of s) {
              fs.unlinkSync(b);
            }
          }
        }
        , event.messageID);
    }
    catch (ex) {
      console.log(ex);
    }
  };