module.exports.config = {
 name: "antijoin",
 eventType: ["log:subscribe"],
 version: "1.0.0",
 credits: "SINGU-💌💌",
 description: "Cấm thành viên mới vào nhóm"
};

module.exports.run = async function ({ event, api, Threads, Users }) {
 	let data = (await Threads.getData(event.threadID)).data
 	if (data.newMember == false) return;
 	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) return
    else if(data.newMember == true) {
    var memJoin = event.logMessageData.addedParticipants.map(info => info.userFbId)
			for (let idUser of memJoin) {
					await new Promise(resolve => setTimeout(resolve, 1000));
					api.removeUserFromGroup(idUser, event.threadID, async function (err) {
                        if (err) return data["newMember"] = false;
                            await Threads.setData(event.threadID, { data });
                              global.data.threadData.set(event.threadID, data);
                    })
			}
 	return api.sendMessage(`[ERROR]- Nhóm của bạn đang bật anti join, vui lòng tắt trước khi thêm thành viên mới`, event.threadID);
 }
}