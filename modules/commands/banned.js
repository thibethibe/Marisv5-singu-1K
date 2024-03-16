module.exports.config = {
    name: "banned",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "SINGU-💌💌",
    description: "Xem danh sách ban của nhóm hoặc của người dùng",
    commandCategory: "Hệ thống admin-bot",
    usages: "[thread/user]",
    cooldowns: 5
}, module.exports.handleReply = async function ({
    api: n,
    args: e,
    Users: a,
    handleReply: s,
    event: t,
    Threads: d
}) {
    const {
        threadID: r,
        messageID: h
    } = t;
    let l = await a.getNameUser(t.senderID);
    if (parseInt(t.senderID) === parseInt(s.author)) switch (s.type) {
    case "unbanthread":
        var g = t.body.split(" "),
            i = "",
            o = "",
            c = "",
            u = g.map((n => parseInt(n)));
        for (let n of u) {
            var b = (p = s.listBanned[n - 1]).slice(3);
            let e = p.split(":");
            const a = e[e.length - 1].trim(),
                t = (await d.getData(a)).data || {};
            t.banned = 0, t.reason = null, t.dateAdded = null, await d.setData(a, {
                data: t
            });
            var m = global.data.threadBanned.delete(a, 1);
            i += m + " " + p + "\n", o += " " + a + "\n", c += " " + b + "\n"
        }
        n.sendMessage(`[💌]→ Thông báo từ Admin ${l} ←[💌]\n\n[💌]→ Nhóm ${c} của bạn đã được Gỡ Ban\n\n[💌]→ Có thể sử dụng được bot ngay bây giờ`, o, (() => n.sendMessage(`${global.data.botID}`, (() => n.sendMessage(`=== 『 Thực thi Unban 』 ===\n\n${i}`, t.threadID, (() => n.unsendMessage(s.messageID)))))));
        break;
    case "unbanuser":
        g = t.body.split(" "), i = "", o = "", c = "", u = g.map((n => parseInt(n)));
        for (let n of u) {
            var p;
            b = (p = s.listBanned[n - 1]).slice(3);
            let e = p.split(":");
            const t = e[e.length - 1].trim(),
                d = (await a.getData(t)).data || {};
            d.banned = 0, d.reason = null, d.dateAdded = null, await a.setData(t, {
                data: d
            });
            m = global.data.userBanned.delete(t, 1);
            i += m + " " + p + "\n", o += " " + t + "\n", c += " " + b + "\n"
        }
        n.sendMessage(`=== 『 Thực thi Unban 』 ===\n\n${i}`, t.threadID, (() => n.unsendMessage(s.messageID)))
    }
}, module.exports.run = async function ({
    event: n,
    api: e,
    Users: a,
    args: s,
    Threads: t
}) {
    const {
        threadID: d,
        messageID: r
    } = n;
    var h = [],
        l = 1;
    switch (s[0]) {
    case "thread":
    case "t":
    case "-t": {
        const a = global.data.threadBanned.keys();
        for (const n of a) {
            nameT = await global.data.threadInfo.get(n).threadName || "Tên không tồn tại";
            h.push(`${l++}. ${nameT}\n[🔰]→ TID: ${n}`)
        }
        return e.sendMessage(0 != h.length ? e.sendMessage(`[❎]→ Hiện tại đang có ${h.length} nhóm bị ban\n\n${h.join("\n")}\n\n[💌]→ Reply tin nhắn này + số thứ tự, có thể rep nhiều số, cách nhau bằng dấu cách để unban thread tương ứng`, d, ((e, a) => {
            client.handleReply.push({
                name: this.config.name,
                messageID: a.messageID,
                author: n.senderID,
                type: "unbanthread",
                listBanned: h
            })
        }), r) : "[💌]→ Hiện tại không có nhóm nào bị ban!", d, r)
    }
    case "user":
    case "u":
    case "-u": {
        const s = global.data.userBanned.keys();
        for (const n of s) {
            const e = global.data.userName.get(n) || await a.getNameUser(n);
            h.push(`${l++}. ${e} \n[🔰]→ UID: ${n}`)
        }
        return e.sendMessage(0 != h.length ? e.sendMessage(`[❎]→ Hiện tại đang có ${h.length} người dùng bị ban\n\n${h.join("\n")}\n\n[💌]→ Reply tin nhắn này + số thứ tự, có thể rep nhiều số, cách nhau bằng dấu cách để unban user tương ứng`, d, ((e, a) => {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: a.messageID,
                author: n.senderID,
                type: "unbanuser",
                listBanned: h
            })
        }), r) : "[💌]→ Hiện tại không có người dùng bị ban", d, r)
    }
    default:
        return global.utils.throwError(this.config.name, d, r)
    }
};