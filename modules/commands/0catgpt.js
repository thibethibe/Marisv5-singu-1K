const axios = require('axios');

module.exports.config = {
  name: "0catgpt",
  version: "1.0.0",
  hasPermission: 0,
  credits: "SINGU-💌💌", //SINGU-💌💌
  description: "Chat with catgpt",
  usePrefix: false,
  commandCategory: "ai",
  usages: "<text>",
  cooldowns: 3,
};

module.exports.run = async function ({ api, event, args }) {
  const q = args.join(" ");
  try {
    const response = await axios.post("https://catgpt.guru/api/chat", {
      messages: [
        {
          role: "user",
          content: q,
        },
      ],
    });
    api.sendMessage(response.data, event.threadID, event.messageID);
  } catch (error) {
    console.error(error);
    api.sendMessage('catgpt didn\'t meow back:(', event.threadID, event.messageID);
  }
};
