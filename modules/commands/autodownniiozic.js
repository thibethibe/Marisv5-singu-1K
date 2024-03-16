const axios = require('axios');
const fs = require('fs');

const isURL = u => /^http(|s):\/\//.test(u);

exports.handleEvent = async function(o) {
    try {
        const str = o.event.body;
        const send = msg => o.api.sendMessage(msg, o.event.threadID, o.event.messageID);
        const head = app => `${app.toUpperCase()}`;

        if (isURL(str)) {
            if (/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm.test(str)) {
                const json = await infoPostFb(str);
                const body = `Facebook\nTitle: ${json.message}`;
                const fil = type => json.attachment.filter($=>$.__typename == type);
                const photo = fil('Photo');
                const video = fil('Video');

                const attachment = [];
                for (const i of photo) {
                    try {
                        const img = i.photo_image || i.image || {};
                        attachment.push(await streamURL(img.uri, 'jpg'));
                    } catch {
                        continue;
                    }
                }
                if (attachment.length > 0) {
                    await send({
                        body, attachment
                    });
                }

                for (const i of video) {
                    try {
                        send({
                            body, attachment: await streamURL(i.playable_url_quality_hd || i.playable_url, 'mp4'),
                        });
                    } catch {
                        continue;
                    }
                }
            } else if (/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm.test(str)) {
                const json = await infoPostTT(str);
                let attachment = [];
                if (json.images != undefined) {
                    for (const $ of json.images) {
                        attachment.push(await streamURL($, 'png'));
                    }
                } else {
                    attachment = await streamURL(json.play, 'mp4');
                }

                send({
                    body: `
tiktok: ${json.author.nickname}\ntitlet: ${json.title}`, attachment
                });
            } else if (/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm.test(str)) {
                const res = await axios.get(`https://apipremium-thanhali.thanhali.repl.co/youtube/download?id=${str}$apikey=ThanhAliVip_1234567890`);
                send({
                    body: `\ntitle: ${res.data.data.title}\nThời lượng: ${res.data.data.duration}`, attachment: await streamURL(res.data.data.video.url, 'mp4')});
            } else if (/imgur\.com/.test(str)) {
                send({
                    body: `Imgur`,
                    attachment: await streamURL(str, str.split('.').pop())
                })
            } else if (/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm.test(str)) {
                const res = await axios.get(`https://api.imgbb.com/1/upload?key=588779c93c7187148b4fa9b7e9815da9&image=${str}`);
                send({
                    body: `${head('pinterest')}\nlink: ${res.data.data.image.url}`, attachment: await streamURL(res.data.data.image.url, 'jpg')});
            } else if (/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm.test(str)) {
                const res = await axios.get(`https://apivip.nguyenlienmanh.com/instagram/videodl?url=${str}`);
                const {
                    video_url = [{}],
                    images
                } = res.data;
                let attachment = [];

                if (video_url[0].url != undefined) {
                    attachment = await streamURL(video_url[0].url, 'mp4');
                } else if (images != undefined) {
                    for (const $ of typeof images == 'string' ? [images]: images) {
                        attachment.push(await streamURL($, 'png'));
                    }
                }

                send({
                    body: `${head('instagram')}- Tiêu Đề: ${res.data.title} \n- full name: ${res.data.user_full_name} \n- user name: ${res.data.user.username} \n- cảm súc: ${res.data.like_count} \n- bình luận: ${res.data.comment_count}`, attachment
                });
            } else if (/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm.test(str)) {
                const res = await axios.get(`http://capcut.bangcoi.repl.co/dl?url=${str}`);

                send({
                    body: `${head('capcut')}Tiêu Đề: ${res.data.title}\nMô tả: ${res.data.description}`,
                    attachment: await streamURL(res.data.video_url || res.data.imgur_url, res.data.video_url != undefined?'mp4': 'png'),
                });
            }
        }
    } catch(e) {
        console.log('Error', e);
    }
};
exports.run = () => {};
exports.config = {
    name: "autodown",
    version: "1.0.5",
    hasPermssion: 0,
    credits: "Niiozic",
    description: "",
    commandCategory: "No prefix",
    usages: [],
    cooldowns: 0
};

function streamURL(url, type) {
    return axios.get(url, {
        responseType: 'arraybuffer'
    }).then(res => {
        const path = __dirname + `/cache/${Date.now()}.${type}`;
        fs.writeFileSync(path, res.data);
        setTimeout(p => fs.unlinkSync(p), 1000 * 60, path);
        return fs.createReadStream(path);
    });
}

function infoPostTT(url) {
    return axios({
        method: 'post',
        url: `https://tikwm.com/api/`,
        data: {
            url
        },
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.data.data);
}

function infoPostFb(url) {
    return axios.get(`https://duongkum999.codes/fb/info-post?url=${url}`).then(res => res.data);
                  } 