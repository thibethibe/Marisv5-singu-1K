const fs = require('fs');
const ytdl = require('ytdl-core');
const { resolve } = require('path');
async function downloadMusicFromYoutube(link, path) {
  var timestart = Date.now();
  if(!link) return 'Thiếu link'
  var resolveFunc = function () { };
  var rejectFunc = function () { };
  var returnPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
  });
    ytdl(link, {
            filter: format =>
                format.quality == 'tiny' && format.audioBitrate == 48 && format.hasAudio == true
        }).pipe(fs.createWriteStream(path))
        .on("close", async () => {
            var data = await ytdl.getInfo(link)
            var result = {
                title: data.videoDetails.title,
                dur: Number(data.videoDetails.lengthSeconds),
              publishDate:
data.videoDetails.publishDate,                    
                viewCount: data.videoDetails.viewCount,
                likes: data.videoDetails.likes,
                author: data.videoDetails.author.name,
                timestart: timestart
            }
            resolveFunc(result)
        })
  return returnPromise
}
module.exports.config = {
    name: "sing3",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SINGU-💌💌",
    description: "Phát nhạc thông qua link YouTube hoặc từ khoá tìm kiếm",
    commandCategory: "tiện ích",
    usages: "[searchMusic]",
    cooldowns: 0
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
    const axios = require('axios')
    const { createReadStream, unlinkSync, statSync } = require("fs-extra")
    try {
        var path = `${__dirname}/cache/1.mp3`
        var data = await downloadMusicFromYoutube('https://www.youtube.com/watch?v=' + handleReply.link[event.body -1], path);
        if (fs.statSync(path).size > 26214400) return api.sendMessage('Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => fs.unlinkSync(path), event.messageID);
        api.unsendMessage(handleReply.messageID)
        return api.sendMessage({ 
		body: `====『 𝗠𝗨𝗦𝗜𝗖 』====
[🎼] ➠ 𝐓𝐢𝐭𝐥𝐞: ${data.title}\n[📺] ➠ 𝐓𝐞̂𝐧 𝐤𝐞̂𝐧𝐡: ${data.author}\n[⏰] ➠ 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${this.convertHMS(data.dur)}\n[👀] ➠ 𝐋𝐮̛𝐨̛̣𝐭 𝐱𝐞𝐦: ${data.viewCount}\n[💞] ➠ 𝐋𝐮̛𝐨̛̣𝐭 𝐭𝐡𝐢́𝐜𝐡: ${data.likes}\n 𝗡𝗴𝗮̀𝘆 𝘁𝗮̉𝗶 𝗹𝗲̂𝗻: ${data.publishDate}\n[⏳] ➠ 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐱𝐮̛̉ 𝐥𝐲́: ${Math.floor((Date.now()- data.timestart)/1000)} giây\n📺====『 𝗠𝗨𝗦𝗜𝗖 』====📺`,
            attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
         event.messageID)
            
    }
    catch (e) { return console.log(e) }
}
module.exports.convertHMS = function(value) {
    const sec = parseInt(value, 10); 
    let hours   = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60); 
    let seconds = sec - (hours * 3600) - (minutes * 60); 
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return (hours != '00' ? hours +':': '') + minutes+':'+seconds;
}
module.exports.run = async function ({ api, event, args }) {
    if (args.length == 0 || !args) return api.sendMessage('» Phần tìm kiếm không được để trống!', event.threadID, event.messageID);
    const keywordSearch = args.join(" ");
    var path = `${__dirname}/cache/1.mp3`
    if (fs.existsSync(path)) { 
        fs.unlinkSync(path)
    }
    if (args.join(" ").indexOf("https://") == 0) {
        try {
            var data = await downloadMusicFromYoutube(args.join(" "), path);
            if (fs.statSync(path).size > 26214400) return api.sendMessage('Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => fs.unlinkSync(path), event.messageID);
            return api.sendMessage({ 
                body: `➠Title: ${data.title}\n➠Name Kênh: ${data.author}\n➠Thời gian: ${this.convertHMS(data.dur)}\n➠Lượt xem: ${data.viewCount}\n➠Lượt thích: ${data.likes}\n➠Thời gian xử lý: ${Math.floor((Date.now()- data.timestart)/1000)} giây\n💿====DISME PROJECT====💿`,
                attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
            event.messageID)
            
        }
        catch (e) { return console.log(e) }
    } else {
          try {
            var link = [],
                msg = "",
                num = 0
            const Youtube = require('youtube-search-api');
            var data = (await Youtube.GetListByKeyword(keywordSearch, false,6)).items;
            for (let value of data) {
              link.push(value.id);
              num = num+=1
              msg += (`${num} - ${value.title} (${value.length.simpleText})\n\n`);
            }
            var body = `»🔎 𝗖𝗼́ ${link.length} 𝗸𝗲̂́𝘁 𝗾𝘂𝗮̉ 𝘁𝗿𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝘁𝘂̛̀ 𝗸𝗵𝗼𝗮́ 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻:\n\n${msg}» 𝗛𝗮̃𝘆 𝗿𝗲𝗽𝗹𝘆(𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶) 𝗰𝗵𝗼̣𝗻 𝗺𝗼̣̂𝘁 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝘂̛̃𝗻𝗴 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺 𝘁𝗿𝗲̂𝗻`
            return api.sendMessage({
              body: body
            }, event.threadID, (error, info) => global.client.handleReply.push({
              type: 'reply',
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              link
            }), event.messageID);
          } catch(e) {
            return api.sendMessage('Đã xảy ra lỗi, vui lòng thử lại trong giây lát!!\n' + e, event.threadID, event.messageID);
        }
    }
                             } 