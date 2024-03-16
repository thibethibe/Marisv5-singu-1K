module.exports.config = {
    name: "clearcache",
    version: "0.0.2",
    hasPermssion: 3,
    credits: "SINGU-💌💌",
    description: "Clear Cache By Horizon Premium",
    commandCategory: "Horizon Premium",
    usages: "ClearCache  Adding",
    cooldowns: 5
};

module.exports.handleReply = async function({ api, event, handleReply }) {
    switch (handleReply.Case) {
        /*const permission = ["100013942628281"];
	if (!permission.includes(event.senderID)) return api.sendMessage("Lệnh này thuộc bên dữ liệu Code!! Vui lòng không sử dụng.", event.threadID, event.messageID);*/
        case 1:
            if (event.body == 'y' || event.body == 'Y') {
                api.sendMessage("Tiến Hành Clear Cache Theo AI !", event.threadID);
                return api.sendMessage(await api.Premium('ClearCache', {}),event.threadID);
            } else if (event.body == 'n' || event.body == 'N') {
                return api.sendMessage('Hãy Nhập Các Loại File Bạn Muốn Clear Cache\nCác Loại File Cho Phép: png,json,wav,mp3,mp4,jpg,txt,gif,tff,m4a\nHãy Phản Hồi Tin Nhắn Này Và Nhập Như Định Dạng Sau: png jpg wav ...', event.threadID, (error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 2 }));
            }
        break;
        case 2:
            if (event.body.includes(' ')) {
                var file = event.body.split(' ');
                api.sendMessage('Tiến Hành Clear Các Loại File: ' + event.body, event.threadID);
                return api.sendMessage(await api.Premium('ClearCache', { New: file }),event.threadID);
            } else {
                return api.sendMessage('Vui Lòng Nhập Lại Các Loại File Bạn Muốn Clear Cache\nCác Loại File Cho Phép: png,json,wav,mp3,mp4,jpg,txt,gif,tff,m4a\nHãy Phản Hồi Tin Nhắn Này Và Nhập Như Định Dạng Sau: png jpg wav ...', event.threadID, (error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 2 }));
            }
        break;
    } 
}

module.exports.run = async function({ api, event }) {
    return api.sendMessage('Bạn Muốn Clear Cache Theo AI(Tự Động) Hay Không?\nHãy Phản Hồi \'Y\' hoặc \'N\'', event.threadID,(error, info) => client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 1 }));
}