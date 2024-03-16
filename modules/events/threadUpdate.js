module.exports.config = {
    name: "threadUpdate",
    eventType: ["log:thread-admins", "log:thread-name", "log:user-nickname", "log:thread-color", "log:thread-icon", "log:thread-approval-mode"],
    version: "1.0.1",
    credits: "SINGU-💌💌",
    description: "Cập nhật thông tin nhóm một cách nhanh chóng"
};
module.exports.run = async function({
    event,
    api,
    Threads
}) {
    const {
        threadID,
        logMessageType,
        logMessageData
    } = event;
    let getDataThread = await Threads.getData(threadID) || {}
  const { data, threadInfo } = getDataThread
      if (typeof !data.threadUpdate == "undefined" || data.threadUpdate.status == false) return
    try {
        switch (logMessageType) {
            case "log:thread-admins": {
                if (logMessageData.ADMIN_EVENT == "add_admin") {
                    threadInfo.adminIDs.push({
                        id: logMessageData.TARGET_ID
                    })
                    if (typeof data.threadUpdate == "undefined" || data.threadUpdate.send == true) api.sendMessage(`[ Thread Update ] Đã cập nhật người dùng ${logMessageData.TARGET_ID} trở thành quản trị viên nhóm`, threadID, async (error, info) => {
                        if (typeof data.threadUpdate == "undefined" || data.threadUpdate.unsend == true) {
                            await new Promise(resolve => setTimeout(resolve, typeof data.threadUpdate == "undefined" ? 10 : data.threadUpdate.timeout * 1000));
                            return api.unsendMessage(info.messageID);
                        } else return;
                    });
                } else if (logMessageData.ADMIN_EVENT == "remove_admin") {
                    threadInfo.adminIDs = threadInfo.adminIDs.filter(item => item.id != logMessageData.TARGET_ID);
                    if (typeof data.threadUpdate == "undefined" || data.threadUpdate.send == true) api.sendMessage(`[ Thread Update ] Đã cập nhật người dùng ${logMessageData.TARGET_ID} trở thành thành viên`, threadID, async (error, info) => {
                        if (typeof data.threadUpdate == "undefined" || data.threadUpdate.unsend == true) {
                            await new Promise(resolve => setTimeout(resolve, typeof data.threadUpdate == "undefined" ? 10 : data.threadUpdate.timeout * 1000));
                            return api.unsendMessage(info.messageID);
                        } else return;
                    });
                }
                break;
            }
            case "log:user-nickname": {
                threadInfo.nicknames[logMessageData.participant_id] = logMessageData.nickname;
                if (typeof global.configModule["nickname"] != "undefined" && !global.configModule["nickname"].allowChange.includes(threadID) && !threadInfo.adminIDs.some(item => item.id == event.author) || event.author == api.getCurrentUserID()) return;
                if (typeof data.threadUpdate == "undefined" || data.threadUpdate.send == true) api.sendMessage(`[ Thread Update ] Đã cập nhật biệt danh của người dùng ${logMessageData.participant_id} thành: ${(logMessageData.nickname.length == 0) ? "tên gốc": logMessageData.nickname}`, threadID, async (error, info) => {
                    if (typeof data.threadUpdate == "undefined" || data.threadUpdate.unsend == true) {
                        await new Promise(resolve => setTimeout(resolve, typeof data.threadUpdate == "undefined" ? 10 : data.threadUpdate.timeout * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }
            case "log:thread-name": {
                threadInfo.threadName = event.logMessageData.name || "Không tên";
                if (typeof data.threadUpdate == "undefined" || data.threadUpdate.send == true) api.sendMessage(`[ Thread Update ] Đã cập nhật tên nhóm thành ${threadInfo.threadName}`, threadID, async (error, info) => {
                    if (typeof data.threadUpdate == "undefined" || data.threadUpdate.unsend == true) {
                        await new Promise(resolve => setTimeout(resolve, typeof data.threadUpdate == "undefined" ? 10 : data.threadUpdate.timeout * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }
            case "log:thread-color": {
                threadInfo.themeColor = {
                  name: logMessageData.theme_name_with_subtitle,
                  emoji: logMessageData.theme_emoji
          }
                if (typeof data.threadUpdate == "undefined" || data.threadUpdate.send == true) api.sendMessage(`[ Thread Update ] Đã cập nhật chủ đề nhóm thành ${threadInfo.themeColor.name}, emoji ${threadInfo.themeColor.emoji}`, threadID, async (error, info) => {
                    if (typeof data.threadUpdate == "undefined" || data.threadUpdate.unsend == true) {
                        await new Promise(resolve => setTimeout(resolve, typeof data.threadUpdate == "undefined" ? 10 : data.threadUpdate.timeout * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }
            case "log:thread-icon": {
                threadInfo.threadIcon = logMessageData.thread_icon
                if (typeof data.threadUpdate == "undefined" || data.threadUpdate.send == true) api.sendMessage(`[ Thread Update ] Đã cập nhật icon nhóm thành ${threadInfo.threadIcon}`, threadID, async (error, info) => {
                    if (typeof data.threadUpdate == "undefined" || data.threadUpdate.unsend == true) {
                        await new Promise(resolve => setTimeout(resolve, typeof data.threadUpdate == "undefined" ? 10 : data.threadUpdate.timeout * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }
            case "log:thread-approval-mode": {
                threadInfo.approvalMode = logMessageData.APPROVAL_MODE
                if (typeof data.threadUpdate == "undefined" || data.threadUpdate.send == true) api.sendMessage(`[ Thread Update ] Đã ${threadInfo.approvalMode == 1 ? "bật" : "tắt"} tính năng xét duyệt`, threadID, async (error, info) => {
                    if (typeof data.threadUpdate == "undefined" || data.threadUpdate.unsend == true) {
                        await new Promise(resolve => setTimeout(resolve, typeof data.threadUpdate == "undefined" ? 10 : data.threadUpdate.timeout * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }
        }
        await Threads.setData(threadID, {
            threadInfo
        });
        await global.data.threadInfo.set(threadID, threadInfo)
    } catch (e) {
        console.log(e)
    };
}