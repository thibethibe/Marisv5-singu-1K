module.exports.config = {
	name: "help",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "Hướng dẫn cho người mới",
	commandCategory: "Dành cho người dùng",
	usages: "[Tên module]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 60
	}
};

module.exports.languages = {
	"vi": {
		"moduleInfo": " 『 %1 』 \n%2\n\n》 Cách sử dụng: %3\n》 Thuộc nhóm: %4\n》Thời gian chờ: %5 giây(s)\n》 Quyền hạn: %6\n\n 𝑴𝒅𝒍 đ𝒖̛𝒐̛̣𝒄 𝒕𝒂̣𝒐 𝒃𝒐̛̉𝒊 %7",
		"helpList": '🤍Số lệnh hiện có: %1🖤\nSử dụng "!help" từng lệnh ở trên để biết cách sử dụng.\n📣Help sẽ tự động gỡ sau 99s\nĐiều hành bot bởi Hiếu kawaii Entertainment ♥️',
		"user": "Người dùng",
        "adminGroup": "Quản trị viên nhóm",
        "adminBot": "Quản trị viên bot"
	},
	"en": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
}

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports.run = function({ api, event, args, getText }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  const namebot = global.config.BOTNAME

	if (!command) {
		const command = commands.values();
		var group = [], msg = "";
		for (const commandConfig of command) {
			if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
			else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
		}
		group.forEach(commandGroup => msg += `
🖤─────────🤍──────────🖤\n=「 ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} 」=\n${commandGroup.cmds.join(', ')}\n\n`);
		return api.sendMessage(`====「 ${namebot} 」====\n\n` + msg + getText("helpList", commands.size, prefix), threadID, (err, info) => setTimeout(() => api.unsendMessage(info.messageID), 100000),messageID);
		

	}

	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}