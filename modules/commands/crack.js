module.exports.config = {
	name: "crack",
	version: "1.0",
	hasPermssion: 2,
	credits: "SINGU-💌💌",
	description: "Crack Premium Fca-Horizon-Remake",
	commandCategory: "Hệ thống admin-bot",
	usages: "crack",
	cooldowns: 10000
};

module.exports.onLoad = () => {
    console.log("\x1b[1;32m%s\x1b[0m", 'Module Crack Premium Fca-Horizon-Remake Được Tạo Bởi KanzuWakazaki Đã Hoạt Động');
    process.env.HalzionVersion = 1973;
    globalThis.Fca.Data.PremText = 'Bạn Đang Sài Phiên Bản: Premium Crack !';
}

module.exports.run = async function({ api, event }) {
    return api.sendMessage('Đang tải...', event.threadID, async () => {
        if (process.env.HalzionVersion != 1973) {
            api.sendMessage('Bạn chưa crack thành công fca-horizon-remake =))', event.threadID, async function() {
                await new Promise(resolve => setTimeout(resolve, 2000));
                api.sendMessage('Tiến hành crack very instance =))', event.threadID);
                process.env.HalzionVersion = 1973;
                globalThis.Fca.Data.PremText = 'Bạn Đang Sài Phiên Bản: Premium Crack !';
                await new Promise(resolve => setTimeout(resolve, 1000));
                return api.sendMessage('Crack thành công =))', event.threadID);
            });
        }
        else return api.sendMessage('Bạn đã crack thành công fca-horizon-remake =))', event.threadID);
    });
};
