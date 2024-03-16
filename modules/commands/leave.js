module.exports.config = {
    name: "leave",
    version: "1.1.1",
    hasPermssion: 1,
    credits: "SINGU-💌💌",
    description: "Bật/tắt thông báo tham gia nhóm",
    commandCategory: "Box chat",
    usages: "",
    cooldowns: 0
}
module.exports.run = async function({
    api: a,
    event: e,
    args: g,
    Threads: T
}) {
    const {
        threadID: t,
        messageID: m,
        senderID: s
    } = e
    let getDataThread = await T.getData(t) || {}
    const {
        data,
        threadInfo
    } = getDataThread
    if (typeof data.leaveNoti == "undefined") {
        data.leaveNoti = {
            status: true,
            storage: []
        }
        await T.setData(t, {
            data
        });
        await global.data.threadData.set(t, data)
    }
    const status = data.leaveNoti.status == true ? false : true
    data.leaveNoti.status = status
    await T.setData(t, {
        data
    });
    await global.data.threadData.set(t, data)
    var msg = `» Đã ${status == true ? "bật" : "tắt"} thông báo khi user rời nhóm`
    a.sendMessage(msg, t, m)
}