module.exports.config = {
    name: "hentaivn",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SINGU-💌💌",
    description: "Tìm kiếm thông tin truyện trên hentaivn",
    commandCategory: "nsfw",
    usages: "[ID truyện]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "cheerio": ""
    }
};

module.exports.run = function({ api, event, args }) {
    const cheerio = global.nodemodule["cheerio"];
    const axios = global.nodemodule["axios"];
    if (!args[0] || typeof parseInt(args[0]) !== "number") return api.sendMessage(`Code lý tưởng dành cho người anh em là:${Math.floor(Math.random() * 21553)}`, event.threadID, event.messageID);
    return axios.get(`https://hentaivn.tv/id${args[0]}`).then((response) => {
        if (response.status == 200) {
            const html = response.data;
            const $ = cheerio.load(html);
            var getContainer = $('div.container');
            var getURL = getContainer.find('form').attr('action');
            if (getURL == `https://hentaivn.tv/${args[0]}-doc-truyen-.html`) return api.sendMessage(`Không tìm thấy truyện thông qua id bạn nhập :(`, event.threadID, event.messageID);
            axios.get(getURL).then((response) => {
                if (response.status == 200) {
                    const html = response.data;
                    const $ = cheerio.load(html);
                    var getInfo = $('div.container div.main div.page-info');
                    var getName = getInfo.find('h1').find('a').text();
                    var getTags = getInfo.find('a.tag').contents().map(function () {
                        return (this.type === 'text') ? $(this).text() + '' : '';
                    }).get().join(', ');
                    var getArtist = getInfo.find('a[href^="/tacgia="]').contents().map(function () {
                        return (this.type === 'text') ? $(this).text() + '' : '';
                    }).get().join(', ');
                    var getChar = getInfo.find('a[href^="/char="]').contents().map(function () {
                        return (this.type === 'text') ? $(this).text() + '' : '';
                    }).get().join(', ');
                    if (getChar == '') getChar = 'Original';
                    return api.sendMessage(`» Tên: ${getName.substring(1)}\n» Tác giả: ${getArtist}\n» Nhân vật: ${getChar}\n» Tags: ${getTags}\n» Liên kết: ${getURL.slice(0, 17) + " " + getURL.slice(17)}`, event.threadID, event.messageID);
                }
            }, (error) => console.log(error));
        }
    }, (error) => console.log(error));
}