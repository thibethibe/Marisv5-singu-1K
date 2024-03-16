const configCommand = {
    name: 'getaccesstoken',
    version: '10.02',
    hasPermssion: 3,
    credits: 'SINGU-💌💌',
    description: 'Lấy access token facebook bằng tài khoản - mật khẩu',
    commandCategory: 'Tiện ích',
    usages: '[]',
    cooldowns: 3
}, {
    get
} = require('axios'), web = 'https://api.maihuybao.live/api/getToken.php';
async function runCommand(arg) {
    var out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d?d: arg.event.messageID),
    msg;
    try {
        if (arg.args == 0) {
            const {
                ACCOUNT_TYPE,
                ACCESS_TOKEN_TYPE
            } = (await get(web)).data;
            return out(`- Nhập Định Dạng Tài Khoản: ${ACCOUNT_TYPE}\n\n- Lựa Chọn Access Token:\n${Object.entries(ACCESS_TOKEN_TYPE).map(i => ` • ${i[0]} => ${i[1]}`).join('\n')}`)
        }
        const type = arg.args.pop(),
        {
            access_token,
            message
        } = (await get(`${web}?account=${arg.args.join('')}&type=${type}`)).data;
        out(access_token || message)
    } catch(err) {
        out(`${err}`)
    }
};

module.exports = {
    config: configCommand,
    run: runCommand
};