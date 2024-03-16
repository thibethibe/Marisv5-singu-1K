module.exports.config = {
  name: "nhanluot",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "SINGU-💌💌",//Mod by SINGU-💌💌
  description: "Nhận tiền + lượt dùng Bot mỗi ngày",
  commandCategory: "Tài chính",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 21600000,
        rewardCoin: 10000
    }
};

module.exports.languages = {
    "vi": {
        "cooldown": "Bạn đang trong thời gian chờ lệnh, vui lòng thử lại sau: %1 giờ %2 phút %3 giây",
        "rewarded": "Bạn đã nhận %1$ và %2 lượt dùng Bot, để có thể tiếp tục nhận, vui lòng quay lại sau 24 tiếng"
    },
    "en": {
        "cooldown": "You received today's rewards, please come back after: %1 hours %2 minutes %3 seconds.",
        "rewarded": "You received %1$ and %2 times to use bot, to continue to receive, please try again after 12 hours"
    }
}

const fs = require("fs");
const path = __dirname + '/../../includes/handle/usages.json';

module.exports.onLoad = () => {
  if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
}

module.exports.run = async ({ event, api, Currencies, getText }) => {
    const { daily } = global.configModule,
        cooldownTime = daily.cooldownTime,
        rewardCoin = daily.rewardCoin;

    var { senderID, threadID } = event;

    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldownTime - (Date.now() - (data.dailyCoolDown || 0)) > 0) {
        var time = cooldownTime - (Date.now() - data.dailyCoolDown),
            seconds = Math.floor( (time/1000) % 60 ),
            minutes = Math.floor( (time/1000/60) % 60 ),
            hours = Math.floor( (time/(1000*60*60)) % 24 );

    return api.sendMessage(getText("cooldown", hours, minutes, (seconds < 10 ? "0" : "") + seconds), threadID);
    }

    else return api.sendMessage(getText("rewarded", rewardCoin, 100), threadID, async () => {
        let dataM = JSON.parse(fs.readFileSync(path));
        dataM[senderID].usages += 100;
        fs.writeFileSync(path, JSON.stringify(dataM, null, 4));
        await Currencies.increaseMoney(senderID, rewardCoin);
        data.dailyCoolDown = Date.now();
        await Currencies.setData(senderID, { data });
        return;
    });
}