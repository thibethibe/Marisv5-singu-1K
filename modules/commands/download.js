const download = require("image-downloader");
const fse = require("fs-extra")
module.exports.config = {
	name: "download",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "SINGU-💌💌",
	description: "Tải xuống hình ảnh qua link",
	commandCategory: "Công cụ",
	usages: "Format + Link",
	cooldowns: 0
};
const DownLoad = async(link, path) => {
  var arr = []
  for (var i = 0; i < link.length; i++) {
await download.image({ url: link[i], dest: path })
  arr.push(fse.createReadStream(path))
  }
  return arr;
}
module.exports.run = async ({ api, event, args }) => {
  const arr = args.splice(1)
  return api.sendMessage({attachment: await DownLoad(arr, __dirname + args[0])}, event.threadID)      
}