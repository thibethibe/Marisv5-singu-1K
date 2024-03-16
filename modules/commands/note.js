const axios = require('axios');
const fs = require('fs');

module.exports = {
    config: {
        name: 'note',
        version: '0.0.1',
        hasPermssion: 2,
        credits: 'SINGU-💌💌',
        description: 'https://niiozic.site/note/:UUID',
        commandCategory: 'Niiozic',
        usages: '[]',
        cooldowns: 3,
    },
    run: async function(o) {
        const name = module.exports.config.name;
        const url = o.event?.messageReply?.args?.[0] || o.args[1];
        const path = `${__dirname}/${o.args[0]}`;
        const send = msg=>new Promise(r=>o.api.sendMessage(msg, o.event.threadID, (err, res)=>r(res), o.event.messageID));

        try {
            if (/^https:\/\//.test(url)) {
                const content = (await axios.get(url, {
                    responseType: 'text',
                })).data;

                return send(`${path}\n\nThả cảm xúc để xác nhận thay thế nội dung file`).then(res=> {
                    res = {
                        ...res,
                        name,
                        path,
                        o,
                        content,
                        action: 'confirm_replace_content',
                    };
                    global.client.handleReaction.push(res);
                });
            } else {
                if (!fs.existsSync(path))return send(`đường dẫn file không tồn tại để export`);
                
                const uuid_raw = require('uuid').v4();
                const url_raw = new URL(`https://niiozic.site/note/${uuid_raw}`);
                const url_redirect = new URL(`https://niiozic.site/note/${require('uuid').v4()}`);
                
                await axios.put(url_raw.href, fs.readFileSync(path, 'utf8'));
                
                url_redirect.searchParams.append('raw', uuid_raw);
                await axios.put(url_redirect.href);
                url_redirect.searchParams.delete('raw');
                url_redirect.searchParams.append('raw', 'true');

                return send(`📝 Raw: ${url_redirect.href}\n\n✏️ Edit: ${url_raw.href}`);
            }
        } catch(e) {
            console.error(e);
            send(e.toString());
        }
    },
    handleReaction: async function(o) {
        const _ = o.handleReaction;
        const send = msg=>new Promise(r=>o.api.sendMessage(msg, o.event.threadID, (err, res)=>r(res), o.event.messageID));

        try {
            if (o.event.userID != _.o.event.senderID)return;

            switch (_.action) {
                case 'confirm_replace_content':
                    fs.writeFileSync(_.path, _.content);
                    send(`✅ Đã thay thế nội dung từ url vào file`);
                    break;
                default:
                    break;
            }
        } catch(e) {
            console.error(e);
            send(e.toString());
        }
    }
}