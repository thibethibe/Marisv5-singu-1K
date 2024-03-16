module.exports.config = {
    name: "face",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SINGU-💌💌",
    descriptions: "Quét khuôn mặt bằng cách phản hồi ảnh",
    commandCategory: "Tiện ích",
    usages: "",
    cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
const fs = global.nodemodule["fs-extra"];
    if (event.type !== "message_reply") return api.sendMessage("Bạn phải phản hồi ảnh nào đó để quét", event.threadID, event.messageID);
    if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("Bạn phải phản hồi ảnh nào đó để quét", event.threadID, event.messageID);
    if (event.messageReply.attachments.length > 1) return api.sendMessage(`Vui lòng chỉ phản hồi một ảnh`, event.threadID, event.messageID);
    
var options = {
  method: 'POST',
  url: 'https://microsoft-face1.p.rapidapi.com/detect',
  params: {
    returnFaceAttributes: 'age,gender,emotion,smile,glasses,hair,makeup,occlusion',
    detectionModel: 'detection_01',
    recognitionModel: 'recognition_01',
    returnFaceId: 'true'
  },
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'microsoft-face1.p.rapidapi.com',
    'x-rapidapi-key': 'a012e05802msh4ce48bff26d5c0ap151d85jsn4edde7f89de0'
  },
  data: {
    url: `${event.messageReply.attachments[0].url}`
  }
};

axios.request(options).then(function (response) {
    const data = response.data[0]
    const age = data.faceAttributes.age
  const gender = data.faceAttributes.gender
  const emotion = data.faceAttributes.emotion
  const smile = data.faceAttributes.smile
  const glasses = data.faceAttributes.glasses
  const hair = data.faceAttributes.hair
  const colorhair = hair.hairColor[0].color
  const makeup = data.faceAttributes.makeup
  const occlusion = data.faceAttributes.occlusion
  const foreheadOccluded = occlusion.foreheadOccluded
const eyeOccluded = occlusion.eyeOccluded
const mouthOccluded = occlusion.mouthOccluded
    return api.sendMessage(`- Tuổi: ${age}\n- Giới tính: ${gender}\n- Nụ cười: ${smile * 100}%\n- Cảm xúc:\n+ Sự phẫn nộ: ${emotion.anger * 100}%\n+ Khinh thường: ${emotion.contempt * 100}%\n+ Ghê tởm: ${emotion.disgust * 100}%\n+ Sợ hãi: ${emotion.fear * 100}%\n+ Hạnh phúc: ${emotion.happiness * 100}%\n+ Trung tính: ${emotion.neutral * 100}%\n+ Sad: ${emotion.sadness * 100}%\n+ Sự bất ngờ: ${emotion.surprise * 100}%\n- Đeo kính: ${glasses}\n- Màu tóc: ${colorhair}\n- Trang điểm mắt: ${makeup.eyeMakeup ? "Có" : "Không"}\n- Trang điểm môi: ${makeup.lipMakeup ? "Có" : "Không"}\n- Phần bị che:\n+ Mắt: ${eyeOccluded ? "Có" : "Không"}\n+ Đầu: ${foreheadOccluded ? "Có" : "Không"}\n+ Miệng: ${mouthOccluded ? "Có" : "Không"}`, event.threadID, event.messageID);
}).catch(function (error) {
    return api.sendMessage(`Không thể xử lí yêu cầu của bạn`, event.threadID, event.messageID);
});
}