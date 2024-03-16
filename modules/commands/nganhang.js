'use strict';

module.exports.config = {

    name: "nganhang", // Tên lệnh, được sử dụng trong việc gọi lệnh

    version: "1.0.0", // phiên bản của module này

    hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner

    credits: "SINGU-💌💌", // Công nhận module sở hữu là ai

    description: "ngân hàng xD", // Thông tin chi tiết về lệnh

    commandCategory: "tiện ích", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...

    usages: "[key]\n-=o===----\nVới các key:\n[-r/register]\n[-i/info]\n[-d/deposit] [số tiền]\n[-w/withdraw] [số tiền]\n[-t/transfer] [@tag/số tài khoản] [số tiền]\n[-s/saving]\n[-l/loan]\n-=o===----", // Cách sử dụng lệnh

    cooldowns: 5,

    envConfig: {

        key: "DUBFREE"

    }

};



module.exports.languages = {

    "vi": {

        "insufficientBalanceForReg": "Số dư không đủ để đăng ký, bạn cần tối thiểu %1",

        "not_ok": "Server TBank hiện không khả dụng..",

        "isGroup": "Vui lòng inbox bot để sử dụng.",

        "regSuccess": "Đăng ký thành công!",

        "depositSuccess": "Nạp %1$ thành công!\nSố dư trong bank hiện tại: %2$",

        "withdrawSuccess": "Rút %1$ thành công!\nSố dư trong bank hiện tại: %2$",

        "accountInfo": "\n- Tài khoản: %1\n- Mã thẻ: %2\n- Mật mã thẻ: %3\n- Số dư: %4",

        "insufficientBalance": "Số dư không đủ để thực hiện giao dịch này!",

        "minTransferAmount": "Số tiền bạn nhập thấp hơn mức tối thiểu! (%1$)",

        "successTransfer": "Chuyển tiền thành công!\nNgười nhận: %1\nTổng: %2$(%3$ thuế)\nSố dư trong bank còn lại: %4$",

        "missingInput": "Thiếu nhập liệu!",

        "lowerThanMinTransferAmount": "Số tiền bạn nhập chưa đạt mức tối thiểu (%1$)",

        "moreThanOneMention": "Vui lòng chỉ tag 1 người.",

        "idNotValid": "Số tài khoản bạn nhập không hợp lệ.",

        "amountNotNumber": "Số tiền bạn nhập không hợp lệ",

        "notEnoughMoneyFromBank": "Số dư bạn không đủ để thực hiện giao dịch này!\nSố tiền muốn chuyển: %1$\nSố tiền cần có: %2$\nSố dư hiện tại: %3$",

        "savingsOptions": "=== Tài Khoản Tiết Kiệm ===\n\n- 1. Gửi tiền\n- 2. Rút tiền\n- 3. Xem số dư\n\n-o Reply theo số tương ứng thế thực thi.",

        "savingsInfo": "Số dư sổ tiết kiệm của bạn hiện tại là: %1$\nSố dư tiết kiệm có thể rút: %2$",

        "savingsRequestSuccess": "Thực thi thành công!\nSố dư sổ tiết kiệm hiện tại: %1$",

        "loanOptions": "=== Vay Ngân Hàng ===\n\n- 1. Vay tiền\n- 2. Trả nợ\n- 3. Xem số nợ\n\n-o Reply theo số tương ứng thế thực thi.",

        "loanInfo": "Tổng số nợ của bạn hiện tại là: %1$\nDanh sách nợ của bạn:\n Số tiền - Lãi suất - Thời hạn còn lại\n %2",

        "loanRequestSuccess": "Thực thi thành công!\nSố nợ hiện tại: %1$",

        "outOfChoosenRange": "Lựa chọn của bạn không hợp lệ, vui lòng chọn lại.",

        "checkDM": "Vui lòng check inbox bot.",

        "enterAmount": "Hãy reply số tiền.",

        "enterSecretKey": "Vui lòng reply tin nhắn này mã bảo mật của bạn",

        "invalidCommand": "===== TBank =====\n\n[-r] register: Đăng ký tài khoản.\n[-i] info: Thông tin tài khoản.\n[-d] deposit: Nạp tiền.\n[-w] withdraw: Rút tiền.\n[-t] transfer: Chuyển tiền vào tài khoản khác.\n[-s] savings: Sổ tiết kiệm\n[-l] loan: Vay tiền.\n\n-o Để biết thêm chi tiết, dùng:\n%1help %2",

    }

};



module.exports.onLoad = async () => {

  await require('axios').get("https://raw.githubusercontent.com/RFS-ADRENO/mirai-modules/main/version.json").then(res => {

    if (res.data["tbank_x011"] != this.config.version) console.log("-TBANK ĐÃ CÓ PHIÊN BẢN MỚI, LIÊN HỆ DungUwU ĐỂ ĐƯỢC CẬP NHẬT-");

  });

  console.log("-----TBANK LOADED SUCCESSFULLY------");

};



const bankAPI = 'https://tbank.tk/';

const bankBanner = "https://i.ibb.co/HrwT77h/banner-Tbank.jpg";



module.exports.handleReply = async function ({ api, event, handleReply, Currencies, getText }) {



    //DEFINE VALUES AND FUNCTIONS

    const axios = require("axios");

    const { key } = global.configModule[this.config.name];

    const { threadID, messageID, senderID } = event;

    const { increaseMoney, decreaseMoney } = Currencies;

    const send = async (msg) => await new Promise(resolve => api.sendMessage(msg, threadID, (err, info) => resolve(info),messageID));

    const sendT = async (msg) => await new Promise(resolve => api.sendMessage(msg, threadID, (err, info) => resolve(info),messageID));

    const sendIB = async (msg) => await new Promise(resolve => api.sendMessage(msg, senderID, (err, info) => resolve(info)));



    //CHECK AUTHOR

    if (handleReply.author != senderID) return;



    //DEFINE INPUT

    var input = event.body;

    if (!input) return;



    //HERE COME SWITCH CASE...

    switch (handleReply.type) {

        case "info":

            {



                const secretKey = input;

                await axios.get(encodeURI(bankAPI + `info/${key}_${senderID}_${secretKey}`)).then(async (res) => {

                    let { data } = res;

                    let { status, message, accountNumber, cardNumber, secretKey, balance, image } = data;

                    if (status != 1) return send(message);

                    api.unsendMessage(handleReply.messageID);

                    return send({

                        body: getText("accountInfo", accountNumber, cardNumber, secretKey, balance),

                        attachment: (await axios.get(encodeURI(image), { responseType: "stream" }).catch(e => console.log(e))).data

                    });

                }).catch(e => sendT(getText("not_ok")));

            }

            break;

        case "deposit":

        case "withdraw":

            {

                const secretKey = input;

                let type = handleReply.type == "deposit" ? "deposit" : "withdraw";

                let { amount } = handleReply;

                if (type == "deposit") await decreaseMoney(senderID, amount);

                await axios.get(encodeURI(bankAPI + `${type}/${key}_${senderID}_${secretKey}_${amount}`)).then(async (res) => {

                    let { data } = res;

                    let { status, message, balance } = data;

                    if (status != 1) return send(message).then(async () => await increaseMoney(senderID, amount));

                    api.unsendMessage(handleReply.messageID);

                    await increaseMoney(senderID, amount);

                    return send(getText(`${type}Success`, amount, balance));

                }).catch(e => sendT(getText("not_ok")));

            }

            break;

        case "transfer":

            {

                const secretKey = input;

                let verifyRequest = await axios.get(encodeURI(bankAPI + `verifyTransfer/${key}_${senderID}_${secretKey}_${handleReply.data.transferID}`)).catch(e => sendT(getText("not_ok")));

                let { data } = verifyRequest;

                let { status, message, requested, fee, balance } = data;

                if (status != 1) return sendIB(message);

                api.unsendMessage(handleReply.messageID);



                let receiver = handleReply.data.transferID.split("_")[1];

                sendIB(getText("successTransfer", receiver, requested, fee, balance));

            }

            break;

        case "savings":

        case "loan":

            {

                const secretKey = input;

                let getAccountAccessToken = await axios.get(encodeURI(bankAPI + `getAccountAccessToken/${key}_${senderID}_${secretKey}`)).catch(e => sendT(getText("not_ok")));

                let { data } = getAccountAccessToken;

                let { status, message } = data;

                if (status == -1) return sendIB(message);

                api.unsendMessage(handleReply.messageID);

                let { accessToken } = data;

                let type = handleReply.type == "savings" ? "savingsOptions" : "loanOptions";

                sendIB(getText(type)).then((info) => {

                    global.client.handleReply.push({

                        type,

                        name: this.config.name,

                        messageID: info.messageID,

                        accessToken,

                        author: senderID

                    });

                });

            }

            break;

        case "savingsOptions":

        case "loanOptions":

            {

                const choosenIndex = parseInt(input);

                if (choosenIndex < 1 || choosenIndex > 3 || isNaN(choosenIndex)) return sendT(getText("outOfChoosenRange"));

                const { accessToken } = handleReply;

                let type = handleReply.type == "savingsOptions" ? "savings" : "loan";

                switch (choosenIndex) {

                    case 1:

                    case 2:

                        {

                            let options = "";

                            if (choosenIndex == 1) options = type == "savings" ? "deposit" : "get";

                            else options = type == "savings" ? "withdraw" : "pay";

                            sendIB(getText("enterAmount")).then((info) => {

                                global.client.handleReply.push({

                                    type: type == "savings" ? "savingsRequest" : "loanRequest",

                                    name: this.config.name,

                                    messageID: info.messageID,

                                    optMsgID: handleReply.messageID,

                                    accessToken,

                                    options,

                                    author: senderID

                                });

                            });

                        }

                        break;

                    case 3:

                        {

                            let getSavingsBalance = await axios.get(encodeURI(bankAPI + `${type}/${key}_${accessToken}_info`)).catch(e => sendT(getText("not_ok")));

                            let { data } = getSavingsBalance;

                            let { status, message, loanData, total, withdrawable } = data;

                            if (status != 1) return sendIB(message).then(api.unsendMessage(handleReply.messageID));

                            if (type == "savings") {

                                sendIB(getText("savingsInfo", total, withdrawable));

                            } else {

                                let loanList = "";

                                for (let i = 0; i < loanData.length; i++)

                                    loanList += `\n${i + 1}. ${loanData[i].amount}$ - ${loanData[i].interest}$ - ${loanData[i].time}`;

                                sendIB(getText("loanInfo", total, loanList));

                            }

                        }

                        break;

                    default:

                        sendIB(getText("outOfChoosenRange"));

                        break;

                }

            }

            break;

        case "savingsRequest":

        case "loanRequest":

            {

                const { accessToken, options, optMsgID } = handleReply;

                const amount = parseInt(input);

                if (isNaN(amount) || amount < 0) return sendIB(getText("amountNotNumber"));

                api.unsendMessage(handleReply.messageID);

                let type = handleReply.type == "savingsRequest" ? "savings" : "loan";

                let savingsRequest = await axios.get(encodeURI(bankAPI + `${type}/${key}_${accessToken}_${options}_${amount}`)).catch(e => sendT(getText("not_ok")));

                let { data } = savingsRequest;

                let { status, message, total } = data;

                if (status != 1) return sendIB(message).then(api.unsendMessage(optMsgID));

                sendIB(getText(type == "savings" ? "savingsRequestSuccess" : "loanRequestSuccess", total));

            }

            break;

    }

};



module.exports.run = async function ({ api, event, args, Currencies, Threads, getText }) {

    //DEFINE VALUES AND FUNCTIONS

    const axios = require("axios");

    const { key } = global.configModule[this.config.name];

    const { threadID, messageID, senderID, mentions } = event;

    const { increaseMoney, decreaseMoney, getData } = Currencies;

    const send = async (msg) => await new Promise(resolve => api.sendMessage(msg, threadID, (err, info) => resolve(info),messageID));

    const sendT = async (msg) => await new Promise(resolve => api.sendMessage(msg, threadID, (err, info) => resolve(info),messageID));

    const sendIB = async (msg) => await new Promise(resolve => api.sendMessage(msg, senderID, (err, info) => resolve(info)));

    const registrationFee = 200; //ANY AMOUNTS SHOULD WORK

    const minTransferAmount = 500; //CAN'T BE LOWER THAN 500





    //GET SENDER BALANCE//

    let balance = (await getData(senderID)).money;



    //I DON'T KNOW WHAT TO COMMENT HERE... ANY SUGGESTIONS?

    switch (args[0]) {

        case "-r":

        case "reg":

        case "register":

            {

                if (balance < registrationFee) return send(getText("insufficientBalanceForReg", registrationFee));

                if (event.isGroup) return send(getText("isGroup"));

                await decreaseMoney(senderID, registrationFee);

                await axios.get(encodeURI(bankAPI + `reg/${key}_${senderID}`)).then(async (res) => {

                    let { data } = res;

                    let { status, message } = data;

                    if (status != 1) return send(message).then(async () => await increaseMoney(senderID, registrationFee));

                    else {

                        //The status seems good..

                        let { card } = data;

                        let { accountNumber, cardNumber, secretKey, balance, image } = card;

                        return send({

                            body: getText("regSuccess") + getText("accountInfo", accountNumber, cardNumber, secretKey, balance),

                            attachment: (await axios.get(encodeURI(image), { responseType: "stream" }).catch(e => sendT(getText("not_ok")))).data

                        });

                    }

                }).catch(e => sendT(getText("not_ok")));

            }

            break;

        case "-i":

        case "info":

            {

                if (event.isGroup) return send(getText("isGroup"));

                let findAccount = await axios.get(encodeURI(bankAPI + `find/${key}_${senderID}`)).catch(e => sendT(getText("not_ok")));

                let { data } = findAccount;

                let { status, message } = data;

                if (status != 1) return send(message);

                send(getText("enterSecretKey")).then((info) => {

                    global.client.handleReply.push({

                        type: "info",

                        name: this.config.name,

                        messageID: info.messageID,

                        author: senderID

                    });

                });

            }

            break;

        case "-d":

        case "deposit":

        case "-w":

        case "withdraw":

            {

                if (event.isGroup) return send(getText("isGroup"));

                const amount = parseInt(args[1]);

                if (isNaN(amount) || amount < 0) return sendIB(getText("amountNotNumber"));

                if (["-d", "deposit"].includes(args[0])) {

                    if (balance < amount) return sendIB(getText("insufficientBalance"));

                }

                sendIB(getText("enterSecretKey")).then((info) => {

                    global.client.handleReply.push({

                        type: ["-d", "deposit"].includes(args[0]) ? "deposit" : "withdraw",

                        name: this.config.name,

                        messageID: info.messageID,

                        author: senderID,

                        amount

                    });

                });

            }

            break;

        case "-t":

        case "transfer":

            {

                //DEFINE INPUT

                if (args.length < 3) return sendT(getText("missingInput"));

                let receiver = args[1], nameL = args[1].length;

                let tags = Object.keys(mentions);

                if (tags[0]) {

                    if (tags.length > 1) return send(getText("moreThanOneMention"));

                    receiver = tags[0];

                    nameL = mentions[tags[0]].length;

                }

                let transferAmount = parseInt(args.slice(1).join(" ").slice(nameL + 1));



                //CHECK INPUT

                if (isNaN(parseInt(receiver))) return send(getText("idNotValid"));

                if (isNaN(parseInt(transferAmount))) return send(getText("amountNotNumber"));



                if (transferAmount < minTransferAmount) return send(getText("lowerThanMinTransferAmount", minTransferAmount));

                await axios.get(encodeURI(bankAPI + `requestTransfer/${key}_${senderID}_${receiver}_${transferAmount}`)).then(res => {

                    let { data } = res;

                    let { status, message } = data;

                    if (status != 1) return send(message);

                    else {

                        if (event.isGroup) send(getText("checkDM"));

                        //The status seems good..

                        sendIB(getText("enterSecretKey")).then((info) => {

                            global.client.handleReply.push({

                                type: "transfer",

                                name: this.config.name,

                                messageID: info.messageID,

                                data,

                                receiver,

                                author: senderID

                            });

                        });

                    }

                }).catch(e => sendT(getText("not_ok")));

            }

            break;

        case "-s":

        case "savings":

        case "-l":

        case "loan":

            {

                if (event.isGroup) return send(getText("isGroup"));

                send(getText("enterSecretKey")).then((info) => {

                    global.client.handleReply.push({

                        type: ["-s", "savings"].includes(args[0]) ? "savings" : "loan",

                        name: this.config.name,

                        messageID: info.messageID,

                        author: senderID

                    });

                });

            }

            break;

        default:

            //getPrefix

            const threadSetting = (await Threads.getData(String(event.threadID))).data || {};

            const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

            sendT({

                body: getText("invalidCommand", prefix, this.config.name),

                attachment: (await axios.get(encodeURI(bankBanner), { responseType: "stream" }).catch(e => sendT(getText("not_ok")))).data

            });

            break;

    }

};