module.exports.config = {
    name: 'uid2',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'Đạt',
    description: 'Lấy thời gian người dùng tạo tài khoản Facebook!',
    commandCategory: 'Công cụ',
    usages: '[...|reply|tag|url]'
};
const {get} = require('axios');
module.exports.run = function({ api, event, args }){
  const uid = event.type == 'message_reply' ? event.messageReply.senderID: !!Object.keys(event.mentions)[0] ? Object.keys(event.mentions)[0]: !!args[0] ? args[0]: event.senderID;
  get(`https://api-caochungdat.bokdepzai.repl.co/facebook/act?user=${uid}`).then(response => {
      var txt;
      if (response.data.status == 404) txt = `➜ Die acc or khóa wall`;
      if (response.data.status == 200) txt = `➜ Ngày tạo tài khoản: ${response.data.data.date.replace(' ', ' | ')}\n➜ UID Facebook: ${response.data.data.uid}`;
      api.sendMessage(txt, event.threadID, event.messageID);
  }).catch(e => api.sendMessage(e, event.threadID, event.messageID));
};