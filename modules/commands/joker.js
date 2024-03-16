module.exports.config = {
	name: "joker",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "Game 3 cây dành cho nhóm có đặt cược (có ảnh lá bài)",
	commandCategory: "Game",
	usages: "[create/start/join/info/leave]",
	cooldowns: 1
};


const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const suits = ["spades", "hearts", "diamonds", "clubs"];
const deck = [];

for (let i = 0 ; i < values.length; i++) {
  for (let x = 0; x < suits.length; x++) {
    let weight = parseInt(values[i]);
    if (["J", "Q", "K"].includes(values[i])) weight = 10;
    else if (values[i] == "A") weight = 11;
    const card = {
      Value: values[i],
      Suit: suits[x],
      Weight: weight,
      Icon: suits[x] == "spades" ? "♠️" : suits[x] == "hearts" ? "♥️" : suits[x] == "diamonds" ? "♦️" : "♣️"
		};
    deck.push(card);
  }
}

function createDeck() {
  // for 1000 turns
  // switch the values of two random cards
  const deckShuffel = [...deck];
  for (let i = 0; i < 1000; i++) {
    const location1 = Math.floor((Math.random() * deckShuffel.length));
    const location2 = Math.floor((Math.random() * deckShuffel.length));
    const tmp = deckShuffel[location1];
    deckShuffel[location1] = deckShuffel[location2];
    deckShuffel[location2] = tmp;
  }
  return deckShuffel;
}

function getLinkCard(Value, Suit) {
  return `https://raw.githubusercontent.com/j-jrt/joker/main/cards/${Value == "J" ? "jack" : Value == "Q" ? "queen" : Value == "K" ? "king" : Value == "A" ? "ace" : Value}_of_${Suit}.png`;
}

async function drawCard(cards) {
  // 500 x 726
  const Canvas = require("canvas");
	const canvas = Canvas.createCanvas(500*cards.length, 726);
  const ctx = canvas.getContext("2d");
  let x = 0;
  for (const card of cards) {
    const loadImgCard = await Canvas.loadImage(card);
    ctx.drawImage(loadImgCard, x, 0);
    x += 500;
  }
  return canvas.toBuffer();
}

module.exports.handleEvent = async ({ Currencies, event, api, Users }) => {
  const Canvas = require("canvas");
  const fs = require ("fs-extra");
  
	const { senderID, threadID, body, messageID } = event;
  
	if (typeof body == "undefined") return;
	if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
	if (!global.moduleData.baicao.has(threadID)) return;
	var values = global.moduleData.baicao.get(threadID);
	if (values.start != 1) return;
  
	const deckShuffel = values.deckShuffel; // Bộ bài

	if (body.indexOf("chia bài") == 0) {
		if (values.chiabai == 1) return;
		for (const key in values.player) {
			const card1 = deckShuffel.shift();
			const card2 = deckShuffel.shift();
			const card3 = deckShuffel.shift();
			var tong = (card1.Weight + card2.Weight + card3.Weight);
			if (tong >= 20) tong -= 20;
			if (tong >= 10) tong -= 10;
			values.player[key].card1 = card1;
			values.player[key].card2 = card2;
			values.player[key].card3 = card3;
			values.player[key].tong = tong;
			
			const linkCards = [];
			
			for (let i = 1; i < 4; i++) {
			  const Card = values.player[key]["card" + i];
			  linkCards.push(getLinkCard(Card.Value, Card.Suit));
			}
			
			const pathSave = __dirname + `/cache/card${values.player[key].id}.png`;
			fs.writeFileSync(pathSave, await drawCard(linkCards));
			
			api.sendMessage({
			  body: `Bài của bạn: ${card1.Value}${card1.Icon} | ${card2.Value}${card2.Icon} | ${card3.Value}${card3.Icon} \n\nTổng bài của bạn: ${tong}`,
			  attachment: fs.createReadStream(pathSave)
			}, values.player[key].id, (error, info) => {
				if (error) return api.sendMessage(`Không thể chia bài cho người dùng: ${values.player[key].id}`, threadID);
				fs.unlinkSync(pathSave);
			});
				
		}
		values.chiabai = 1;
		global.moduleData.baicao.set(threadID, values);
		return api.sendMessage("Bài đã được chia thành công! tất cả mọi người đều có 2 lượt đổi bài nêú không thâý bài hãy kiểm tra lại tin nhắn chờ", threadID);
	}

	if (body.indexOf("đổi bài") == 0) {
		if (values.chiabai != 1) return;
		var player = values.player.find(item => item.id == senderID);
		if (player.doibai == 0) return api.sendMessage("Bạn đã sử dụng toàn bộ lượt đổi bài", threadID, messageID);
		if (player.ready == true) return api.sendMessage("Bạn đã ready, bạn không thể đổi bài!", threadID, messageID);
		const card = ["card1","card2","card3"];
		player[card[(Math.floor(Math.random() * card.length))]] = deckShuffel.shift();
		player.tong = (player.card1.Weight + player.card2.Weight + player.card3.Weight);
		if (player.tong >= 20) player.tong -= 20;
		if (player.tong >= 10) player.tong -= 10;
		player.doibai -= 1;
		global.moduleData.baicao.set(values);
		
		const linkCards = [];
			
		for (let i = 1; i < 4; i++) {
		  const Card = player["card" + i];
		  linkCards.push(getLinkCard(Card.Value, Card.Suit));
		}
		
	  const pathSave = __dirname + `/cache/card${player.id}.png`;
		fs.writeFileSync(pathSave, await drawCard(linkCards));
	  
		return api.sendMessage({
		  body: `Bài của bạn sau khi được đổi: ${player.card1.Value}${player.card1.Icon} | ${player.card2.Value}${player.card2.Icon} | ${player.card3.Value}${player.card3.Icon}\n\nTổng bài của bạn: ${player.tong}`,
		  attachment: fs.createReadStream(pathSave)
    }, player.id, (error, info) => {
			if (error) return api.sendMessage(`Không thể đổi bài cho người dùng: ${player.id}`, threadID);
			fs.unlinkSync(pathSave);
		});
	}

	if (body.indexOf("ready") == 0) {
		if (values.chiabai != 1) return;
		var player = values.player.find(item => item.id == senderID);
		if (player.ready == true) return;
		const name = await Users.getNameUser(player.id);
		values.ready += 1;
		player.ready = true;
		if (values.player.length == values.ready) {
			const player = values.player;
			player.sort(function (a, b) { return b.tong - a.tong });

			var ranking = [], num = 1;

			for (const info of player) {
				const name = await Users.getNameUser(info.id);
				ranking.push(`${num++} • ${name} với ${info.card1.Value}${info.card1.Icon} | ${info.card2.Value}${info.card2.Icon} | ${info.card3.Value}${info.card3.Icon} => ${info.tong} nút\n`);
			}
			
			try {
				await Currencies.increaseMoney(player[0].id, values.rateBet * player.length);
			} catch (e) {};
			global.moduleData.baicao.delete(threadID);
			
			return api.sendMessage(`⚡️Kết quả:\n\n ${ranking.join("\n")}\n\nRiêng người chơi đứng đầu nhận được ${values.rateBet * player.length}$`, threadID);
		}
		else return api.sendMessage(`Người chơi: ${name} Đã sẵn sàng lật bài, còn lại: ${values.player.length - values.ready} người chơi chưa lật bài`, event.threadID);
	}
	
	if (body.indexOf("nonready") == 0) {
		const data = values.player.filter(item => item.ready == false);
		var msg = [];

		for (const info of data) {
			const name = global.data.userName.get(info.id) || await Users.getNameUser(info.id);
			msg.push(name);
		}
		if (msg.length != 0) return api.sendMessage("Những người chơi chưa ready bao gồm: " + msg.join(", "), threadID);
		else return;
	}
}

module.exports.run = async ({ api, event, args, Currencies }) => {
	var { senderID, threadID, messageID } = event;
  if (args.length == 0) return api.sendMessage(`====[♣️ 3 Cây ♣️]====\n» HDSD: ${global.config.PREFIX}3cay huongdan để xem cách chơi`, threadID, messageID);
	threadID = String(threadID);
	senderID = String(senderID);
	
	if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
	var values = global.moduleData.baicao.get(threadID) || {};
  var data = await Currencies.getData(event.senderID);
  var money = data.money     
    
	switch (args[0]) {
		case "create":
		case "-c": {
			if (global.moduleData.baicao.has(threadID)) return api.sendMessage("Hiện tại nhóm này đang có bàn 3 cây đang được mở", threadID, messageID);
			if (!args[1] || isNaN(args[1]) || parseInt(args[1]) <= 1) return api.sendMessage("⚡️Mức đặt cược của bạn không phải là một con số hoặc mức đặt cược của bạn bé hơn 1$", threadID, messageID);
      if (money < args[1]) return api.sendMessage(`⚡️Bạn không đủ tiền để có thể khởi tạo bàn với giá: ${args[1]}$`,event.threadID,event.messageID);
      await Currencies.decreaseMoney(event.senderID, Number(args[1]));
			global.moduleData.baicao.set(event.threadID, { "author": senderID, "start": 0, "chiabai": 0, "ready": 0, player: [ { "id": senderID, "card1": 0, "card2": 0, "card3": 0, "doibai": 2, "ready": false } ], rateBet: Number(args[1])});
			return api.sendMessage(`⚡️Bàn 3 cây với giá ${args[1]}$ của bạn đã được tạo thành công!, để tham gia bạn hãy nhập 3cay join\n⚡️Người tạo không cần join`, event.threadID, event.messageID);
		}
		
		case "join":
		case "-j": {
			if (!values) return api.sendMessage("Hiện tại chưa có bàn 3 cây nào, bạn có thể tạo bằng cách sử dụng baicao create", threadID, messageID);
			if (values.start == 1) return api.sendMessage("Hiện tại bàn 3 cây đã được bắt đầu", threadID, messageID);
			if (money < values.rateBet) return api.sendMessage(`⚡️Bạn không đủ tiền để tham gia bàn với giá: ${values.rateBet}$`,event.threadID,event.messageID)
			if (values.player.find(item => item.id == senderID)) return api.sendMessage("Bạn đã tham gia vào bàn 3 cây này!", threadID, messageID);
			values.player.push({ "id": senderID, "card1": 0, "card2": 0, "card3": 0, "tong": 0, "doibai": 2, "ready": false });
			await Currencies.decreaseMoney(event.senderID, values.rateBet);
			global.moduleData.baicao.set(threadID, values);
			return api.sendMessage("Bạn đã tham gia thành công!", threadID, messageID);
		}

		case "leave":
		case "-l": {
			if (typeof values.player == "undefined") return api.sendMessage("Hiện tại chưa có bàn 3 cây nào, bạn có thể tạo bằng cách sử dụng 3cay create", threadID, messageID);
			if (!values.player.some(item => item.id == senderID)) return api.sendMessage("Bạn chưa tham gia vào bàn 3 cây trong nhóm này!", threadID, messageID);
			if (values.start == 1) return api.sendMessage("Hiện tại bàn 3 cây đã được bắt đầu", threadID, messageID);
			if (values.author == senderID) {
				global.moduleData.baicao.delete(threadID);
				api.sendMessage("Author đã rời khỏi bàn, đồng nghĩa với việc bàn sẽ bị giải tán!", threadID, messageID);
			}
			else {
				values.player.splice(values.player.findIndex(item => item.id === senderID), 1);
				api.sendMessage("Bạn đã rời khỏi bàn 3 cây này!", threadID, messageID);
				global.moduleData.baicao.set(threadID, values);
			}
			return;
		}

		case "start":
		case "-s": {
			if (!values) return api.sendMessage("Hiện tại chưa có bàn 3 cây nào, bạn có thể tạo bằng cách sử dụng 3cay create", threadID, messageID);
			if (values.author !== senderID) return api.sendMessage("Bạn không phải là chủ bàn để có thể bắt đầu", threadID, messageID);
			if (values.player.length <= 1) return api.sendMessage("Hiện tại bàn của bạn không có người chơi nào tham gia, bạn có thể mời người đấy tham gia bằng cách yêu cầu người chơi khác nhập 3cay join", threadID, messageID);
			if (values.start == 1) return api.sendMessage("Hiện tại bàn đã được bắt đầu bởi chủ bàn", threadID, messageID);
			values.deckShuffel = createDeck(); // Bộ bài
			values.start = 1;
			return api.sendMessage("Bàn 3 cây của bạn được bắt đầu", threadID, messageID);
		}

		case "info":
		case "-i": {
			if (typeof values.player == "undefined") return api.sendMessage("Hiện tại chưa có bàn 3 cây nào, bạn có thể tạo bằng cách sử dụng 3cay create", threadID, messageID);
			return api.sendMessage(
				"=== 3 cây ===" +
				"\n- Author Bàn: " + values.author +
				"\n- Tổng số người chơi: " + values.player.length + " Người"
			, threadID, messageID);
		}
    case "huongdan":
		  case "-h": {
     if (typeof values.player == "undefined") return api.sendMessage("⚡️Hướng dẫn sử dụng 3 cây\n\n/3cay create 100(100 là số tiền đặt) : để tạo bàn chơi\n/3cay join : để tham gia ván đấu\n/3cay start : để bắt đầu ván đấu\nchia bài : dành cho người tạo bàn đấu \nready : dể hạ bài\nđổi bài : để đổi bài nếu bài xấu(Chỉ có 3 lượt)\n/3cay info : để xem thông tin bàn đấu \n/3cay leave : để rời khỏi bàn chơi ", threadID, messageID);
      }

		default: {
			return global.utils.throwError(this.config.name, threadID, messageID);
		}
	}
}