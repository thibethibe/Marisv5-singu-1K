module.exports.config = {
  name: "delqtv",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "SINGU-💌💌",
  description: "gỡ quyền qtv\n\nbot phải làm qtv",
  commandCategory: "box",
  usages: "delqtv",
  cooldowns: 5,
  info: [
    {
      key: "tag",
      prompt: "Để trống hoặc tag người khác",
      type: 'Tag',
      example: 'delqtv'
    }
  ]
};

module.exports.run = function({ api, event, args }) {
  if (Object.keys(event.mentions) == 0) return api.changeAdminStatus(event.threadID, args.join(" "), false);
  else {
    for (var i = 0; i < Object.keys(event.mentions).length; i++) api.changeAdminStatus(event.threadID ,`${Object.keys(event.mentions)[i]}`, false)
  return; 
    }
}