module.exports.config = {
	name: "hangdangthuc",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "Hằng đẳng thức đáng nhớ",
	commandCategory: "Học, học nữa, học mãi",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`  Hằng Đẳng Thức
		
1/ Bình phương của 1 tổng: (a + b)² = a² + 2ab + b² = (a − b)² + 4ab

2/ Bình phương của 1 hiệu: (a − b)² = a² - 2ab + b² = (a + b)² − 4ab

3/ Hiệu 2 bình phương: a² − b² = (a − b)(a + b)

4/ Lập phương của 1 tổng: (a + b)³ = a³ + 3a²b + 3ab² + b³

5/ Lập phương của 1 hiệu: (a − b)³ = a³ − 3a²b + 3ab² − b³

6/ Tổng 2 lập phương: a³ + b³ = (a + b)(a² − ab + b²) = (a + b)³ − 3a²b − 3ab² = (a + b)³ − 3ab(a + b)

7/ Hiệu 2 lập phương: a³ − b³ = (a − b)(a² + ab + b²) = (a − b)3 + 3a²b − 3ab² = (a − b)3 + 3ab(a − b)

Các hệ thức liên quan

1/ (a + b + c)³ = a³ + b³ + c³ + 3(a + b)(b + c)(a + c)

2/ a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ac)

3/ (a − b − c)² = a² + b² + c² - 2ab + 2bc − 2ac

4/ (a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ac

5/ (a + b − c)² = a² + b² + c² + 2ab − 2bc − 2ac`, event.threadID, event.messageID);
= 
