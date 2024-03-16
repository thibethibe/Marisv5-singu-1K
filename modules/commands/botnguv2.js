module.exports.config = {
    name: "noprefix",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SINGU-💌💌",
    description: "Nói bot ngu đi - ăn ban",
    commandCategory: "noprefix",
    usages: "",
    cooldowns: 0
};

module.exports.handleEvent = ({ event, api }) => (event.body.toLowerCase() == "bot ngu") ? api.sendMessage("Chúc mừng mày đã bị tao ban", event.threadID, () => 
                    global.data.userBanned.set(parseInt(event.senderID), 1): '';
module.exports.run = () => {}
