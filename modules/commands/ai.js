const axios = require("axios");

module.exports.config = {
    name: "ai",
    version: "1.0",
    hasPermssion: 0,
    credits: "SINGU-💌💌",
    description: {
        vi: "Tương tác với trí tuệ nhân tạo để nhận câu trả lời cho câu hỏi của bạn.",
        en: "Interact with an AI to get responses to your questions."
    },
    commandCategory: "group",
    usages: {
        vi: "[câu hỏi]",
        en: "[question]"
    },
    cooldowns: 5,
    envConfig: {
        // Đây là nơi bạn sẽ setup toàn bộ env của module, chẳng hạn APIKEY, ...
    }
};

module.exports.run = async function({ api, event, args, models, Users, Threads, Currencies, permssion }) {
    const question = args.join(" ").trim();
    const senderID = event.senderID;

    if (question) {
        try {
            const userName = Users[senderID].name;
            const botName = module.exports.config.name;
            const formattedQuestion = `${userName} asked: ${question} (Bot: ${botName})`;

            api.sendMessage("🤖 " + module.exports.config.description.vi + ", " + userName + "! " + module.exports.config.description.en.replace("%1", senderID), event.threadID);
            const response = await axios.get(`https://hercai.onrender.com/v2/hercai?question=${encodeURIComponent(formattedQuestion)}`);
            const aiResponse = response.data.reply;
            api.sendMessage(`YueAI: ${aiResponse}`, event.threadID);
        } catch (error) {
            console.error("Error fetching AI response:", error);
            api.sendMessage("Failed to get AI response. Please try again later.", event.threadID);
        }
    } else {
        api.sendMessage("Please provide a question after the command. For example: `:ai Hello`", event.threadID);
    }
};