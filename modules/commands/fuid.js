module.exports.config = {
	name: "fuid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "lấy user id Facebook qua link profile",
	commandCategory: "Công cụ",
	cooldowns: 5
};

module.exports. run = async ({ event, args, api }) => {
  const fbtools = require("fb-tools");
  const returnUids = [];
  const error = [];
  const getUsername = fblink => {
  	try {
  		return /id=(.*?)$/.exec(fblink)[1];
  	}
  	catch(e) {
  		return /.com\/(.*?)$/.exec(fblink)[1];
  	}
  };
  
	for (const item of args) {
	  let uid;
		let vanity;

    try {
      vanity = getUsername(item);
      uid = await fbtools.findUid(item);
      returnUids.push({
        vanity,
        uid
      });
    }
    catch(err) {
      error.push({
        vanity,
        error: err
      });
    }
	}
  
  let msg = "";
  for (const item of returnUids) msg +=`[⚜️]=== 『 UID USER 』 ===[⚜️]\n◆━━━━━━━━━━━━━━━━◆\n\n[⚜️]➜ UID HIỆN TẠI: ${item.vanity}\n[⚜️]➜ UID GỐC: ${item.uid}`;
  if (error.length) {
    msg += `[⚜️]➜ Không thể lấy id của ${error.length} user:`;
    for (const item of error) msg +=`\n- ${item.vanity}: ${item.error.message}`;
  }
  api.sendMessage(msg, event.threadID, event.messageID);
};