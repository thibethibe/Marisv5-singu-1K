const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "mattroi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SINGU-💌💌",
  description: "Thông tin về các hành tinh trong hệ mặt trời",
  commandCategory: "Solar System",
  usages: "mattroi",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://upload.wikimedia.org/wikipedia/commons/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg",
  ];
   var callback = () => api.sendMessage({body:`Mặt Trời (tiếng Anh: Sun; còn gọi là Thái Dương hoặc Nhật), là ngôi sao ở trung tâm Hệ Mặt Trời, chiếm khoảng 99,86% khối lượng của Hệ Mặt Trời. Trái Đất và các thiên thể khác như các hành tinh, tiểu hành tinh, thiên thạch, sao chổi, và bụi quay quanh Mặt Trời. Khoảng cách trung bình giữa Mặt Trời và Trái Đất xấp xỉ 149,6 triệu kilômét (1 Đơn vị thiên văn AU) nên ánh sáng Mặt Trời cần 8 phút 19 giây mới đến được Trái Đất. Trong một năm, khoảng cách này thay đổi từ 147,1 triệu kilômét (0,9833 AU) ở điểm cận nhật (khoảng ngày 3 tháng 1), tới xa nhất là 152,1 triệu kilômét (1,017 AU) ở điểm viễn nhật (khoảng ngày 4 tháng 7). Năng lượng Mặt Trời ở dạng ánh sáng hỗ trợ cho hầu hết sự sống trên Trái Đất thông qua quá trình quang hợp, và điều khiển khí hậu cũng như thời tiết trên Trái Đất. Thành phần của Mặt Trời gồm hydro (khoảng 74% khối lượng, hay 92% thể tích), heli (khoảng 24% khối lượng, 7% thể tích), và một lượng nhỏ các nguyên tố khác, gồm sắt, nickel, oxy, silic, lưu huỳnh, magiê, carbon, neon, calci, và crom. 
Mặt Trời có hạng quang phổ G2V. G2 có nghĩa nó có nhiệt độ bề mặt xấp xỉ 5.778 K (5.505 °C) khiến nó có màu trắng, và thường có màu vàng khi nhìn từ bề mặt Trái Đất bởi sự tán xạ khí quyển. Chính sự tán xạ này của ánh sáng ở giới hạn cuối màu xanh của quang phổ khiến bầu trời có màu xanh. Quang phổ Mặt Trời có chứa các vạch ion hoá và kim loại trung tính cũng như các đường hydro rất yếu. V (số 5 La Mã) trong lớp quang phổ thể hiện rằng Mặt Trời, như hầu hết các ngôi sao khác, là một ngôi sao thuộc dãy chính. Điều này có nghĩa nó tạo ra năng lượng bằng tổng hợp hạt nhân của hạt nhân hydro thành heli. Có hơn 100 triệu ngôi sao lớp G2 trong Ngân Hà của chúng ta. Từng bị coi là một ngôi sao nhỏ và khá tầm thường nhưng thực tế theo hiểu biết hiện tại, Mặt Trời sáng hơn 85% các ngôi sao trong Ngân Hà với đa số là các sao lùn đỏ.Quầng nóng của Mặt Trời liên tục mở rộng trong không gian và tạo ra gió Mặt Trời là các dòng hạt có vận tốc gấp 5 lần âm thanh - mở rộng nhật mãn (Heliopause) tới khoảng cách xấp xỉ 100 AU. Bong bóng trong môi trường liên sao được hình thành bởi gió mặt trời, nhật quyển (heliosphere) là cấu trúc liên tục lớn nhất trong Hệ Mặt Trời.Mặt Trời hiện đang đi xuyên qua đám mây Liên sao Địa phương (Local Interstellar Cloud) trong vùng Bóng Địa phương (Local Bubble) mật độ thấp của khí khuếch tán nhiệt độ cao, ở vành trong của Nhánh Orion của Ngân Hà, giữa nhánh Perseus và nhánh Sagittarius của ngân hà. Trong 50 hệ sao gần nhất bên trong 17 năm ánh sáng từ Trái Đất, Mặt Trời xếp hạng 4 về khối lượng như một ngôi sao cấp bốn (M = +4,83), dù có một số giá trị cấp hơi khác biệt đã được đưa ra, ví dụ 4,85 và 4,81. Mặt Trời quay quanh trung tâm của Ngân Hà ở khoảng cách xấp xỉ 24.000–26.000 năm ánh sáng từ trung tâm Ngân Hà, nói chung di chuyển theo hướng chùm sao Cygnus và hoàn thành một vòng trong khoảng 225–250 triệu năm (một năm ngân hà). Tốc độ trên quỹ đạo của nó được cho khoảng 250 ± 20, km/s nhưng một ước tính mới đưa ra con số 251 km/s.
Bởi Ngân Hà của chúng ta đang di chuyển so với Màn bức xạ vi sóng vũ trụ (CMB) theo hướng chòm sao Hydra với tốc độ 550 km/s, nên tốc độ chuyển động của nó so với CMB là khoảng 370 km/s theo hướng chòm sao Crater hay Leo.`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };
