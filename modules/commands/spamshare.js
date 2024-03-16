const fs = require("fs-extra");
const { resolve } = require("path");
module.exports.config = {
    name: "spamshare",
    version: "1.0.2",
    hasPermssion: 3,
    credits: "SINGU-💌💌",//mod by SINGU-💌💌
    description: "spamshareao",
    commandCategory: "Admin",
    usages: "spamshare link|delay|số lượng chia sẻ",
    cooldowns: 2
};
module.exports.run = async function ({ api, event, args }) {
    if (args[0] == 'stop') {
        const path = resolve(__dirname, 'cache', `tokencmt.json`);
        const dataJson = JSON.parse(fs.readFileSync(path))
        if (dataJson.stop) {
            clearInterval(global.timerIdShare)
            dataJson.stop = false
            fs.writeFileSync(path, JSON.stringify(dataJson, null, 2));
            return api.sendMessage("Đã dừng spam chia sẻ thành công", event.threadID)
        } else {
            return api.sendMessage("Hiện không có spam chia sẻ nào đang diễn ra", event.threadID)
        }
    } else {
        const list_id = [];
        const link = args[0];
        const delay = args[1];
        const solan = args[2];
        if (!link) return api.sendMessage(`Thiếu link bài viết\nVui lòng nhập theo định dạng\nspamshare link|delay|số lượng chia sẻ`, event.threadID, event.messageID);
        if (!delay) return api.sendMessage(`Thiếu thời gian chờ\nVui lòng nhập theo định dạng\nspamshare link|delay|số lượng chia sẻ`, event.threadID, event.messageID);
        if (!solan) return api.sendMessage(`Thiếu số lượng chia sẻ\nVui lòng nhập theo định dạng\nspamshare link|delay|số lượng chia sẻ`, event.threadID, event.messageID);
        if (delay < 0 || delay == 0) return api.sendMessage("Thời gian chờ không thể là 0 hoặc nhỏ hơn 0", event.threadID)

        api.sendMessage("✅Nhận lệnh spam chia sẻ", event.threadID)

        async function EventNew() {
            const path = resolve(__dirname, 'cache', `tokencmt.json`);
            const dataJson = JSON.parse(fs.readFileSync(path))
            const axios = require('axios');
            const token = dataJson.live[Math.floor(Math.random() * dataJson.live.length)]
            dataJson.stop = true
            fs.writeFileSync(path, JSON.stringify(dataJson, null, 2));
            axios.get(`https://graph.facebook.com/me/feed?method=POST&link=${link}&published=0&access_token=${token}`).then((response) => {
                console.log('Thành công: Tạo chia sẻ ảo với ID:', response.data.id, '\nVtuan')
                list_id.push(response.data.id)
                if (list_id.length >= solan) {
                    api.sendMessage('Tạo thành công ' + list_id.length + ' share ảo', event.threadID)
                    clearInterval(global.timerIdShare)
                }
            }).catch((err) => {
                const removedToken = dataJson.live.splice(dataJson.live.findIndex(item => item == token), 1)
                dataJson.live = dataJson.live
                dataJson.die.push(removedToken[0])
                fs.writeFileSync(path, JSON.stringify(dataJson, null, 2));
                const path1 = resolve(__dirname, 'cache', `tokenshare.json`);
                const dataJson1 = JSON.parse(fs.readFileSync(path1))
                if (dataJson1.live.length == 0) {
                    clearInterval(global.timerIdShare)
                    return api.sendMessage("Hết Token LIVE, vui lòng đổi token mới", event.threadID)
                }
            })
        }
        global.timerIdShare = setInterval(EventNew, delay * 1000)
    }
}
