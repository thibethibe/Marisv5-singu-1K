module.exports.config = {
    name: "goibot",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "SINGU-💌💌",
    description: "Gọi Bot No reply",
    commandCategory: "Bot",
    usages: "",
    cooldowns: 2,
    denpendencies: {}
}, module.exports.handleEvent = async ({
    event: e,
    api: o,
    Users: t,
    Threads: a
}) => {
    var {
        threadID: n,
        messageID: s,
        body: i,
        senderID: d
    } = e;
    const r = global.data.threadData.get(n) || {};
    if (void 0 !== r.goibot && 0 == r.goibot) return;
    if (d == global.data.botID) return;
    let g = await t.getNameUser(e.senderID),
        c = (await a.getData(e.threadID)).threadInfo;
    var h = e.threadID,
        l = [ " Đụng là chạm nhắc tui là yêu tui🗡","Có thể bạn chưa biết, admin đẹp gái vc?","Gọi tôi làm gì đang bận-.-","Đã bảo đừng gọi","Gọi gì lắm thế?"]
        u = l[Math.floor(Math.random() * l.length)];
    ["bot", "bot ơi", "bot oi", "yêu bot", "bot đâu"].forEach((e => {
        let t = e[0].toUpperCase() + e.slice(1);
        if (i === e.toUpperCase() | i === e | t === i) {
            let t = c.threadName;
            return modules = "------ Gọi bot ------\n", console.log(modules, e + "|", t, h), a = u, void o.sendMessage(a, n, s)
        }
        var a
    }))
}, module.exports.languages = {
    vi: {
        on: "Bật",
        off: "Tắt",
        successText: "goibot thành công"
    },
    en: {
        on: "on",
        off: "off",
        successText: "goibot success!"
    }
}, module.exports.run = async function ({
    api: e,
    event: o,
    Threads: t,
    getText: a
}) {
    const {
        threadID: n,
        messageID: s
    } = o;
    let i = (await t.getData(n)).data;
    return void 0 === i.goibot || 1 == i.goibot ? i.goibot = !1 : i.goibot = !0, await t.setData(n, {
        data: i
    }), global.data.threadData.set(n, i), e.sendMessage(`${0==i.goibot?a("off"):a("on")} ${a("successText")}`, n, s)
};