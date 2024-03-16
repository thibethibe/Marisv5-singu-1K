module.exports.config = {
	name: "haigocbangnhau",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "Hai góc bằng nhau",
	commandCategory: "Học, học nữa, học mãi",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`CHỨNG MINH 2 GÓC BẰNG NHAU:
C1: 2 góc đối đỉnh. 
C2: 2 góc đáy 1 tam giác cân
C3: 2 góc ở vị trí so le trong, đồng vị tạo bởi 2 đường thẳng //
C4: 2 góc cùng bằng hoặc cùng phụ với 1 góc thứ 3.
C5: Góc của 1 tứ giác đặc biệt ( 2 góc đối của hình bình hành,2 góc đáy hình thang cân)
C6: 2 góc nội tiếp cùng chắn 1 cung ; gnt và góc giữa ttuyến và dây cùng chắn 1 cung…
C7: 2 góc tương ứng của 2 △ đồng dạng, 2 △ bằng nhau.`, event.threadID, event.messageID);
