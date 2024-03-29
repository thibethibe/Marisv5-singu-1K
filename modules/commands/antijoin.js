module.exports.config = {
 name: "antijoin",
 version: "1.0.0",
 credits: "SINGU-💌💌",
 hasPermssion: 1,
 description: "Cấm thành viên mới vào nhóm",
 usages: "antijoin",
 commandCategory: "Hệ thống quản trị viên",
 cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('[💌]➜ 𝕓𝕠𝕥 cần quyền quản trị viên nhóm', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data.newMember == "undefined" || data.newMember == false) data.newMember = true;
    else data.newMember = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`[💌]➜ Đã ${(data.newMember == true) ? "bật" : "tắt"} thành công antijoin ( chế độ chống trẩu vô box )`, event.threadID, event.messageID);
}