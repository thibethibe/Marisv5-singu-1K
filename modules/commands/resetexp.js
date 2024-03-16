module.exports.config = {
    name: "resetexp",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "JRT",
    description: "Xóa dữ liệu đếm tin nhắn",
    commandCategory: "Hệ thống admin-bot",
    usages: "[cc] [del] [all]",
    cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies }) => {
    const data = await api.getThreadInfo(event.threadID);
    for (const user of data.userInfo) {
        var currenciesData = await Currencies.getData(user.id)
        if (currenciesData != false) {
            var exp = currenciesData.exp;
            if (typeof exp != "undefined") {
                exp -= exp;
                await Currencies.setData(user.id, { exp });
            }
        }
    }
    return api.sendMessage("[⚜️]→ Số tin nhắn của thành viên nhóm đã được reset về mức 0 !", event.threadID);
}