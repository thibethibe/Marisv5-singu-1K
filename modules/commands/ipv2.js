module.exports.config = {
	name: "ipv2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "get your current ip address",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
  const res = await axios.get(`https://api.ipify.org/?format=json`);
  var ip = res.data.ip;
  return api.sendMessage(`${ip}`, event.threadID, event.messageID)
}