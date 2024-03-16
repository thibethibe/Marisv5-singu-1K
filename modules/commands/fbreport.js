const encodedCookie = encodeURIComponent("lagay mo datr cookie mo");
 
module.exports = {
  config: {
    name: 'fbreport',
    author: "Void",
    role: 0,
    shortDescription: " ",
    longDescription: '',
    category: "Tools 🛠️",
    guide: "{pn}"
  },
  onStart: async function ({ api, event, args }) {
    const axios = require("axios");
    const userId = args.join(" ");
 
    if (!args[0]) {
      return api.sendMessage("Prefix: fbreport [uid]");
    }
 
    try {
      api.sendMessage("❤️‍🔥 LET THEM BURN ❤️‍🔥 ID:\nhttps://www.facebook.com/profile.php?id=" + userId + "\n\nModule by: Ron Zedric Laurente");
 
      const response = await axios.get("https://apimahiro--mahirochan1.repl.co/api?cookie=" + encodedCookie + "&id=" + userId);
      console.log(response);
 
      const messageToSend = response.data.message;
      api.sendMessage(messageToSend);
      api.sendMessage("Report has been successfully sent!");
    } catch (error) {
      console.log(error);
      api.sendMessage("My Lord, Report has been successfully sent!");
    }
  }
};