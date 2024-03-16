module.exports.config = {
	name: "howtouse",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "*",
	commandCategory: "Box - Chat",
	usages: "howtouse option input",
	cooldowns: 5,
	info: [
		{
			key: 'option => add',
			prompt: 'Thêm công việc/đóng góp',
			type: 'string',
			example: 'make bot better'
		},
		{
			key: 'option => list',
			prompt: 'Xem toàn bộ danh sách công việc/đóng góp',
			type: 'string'
		},
		{
			key: 'option => delete',
			prompt: 'Xóa công việc/đóng góp chỉ định dựa vào số dòng, chỉ admin có thể sử dụng',
			type: 'number',
			example: "1"
		}
	]
};

module.exports.onLoad = function () {
	const fs = require("fs-extra");

	if (!fs.existsSync(__dirname + "/cache/howtouse.json")) {
		const howtouse = [];
		fs.writeFileSync(__dirname + "/cache/howtouse.json", JSON.stringify(howtouse));
	}
}

module.exports.run = function({ api, event, args, permssion, utils }) {
	const fs = require("fs-extra");
	const content = args.slice(1, args.length);
	const dirFile = __dirname + "/cache/howtouse.json";

	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);

	switch (args[0]) {
		case "add": {
			if (permssion !== 2) return api.sendMessage("Bạn Không đủ quyền sài add hãy sử dụng /howtouse list !", event.threadID, event.messageID);
			const howtouse = `[ Hướng Dẫn ] ${content.join(" ")}`
			getData.push(howtouse);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			return api.sendMessage(`Đã Thêm Hướng Dẫn Thành Công!`, event.threadID, event.messageID);
		}
		case "list":
		case "all": {
			if (getData.length == 0) return api.sendMessage(`Hiện tại chưa có hướng dẫn nào để hiển thị!`, event.threadID, event.messageID);
			var workList = "";
			getData.map(item => workList += `\n[⚜️] ${item}`);
			return api.sendMessage(`[ = [ How To Use List ] = ] : \n${workList}`, event.threadID, event.messageID);
		}
		case "baicao": {
		return api.sendMessage(`Cách Chơi bài cào :\n Đầu Tiên Ta cần tạo bàn đấu cho bài cào bằng cách \" /baicao create \"\n Sau đó ta mời mọi người vô chơi bằng cách \'/baicao join\' [ bạn cũng cần bấm ! ]\n Sau đó kêu mọi người nhắn tin với bot 1 từ bất kì để tý bot nhắn lại !\n Tiếp đó , chủ bàn cần \'/baicao test\' để bot nhắn lại coi được chưa , nếu 1 2 người tham gia không nhận được tin nhắn nghĩa là acc họ dưới 18+ , bị lỗi ko chơi được !\n Những Người Không Chơi được thì cần \"/baicao leave\" để rời sau đó hỏi Nguyễn Thái Hảo !\n Sau khi mọi người đã chuẩn bị xong thì chủ ván  bấm \"/baicao start\" để bắt đầu!\n Sau đó chủ ván chỉ cần nhắn \'Chia bài đi bot\' không cần dấu \'/\' * chú ý hãy ghi giống trên nếu không bot sẽ không gửi bài đến !\n Sau đó mọi người vào phần chat của bot , bot sẽ gửi bài đến , tổng 3 lá cao nhất là 9 nếu như bạn thấy vừa ý thì hãy nhắn \'Sẵn sàng\' *hãy ghi giống như trên !*\n Nếu như bạn thấy quá thấp thì bạn có thể đổi bài dựa vào hên xui* có 2 lượt đổi, và đổi bằng cách nhắn \'đổi bài\'* hãy ghi giống * bot sẽ gửi cho bạn 3 lá bất kỳ với số khác nhau khác\n Nếu bạn không muốn đổi , muốn đổi mà hết lượt , thấy số đủ cao , nói chung là được hoặc hết đường đi thì cần bấm \'Sẵn sàng\' *Hãy ghi đúng\n tất cả thành viên nhắn \'Sẵn sàng\' thì bot sẽ công bố kết quả ngay lập tức !\n đã hết hướng đẫn !`,event.threadID, event.messageID);
		}
		case "kiemtien": {
		return api.sendMessage(`Các Cách Kiếm Tiền Với BOT :\n[=] Cách 1 : /work để làm việc\n[=] Cách 2 : /daily để nhận tiền hàng ngày\n[=] Cách 3 : Khi ad tổ chức envent\n[=] Cách 4 : Câu cá , một trong những cách đơn giản nhất\n[=] Cách 5 : Để T.Vy xin :>>\n[=] Cách 6 : Cờ Bạc , cá cược /slot [ số tiền ]\n Hết gòi - có làm mới có ăn nha :<`, event.threadID, event.messageID);
		}
		case "giveaway": {
		return api.sendMessage("Cách sài /giveaway :\nđầu tiên cần tạo ra giveaway = cách : /giveaway create\n sau đó tham gia bằng cách thả icon vào tin nhắn bot hoặc\n/giveaway join [ số id giveaway ]\nđợi người tham gia rồi bấm\n/giveaway roll - để chạy số \n sau đó bot sẽ thông báo người thắng cuộc !", event.threadID, event.messageID);	
		}
		case "veso": {
			return api.sendMessage("cách sài /veso :\n đầu tiên bấm /veso , sau đó chọn 4 con số ngẫu nhiên từ 1 - 35\n đợi 10s và sẽ có 4 con số ngẫu nhiên \n sau đó làm theo hướng dẫn của bot\n Giải Thưởng :\n Trúng Hết 4 Số : 1.000.000\n Trúng 3 : 750.000\n Trúng 2 : 500.000\n Trúng 1  250.000", event.threadID, event.messageID);	
			}
		case "del": 
		case "delete": {
			if (permssion !== 2) return api.sendMessage("Bạn không đủ quyền hạn để có thể sử dụng delete!", event.threadID, event.messageID);
			if (getData.length == 0) return api.sendMessage(`Hiện tại chưa có hướng dẫn nào để có thể xóa!`, event.threadID, event.messageID);
			if (content.length == 0) return api.sendMessage(`Bạn cần phải chỉ định mục cần xóa`, event.threadID, event.messageID);
			if (isNaN(content)) return api.sendMessage(`Bạn cần phải chỉ định mục cần xóa`, event.threadID, event.messageID);
			getData.splice((parseInt(content) - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			return api.sendMessage(`Đã xóa thành công mục có id là: ${content}`, event.threadID, event.messageID);
		}
		default:
			api.sendMessage("Bấm /howtouse list nha <3", event.threadID,event.messageID);
		break;
	}
}
