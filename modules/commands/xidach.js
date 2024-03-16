'use strict';
module.exports.config = {
	name: "xidach", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "1.3.1", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "SINGU-💌💌", // Công nhận module sở hữu là ai
	description: "Chơi xì dách", // Thông tin chi tiết về lệnh
	commandCategory: "Game", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "[create/join/leave/start]\n->\ncreate tiền_cược (tối thiểu 50$)\njoin tiền_cược (tối thiểu 50$)\nleave (rời ván xì dách đang tham gia ở nhóm)\nstart (bắt đầu ván xì dách mà bạn tạo ở nhóm)\n->", // Cách sử dụng lệnh
	cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
	dependencies: {
		"fs": "",
		"axios": ""
	}, //Liệt kê các package module ở ngoài tại đây để khi load lệnh nó sẽ tự động cài!
	envConfig: {
		"maxPlayers": 5, //khuyến nghị: 5, tối thiểu 2, tối đa 10
		"normalWinBonus": 1, //thưởng 100%
		"superWinBonus": 2, //thưởng 200%
		"epicWinBonus": 4,  //thưởng 400%
	}
};

module.exports.languages = {
	"vi": {
        "missingInput": "[ XIDACH ] Số tiền đặt cược không được để trống hoặc là số âm",
        "moneyBetNotEnough": "[ XIDACH ] Số số dư của bạn không đủ để làm nhà cái với mức cược: %1 đô\nBạn cần %2 đô!",
        "moneyBetNotEnough_2": "[ XIDACH ] Số số dư của bạn không đủ!",
        "limitBet": "[ XIDACH ] Số coin đặt không được dưới 50$!",
        "noGame": "[ XIDACH ] Nhóm của bạn không có ván xì dách nào đang diễn ra cả!",
        "xidachRules": "[ XIDACH ]\nNOTE:\nxì dách là: 1 A + 1 trong J Q K\nxì bàng: 2A\n\nLuật:\nđiểm từ 16 đến 21:\nngười chơi > nhà cái: win x1 thưởng\nvà ngược lại\n\nxì bàng > xì dách:\nngười chơi có xì bàng hoặc xì dách, nhà cái k có -> x4 thưởng\nngười chơi có xì bàng, nhà cái có xì dách -> x2 thưởng\nngười chơi có xì dách, nhà cái xì bàng -> Lose\n\nNgũ linh: 5 lá bài mà tổng điểm nhỏ hơn 21. Người chơi Win tuyệt đối. Trường hợp cả 2 bên đều ngũ linh, ai ít điểm hơn sẽ Win.\n\nQuá 21 điểm: 2 bên cùng quá thì ai ít điểm hơn sẽ Win. Quá 21 điểm thì Win bài thấp hơn 16 điểm (non).",
        "magic_five": "Ngũ Linh",
        "blackJack": "Xì Dách",
        "double_aces": "Xì Bàng (Bàn)",
        "points": " tuổi",
        "final": "[  KẾT QUẢ XÌ DÁCH  ]\n + %1 (Nhà Cái): %2",
        "get_or_ready": "[ %1 ]\nTổng số bài úp hiện có là: %2\n%3, hãy chọn get hoặc ready.",
        "out_of_time": "%1, đã qua 20s, bỏ qua.",
        "yourCards": "Bài của bạn: %1",
        "cards_limit": "Bạn đã đủ 5 lá, qua người kế.",
        "points_limit": "Bạn đã đủ hoặc hơn 21 tuổi, qua người kế.",
        "getSuccess": "Tổng số bài úp hiện có là: %1\nThành công! Tiếp tục chọn ready hoặc get!",
        "points_notEnough": "Điểm của bạn thấp hơn 16, không thể dằn, hãy get thêm",
        "ready": "Bạn đã chọn dằn bài!",
        "alreadyHave": "Đang có 1 ván xì dách diễn ra ở nhóm này!",
        "openSuccess": "Đã mở thành công! (1/%1)\nĐể tham gia, dùng:\n%2 join tiền_cược",
        "alreadyJoined": "Bạn đã ở trong phòng rồi",
        "out_of_room": "Đã hết chỗ rồi...",
        "alreadyStarted_1": "Ván đấu đã bắt đầu, không thể tham gia!",
        "overBet": "Số tiền bạn đặt lớn hơn số tiền tối đa nhà cái đưa ra (%1$)!",
        "joinSuccess": "Đã vào thành công! (%1/%2)",
        "author_left_before_start": "Vì chủ phòng đã rời khi chưa bắt đầu bot nên sẽ tự động kết thúc ván đấu!\nNhững người tham gia sẽ được hoàn lại tiền cược!",
        "outSuccess": "Đã out thành công! (%1/%2)",
        "not_yet_started": "Ván chưa bắt đầu nên bạn sẽ được hoàn tiền!",
        "playersNotEnough": "Không đủ người chơi, tối thiểu: 2, hiện có: 1",
        "not_author": "Bạn không phải chủ phòng",
        "alreadyStarted_2": "Ván đấu đang diễn ra!",
        "testInbox": "Đang kiểm tra tình trạng inbox người chơi..",
        "checkInbox_noti": "Bot sẽ gửi bài đến từng người, vui lòng check inbox/spam/tin nhắn chờ",
        "cannotInbox": "%1, bot không thể inbox bạn, vui lòng inbox bot trước để mở khóa inbox cho bot",
        "explaining": "Khi tới lượt của mình, hãy nhắn:\nget (lấy thêm bài, tối đa 3 lần, max 21 điểm)\nready (để dằn bài, không rút nữa)",
        "start_after_5s": "Đang chuẩn bị...",
        "started": "BẮT ĐẦU!",
        "notJoined": "Bạn chưa tham gia!"
	}
};

module.exports.cards = {
	31: "3_of_spades.png",
	32: "3_of_clubs.png",
	33: "3_of_diamonds.png",
	34: "3_of_hearts.png",
	41: "4_of_spades.png",
	42: "4_of_clubs.png",
	43: "4_of_diamonds.png",
	44: "4_of_hearts.png",
	51: "5_of_spades.png",
	52: "5_of_clubs.png",
	53: "5_of_diamonds.png",
	54: "5_of_hearts.png",
	61: "6_of_spades.png",
	62: "6_of_clubs.png",
	63: "6_of_diamonds.png",
	64: "6_of_hearts.png",
	71: "7_of_spades.png",
	72: "7_of_clubs.png",
	73: "7_of_diamonds.png",
	74: "7_of_hearts.png",
	81: "8_of_spades.png",
	82: "8_of_clubs.png",
	83: "8_of_diamonds.png",
	84: "8_of_hearts.png",
	91: "9_of_spades.png",
	92: "9_of_clubs.png",
	93: "9_of_diamonds.png",
	94: "9_of_hearts.png",
	101: "10_of_spades.png",
	102: "10_of_clubs.png",
	103: "10_of_diamonds.png",
	104: "10_of_hearts.png",
	111: "jack_of_spades2.png",
	112: "jack_of_clubs2.png",
	113: "jack_of_diamonds2.png",
	114: "jack_of_hearts2.png",
	121: "queen_of_spades2.png",
	122: "queen_of_clubs2.png",
	123: "queen_of_diamonds2.png",
	124: "queen_of_hearts2.png",
	131: "king_of_spades2.png",
	132: "king_of_clubs2.png",
	133: "king_of_diamonds2.png",
	134: "king_of_hearts2.png",
	11: "ace_of_spades.png",
	12: "ace_of_clubs.png",
	13: "ace_of_diamonds.png",
	14: "ace_of_hearts.png",
	21: "2_of_spades.png",
	22: "2_of_clubs.png",
	23: "2_of_diamonds.png",
	24: "2_of_hearts.png",
};

module.exports.onLoad = async () => {
	const fs = require("fs");
	await require('axios').get("https://raw.githubusercontent.com/J-JRT/version/mainV2/version.json").then(res => {
		if (res.data["xidachnb_x034"] != this.config.version) console.log("=== XIDACHNB ĐÃ CÓ PHIÊN BẢN MỚI, LIÊN HỆ J-JRT ĐỂ ĐƯỢC CẬP NHẬT ===");
	})
	let path = __dirname + '/poker/';
	if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true });
	await require("axios").get("https://raw.githubusercontent.com/J-JRT/poker/mainV2/data.json").then(async (res) => {
		for (let e in res.data) {
			if (fs.existsSync(path + e)) continue;
			await fs.writeFileSync(path + e, res.data[e], 'base64');
		}
	});
	if (!global.client.xidach_otm_nobot) global.client.xidach_otm_nobot = {};
	console.log("=== Zalo: 0396049649 ===");
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function countC(array) {
	let total = 0;
	array.forEach(e => {
		let num = 0;
		if (e >= 101) num = 10;
		else num = Math.floor((e / 10) % 10);
		total += num;
	});
	return total;
}

const nextUser = async (api, event, getText, Users, Currencies) => {
	var { threadID } = event;
	if (!global.client.xidach_otm_nobot[threadID]) return;
	global.client.xidach_otm_nobot[threadID].curUser++;
	if (global.client.xidach_otm_nobot[threadID].curUser == global.client.xidach_otm_nobot[threadID].data.length ) return endS(api, event, getText, Users, Currencies, global.client.xidach_otm_nobot[threadID]);
	let curU = global.client.xidach_otm_nobot[threadID].curUser;
	let curUserD = global.client.xidach_otm_nobot[threadID].data[curU];
	let name = await Users.getNameUser(curUserD.id) || "Player";
	let oldL = curUserD.cards.length;
	api.sendMessage({
		body: getText("get_or_ready", new Date().toLocaleString("en-US", {timeZone: 'Asia/Ho_Chi_Minh'}), global.client.xidach_otm_nobot[threadID].cards.length, name),
		mentions: [{
			tag: name,
			id: curUserD.id
		}]
	}, threadID, () => setTimeout(async () => {
		if (!global.client.xidach_otm_nobot[threadID]) return;
		let newCurUserD = global.client.xidach_otm_nobot[threadID].data[curU];
		if (oldL == newCurUserD.cards.length && !newCurUserD.ready) {
			api.sendMessage({
				body: getText("out_of_time", name),
				mentions: [{
					tag: name,
					id: curUserD.id
				}]
			}, threadID);
			await delay(300);
			return nextUser(api, event, getText, Users, Currencies);
		}
	}, 20000));
};

async function endS(api, event, getText, Users, Currencies, object) {
    const { increaseMoney } = Currencies;
	const { threadID } = event;

	var authorCards = object.data[object.players - 1].cards;
	var getAuthorPoint = countC(authorCards);
	var authorRank = (getAuthorPoint < 16) ? 0 : (getAuthorPoint <= 21) ? 2 : 1;
	if (getAuthorPoint == 2 && Math.floor((authorCards[0] / 10) % 10) == 1) authorRank = 5;
	if (getAuthorPoint == 11 && (authorCards[0] >= 111 && Math.floor((authorCards[1] / 10) % 10) == 1) || (authorCards[1] >= 111 && Math.floor((authorCards[0] / 10) % 10) == 1)) authorRank = 4;
	if (authorRank == 2 && authorCards.length == 5) authorRank = 3;

	var msg = getText("final", await Users.getNameUser(object.data[object.players - 1].id), (authorRank == 3) ? getText("magic_five") : (authorRank == 4) ? getText("blackJack") : (authorRank == 5) ? getText("double_aces") : (getAuthorPoint + getText("points")));
	var rank = 0, playerPoints = 0;
	var result = "";
	var supply_left = object.total_supply;
	let msg2 = "";
	for (let i = 0; i < object.players - 1; i++) {
		let playerD = object.data[i];
		playerPoints = countC(playerD.cards);
		rank = (playerPoints < 16) ? 0 : (playerPoints <= 21) ? 2 : 1;
		if (playerPoints == 2 && Math.floor((playerD.cards[0] / 10) % 10) == 1) rank = 5;
		if (playerPoints == 11 && (playerD.cards[0] >= 111 && Math.floor((playerD.cards[1] / 10) % 10) == 1) || (playerD.cards[1] >= 111 && Math.floor((playerD.cards[0] / 10) % 10) == 1)) rank = 4;
		if (rank == 2 && playerD.cards.length == 5) rank = 3;
		let bonus = (rank == 3) ? object.bonus.superWinBonus : (rank >= 4) ? object.bonus.epicWinBonus : 1;
		result = (authorRank > rank) ? `Lose (-${playerD.bet}$)` : `Win (+${playerD.bet + "$ x" + bonus})`;
		if (authorRank == rank) {
			result = (playerPoints == getAuthorPoint || rank >= 4) ? "Draw" : (rank == 1) ? (playerPoints < getAuthorPoint) ? `Win (+${playerD.bet + "$ x" + bonus})` : `Lose (-${playerD.bet}$)` : (rank == 2) ? (playerPoints > getAuthorPoint) ? `Win (+${playerD.bet + "$ x" + bonus})` : `Lose (-${playerD.bet}$)` : (rank == 3) ? (playerPoints < getAuthorPoint) ? `Win (+${playerD.bet + " x" + bonus}$)` : `Lose (-${playerD.bet}$)` : '';
		}
		if (result == "Draw") await increaseMoney(playerD.id, playerD.bet);
		else if (result.slice(0,4) != "Lose") await increaseMoney(playerD.id, parseInt(playerD.bet*(bonus + 1))).then(supply_left -= (playerD.bet*bonus));
		else supply_left += playerD.bet;
		let name = await Users.getNameUser(playerD.id) || "Player";
		msg2 += `\n + ${name}: ${(rank == 3) ? getText("magic_five") : (rank == 4) ? getText("blackJack") : (rank == 5) ? getText("double_aces") : (playerPoints + getText("points"))} | ` + result;
	}


	let authorGet = supply_left - object.total_supply;
	msg += ` (${((authorGet >= 0) ? `+${authorGet}` : `${authorGet}`)}$)`;
	msg += msg2;
	await increaseMoney(object.data[object.players - 1].id, supply_left);
	api.sendMessage(msg, threadID, () => delete global.client.xidach_otm_nobot[threadID]);
}

module.exports.handleEvent = async function({ event, api, getText, Users, Currencies }) {
	if (event.senderID == api.getCurrentUserID()) return;
	await delay(300);
	const fs = require("fs");
	if (!event.body) return;
	var { threadID, messageID, senderID, body } = event;
	body = body.toLowerCase();
	if (!global.client.xidach_otm_nobot) global.client.xidach_otm_nobot = {};
	if (!global.client.xidach_otm_nobot[threadID]) return;
	const sendC = (msg, callback) => api.sendMessage(msg, threadID, callback, messageID);
	const send = (msg) => sendC(msg, () => {});
	if (threadID in global.client.xidach_otm_nobot) {
		if (!"curUser" in global.client.xidach_otm_nobot[threadID]) return;
		if (global.client.xidach_otm_nobot[threadID].curUser < 0) return;
		let curU = global.client.xidach_otm_nobot[threadID].curUser;
		if (global.client.xidach_otm_nobot[threadID].data[curU] && global.client.xidach_otm_nobot[threadID].data[curU].id != senderID) return;
		if (body == "get") {
			global.client.xidach_otm_nobot[threadID].data[curU].cards.push(global.client.xidach_otm_nobot[threadID].cards.pop());
			let atms = [];
			global.client.xidach_otm_nobot[threadID].data[curU].cards.forEach(c => {
				atms.push(fs.createReadStream(__dirname + `/poker/${this.cards[c]}`));
			});
			api.sendMessage({
				body: getText("yourCards", countC(global.client.xidach_otm_nobot[threadID].data[curU].cards)),
				attachment: atms
			}, senderID);
			if (global.client.xidach_otm_nobot[threadID].data[curU].cards.length == 5) {
				send(getText("cards_limit"));
				await delay(1000);
				return nextUser(api, event, getText, Users, Currencies);
			}
			if (countC(global.client.xidach_otm_nobot[threadID].data[curU].cards) >= 21) {
				send(getText("points_limit"));
				await delay(1000);
				return nextUser(api, event, getText, Users, Currencies);
			}
			send(getText("getSuccess", global.client.xidach_otm_nobot[threadID].cards.length));
			let oldL = global.client.xidach_otm_nobot[threadID].data[curU].cards.length;
			setTimeout(async () => {
				if (!global.client.xidach_otm_nobot[threadID]) return;
				let newCurUserD = global.client.xidach_otm_nobot[threadID].data[curU];
				if (oldL == newCurUserD.cards.length && !newCurUserD.ready) {
					let curUserD = global.client.xidach_otm_nobot[threadID].data[curU];
					let name = await Users.getNameUser(curUserD.id) || "Player";
					api.sendMessage({
						body: getText("out_of_time", name),
						mentions: [{
							tag: name,
							id: curUserD.id
						}]
					}, threadID);
					await delay(300);
					return nextUser(api, event, getText, Users, Currencies);
				}
			}, 20000);
		}
		if (body == "ready") {
			if (countC(global.client.xidach_otm_nobot[threadID].data[curU].cards) < 16) {
				return send(getText("points_notEnough"));
			}
			send(getText("ready"));
			await delay(500);
			global.client.xidach_otm_nobot[threadID].data[curU].ready = true;
			return nextUser(api, event, getText, Users, Currencies);
		}
	}
};

module.exports.run = async function({ api, event, args, getText, Users, Currencies }) {
	if (!global.client.xidach_otm_nobot) global.client.xidach_otm_nobot = {};
    const { getData, increaseMoney, decreaseMoney } = Currencies;
	const { threadID, messageID, senderID } = event;
	const sendC = (msg, callback) => api.sendMessage(msg, threadID, callback, messageID);
	const sendTC = (msg, callback) => api.sendMessage(msg, threadID, callback);
	const sendT = (msg) => sendTC(msg, () => {});
	const send = (msg) => sendC(msg, () => {});
    const moneyUser = (await getData(senderID)).money;
	//getPrefix
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	//checkValid_maxPlayer
	if (global.configModule[this.config.name].maxPlayers < 2 || global.configModule[this.config.name].maxPlayers > 10) global.configModule[this.config.name].maxPlayers = 5;
	//well, happy new year!
	var moneyBet = 0;
	let max_player = global.configModule[this.config.name].maxPlayers;
	switch (args[0]) {
		case 'create':
			moneyBet = parseInt(args[1]);
		    if (isNaN(moneyBet) || moneyBet <= 0) return send(getText("missingInput"));
			if (moneyBet < 50) return send(getText("limitBet"));
			//balance count...
			let multiplyBy = (max_player <= 5) ? (1 + (max_player - 1) * 4) : (17 + (max_player - 5) * 2);
			if (moneyBet*multiplyBy > moneyUser) return send(getText("moneyBetNotEnough", moneyBet, moneyBet*multiplyBy));
			if (threadID in global.client.xidach_otm_nobot) send(getText("alreadyHave"));
			else sendTC(getText("openSuccess", max_player, prefix+this.config.name), async () => {
				await decreaseMoney(senderID, moneyBet*multiplyBy);
				global.client.xidach_otm_nobot[threadID] = {
					maximumBet: moneyBet,
					total_supply: moneyBet*multiplyBy,
					players: 1,
					status: "pending",
					data: [
						{
							id: senderID,
							bet: moneyBet,
							cards: [],
							type: "author"
						}
					],
					bonus: global.configModule[this.config.name]
				};
			});
			break;
		case "join":
			if (threadID in global.client.xidach_otm_nobot) {
				if (global.client.xidach_otm_nobot[threadID].data.find(p => p.id == senderID)) return send(getText("alreadyJoined"));
				if (global.client.xidach_otm_nobot[threadID].players == global.configModule[this.config.name].maxPlayers) return send(getText("out_of_room"));
				if (global.configModule[this.config.name].status == "started") return send(getText("alreadyStarted_1"));
				moneyBet = parseInt(args[1]);
			    if (isNaN(moneyBet) || moneyBet <= 0) return send(getText("missingInput"));
				if (moneyBet < 50) return send(getText("limitBet"));
				if (moneyBet > global.client.xidach_otm_nobot[threadID].maximumBet) return send(getText("overBet", global.client.xidach_otm_nobot[threadID].maximumBet));
				if (moneyBet > moneyUser) return send(getText("moneyBetNotEnough_2"));
				sendC(getText("joinSuccess", global.client.xidach_otm_nobot[threadID].players + 1, global.configModule[this.config.name].maxPlayers), async () => {
					await decreaseMoney(senderID, moneyBet);
					global.client.xidach_otm_nobot[threadID].players++;
					global.client.xidach_otm_nobot[threadID].data.push({
						id: senderID,
						bet: moneyBet,
						cards: [],
						type: "player"
					});
				});
			} else sendT(getText("noGame"));
			break;
		case "leave":
			if (threadID in global.client.xidach_otm_nobot) {
				if (!global.client.xidach_otm_nobot[threadID].data.find(p => p.id == senderID)) return send(getText("notJoined"));
				if (global.client.xidach_otm_nobot[threadID].data.find(p => p.id == senderID).type == "author" && global.client.xidach_otm_nobot[threadID].status == "pending") {
					return sendTC(getText("author_left_before_start"), () => {
						global.client.xidach_otm_nobot[threadID].data.forEach(async (p) => {
							if (p.id != api.getCurrentUserID() && p.id != global.client.xidach_otm_nobot[threadID].data[0].id) await increaseMoney(p.id, p.bet);
							if (p.id == global.client.xidach_otm_nobot[threadID].data[0].id) await increaseMoney(p.id,  global.client.xidach_otm_nobot[threadID].total_supply);
						});
						delete global.client.xidach_otm_nobot[threadID];
					});
				}
				sendC(getText("outSuccess", global.client.xidach_otm_nobot[threadID].players - 1, global.configModule[this.config.name].maxPlayers), async () => {
					global.client.xidach_otm_nobot[threadID].players -= 1;
					if (global.client.xidach_otm_nobot[threadID].status == "pending") sendC(getText("not_yet_started"), async() => {
						global.client.xidach_otm_nobot[threadID].data.forEach(async (p, i) => {
							if (p.id == senderID) {
								await increaseMoney(senderID, p.bet);
								global.client.xidach_otm_nobot[threadID].splice(i, 1);
							}
						});
					});
					global.client.xidach_otm_nobot[threadID].data.splice(global.client.xidach_otm_nobot[threadID].players, 1);
				});
			} else sendT(getText("noGame"));
			break;
		case "start":
			if (global.client.xidach_otm_nobot[threadID].players < 2) return send(getText("playersNotEnough"));
			const  fs = require("fs");

			var cardKeys = Object.keys(this.cards);
			for (let i = cardKeys.length - 1; i > 0; i--) {
			  const j = Math.floor(Math.random() * (i + 1));
			  [cardKeys[i], cardKeys[j]] = [cardKeys[j], cardKeys[i]];
			}
			if (threadID in global.client.xidach_otm_nobot) {
				if (!global.client.xidach_otm_nobot[threadID].data.find(p => p.id == senderID)) return send(getText("notJoined"));
				if (global.client.xidach_otm_nobot[threadID].data.find(p => p.id == senderID) && global.client.xidach_otm_nobot[threadID].data.find(p => p.id == senderID).type != "author") return send(getText("not_author"));
				if (global.client.xidach_otm_nobot[threadID].status == "started") return send(getText("alreadyStarted_2"));
				global.client.xidach_otm_nobot[threadID].status = "started";
				sendTC(getText("testInbox"), async () => {
					for (let i = 0; i < global.client.xidach_otm_nobot[threadID].data.length; i++) {
						let p = global.client.xidach_otm_nobot[threadID].data[i];
						if (p.id == api.getCurrentUserID()) continue;
						api.sendMessage("testing...", p.id, async (err) => {
							if (err) {
								let curName = await Users.getNameUser(p.id);
								api.sendMessage({
									body: getText("cannotInbox", curName),
									mentions: [{
										tag: curName,
										id: p.id
									}]
								}, threadID);
							}
						});
						await delay(2000);
					}
				});
				sendTC(getText("checkInbox_noti"), async () => {
					for (let i = 0; i < global.client.xidach_otm_nobot[threadID].data.length; i++) {
						try {
							let p = global.client.xidach_otm_nobot[threadID].data[i];
							let one = cardKeys.shift();
							let two = cardKeys.shift();
							global.client.xidach_otm_nobot[threadID].data[i].cards.push(one, two);
							var atms = [];
							atms.push(fs.createReadStream(__dirname + `/poker/${this.cards[one]}`));
							atms.push(fs.createReadStream(__dirname + `/poker/${this.cards[two]}`));
							if (p.id == api.getCurrentUserID()) continue;
							api.sendMessage({
								body: 'Bài của bạn: ' + countC(global.client.xidach_otm_nobot[threadID].data[i].cards),
								attachment: atms
							}, p.id);
							await delay(300);
						} catch(e) {
							console.log(e);
						}
					}
					sendTC(getText("explaining"), async () => {
						await delay(1000);
						let curU = -1;
						sendT(getText("start_after_5s"));
						await delay(5000);
						sendT(getText("started"));
						await delay(300);
						global.client.xidach_otm_nobot[threadID].data.push(global.client.xidach_otm_nobot[threadID].data.shift());
						global.client.xidach_otm_nobot[threadID].cards = cardKeys;
						global.client.xidach_otm_nobot[threadID].curUser = curU;
						return nextUser(api, event, getText, Users, Currencies);
					});
				});
			} else sendT(getText("noGame"));
			break;
		default:
			sendT(getText("xidachRules"));
	}
};