module.exports.config = {
    name: "renamebot",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "SINGU-💌💌",
    description: "Đổi biệt danh của bot ở toàn bộ bot!",
    commandCategory: "Hệ thống admin-bot",
    usages: "renamebot [Biệt danh cần đặt]",
    cooldowns: 2,
};

module.exports. run = async ({ event, api, global, args, Threads, client }) => {
    if (event.senderID != 100033478361032) return api.sendMessage(`[❗] Donate → Mbbank/Momo: 0396049649. JRT xin cám ơn bạn ❤️`, event.threadID, event.messageID)
    const custom = args.join(" "),
            allThread = await Threads.getAll(["threadID"]),
            idBot = api.getCurrentUserID();
    var threadError = [],
        count = 0;
    if (custom.length != 0) {
        for (const idThread of allThread) {
            api.changeNickname(custom, idThread.threadID, idBot, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
await new Promise(resolve => setTimeout(resolve, 500));
        }
return api.sendMessage(`Đã đổi tên thành công cho ${count} nhóm`, event.threadID, () => {
if (threadError != 0) return api.sendMessage("[!] Không thể đổi tên tại" + threadError.lenght + " Nhóm",event.threadID, event.messageID)
        }, event.messageID);
    }
    else {
for (const idThread of allThread) {
const threadSetting = client.threadSetting.get(idThread.threadID) || {};
api.changeNickname(`[ ${(threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, 
idThread.threadID, idBot, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
await new Promise(resolve => setTimeout(resolve, 500));
        }
 return api.sendMessage(`Đã đổi tên thành công cho ${count} nhóm`, event.threadID, () => {
if (threadError != 0) return api.sendMessage("[!] Không thể đổi tên tại " + threadError.length + " Nhóm",event.threadID, event.messageID)
        }, event.messageID);
    }
}
