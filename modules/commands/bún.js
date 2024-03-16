module.exports.config = {
	name: "bún",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "SINGU-💌💌",
	description: "Create Text",
	commandCategory: "game",
	dependencies: {"figlet": ""},
	usages: "bún <text>",
	cooldowns: 5
};
module .exports .run = ({ api, event, args }) => {
 const figlet = global.nodemodule["figlet"];
 let p = args.join(" ");
 figlet(p, function(err, data) {
    if (err) {
        api.sendMessage('Something went wrong...', event.threadID, event.messageID);
        console.dir(err);
        return;
    }
    api.sendMessage(data, event.threadID, event.messageID);
});
  }