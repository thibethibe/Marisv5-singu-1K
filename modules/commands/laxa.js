const fs = require("fs");
module.exports.config = {
name: "laxa",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SINGU-💌💌",
    description: "Li xÃ¬ Ã ",
    commandCategory: "KhÃ´ng cáº§n dáº¥u lá»‡nh",
    usages: "ko cáº§n prefix chá»‰ cáº§n chat lÃ¬ xÃ¬",
    cooldowns: 5,
};
module.exports.event = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("lÃ¬ xÃ¬")==0 || (event.body.indexOf("LÃ¬ xÃ¬")==0)) {
        var msg = {
                body: "cc ðŸ™‚",
                attachment: fs.createReadStream(__dirname + `/noprefix/lixicailol.mp3`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}