const fs = require('fs');
const path = require('path');
const Threads = global.Threads; 
const databanuserFolderPath = path.join(__dirname, '../../modules/commands/cache/data/databanuser');
if (!fs.existsSync(databanuserFolderPath)) {
  fs.mkdirSync(databanuserFolderPath, { recursive: true });
}
async function createIfNotExist(filePath) {
  if (!fs.existsSync(filePath)) {
    await fs.promises.writeFile(filePath, JSON.stringify([]), 'utf8');
  }
}
async function initialize() {
  const allThreads = await Threads.getAll(); 
  allThreads.forEach(async (thread) => {
    const threadFilePath = path.join(databanuserFolderPath, `${thread.threadID}.json`);
    await createIfNotExist(threadFilePath);
  });
}
initialize();

module.exports.config = {
  name: "autokick",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SINGU-💌💌",
  description: "Tự động kick người dùng theo ID.",
  commandCategory: "Quản Trị Viên",
  usages: "[ID người dùng]",
  cooldowns: 5,
  dependencies: {
    "fs-extra": ""
  }
};
module.exports.run = async ({ event, api, args }) => {
  const threadID = event.threadID;
  if (args.length === 0) {
    return api.sendMessage('[Cách sử dụng]\n' +
                           '- Thêm ID vào danh sách cấm: autokick add <ID1>|<ID2>|...\n' +
                           '- Xóa ID khỏi danh sách cấm: autokick remove <ID1>|<ID2>|...\n' +
                           '- Liệt kê danh sách cấm: autokick list', threadID);
  }
  const threadFilePath = path.join(databanuserFolderPath, `${threadID}.json`);
  await createIfNotExist(threadFilePath);
  let data = JSON.parse(await fs.promises.readFile(threadFilePath));
  const action = args[0];
  switch (action) {
    case "add": {
      args.shift();
      const userIDsToAdd = args.join(" ").split('|').map(id => id.trim());
      const addedIDs = []; 
      const addedInfos = []; 
      for (const userID of userIDsToAdd) {
        if (!data.includes(userID)) {
          data.push(userID);
          addedIDs.push(userID); 
          try {
            const userInfo = await api.getUserInfo(userID);
            const userName = userInfo[userID] ? userInfo[userID].name : "Không Tìm Thấy";
            addedInfos.push(`${userName} (ID: ${userID})\n`);
          } catch (error) {
            console.error(`Không thể lấy thông tin của ID: ${userID}`, error);
            addedInfos.push(`Lỗi Khi Lấy Thông Tin (ID: ${userID})`);
          }
        }
      }
      await fs.promises.writeFile(threadFilePath, JSON.stringify(data, null, 2));
      if (addedIDs.length > 0) {
        api.sendMessage(`Đã thêm vào danh sách cấm:\n\n ${addedInfos.join(', ')}.`, threadID);
      } else {
        api.sendMessage(`Không có ID người dùng mới nào được thêm vào.`, threadID);
      }
      break;
    }
    case "remove": {
      args.shift();
      const userIDsToRemove = args.join(" ").split('|').map(id => id.trim());
      const removedIDs = [];
      data = data.filter(userID => {
        if (!userIDsToRemove.includes(userID)) {
          return true;
        } else {
          removedIDs.push(userID);
          return false;
        }
      });
      await fs.promises.writeFile(threadFilePath, JSON.stringify(data, null, 2));
      api.sendMessage(`Đã xóa khỏi danh sách cấm: ${removedIDs.join(', ')}.`, threadID);
      break;
    }
    case "list": {
      const bannedIDs = JSON.parse(await fs.promises.readFile(threadFilePath));
      const userInfoPromises = bannedIDs.map(async userID => {
        try {
          const userInfo = await api.getUserInfo(userID);
          return userInfo[userID] ? userInfo[userID].name : "Không Tìm Thấy";
        } catch (error) {
          console.error(`Không thể lấy thông tin của ID: ${userID}`, error);
          return "Lỗi Khi Lấy Thông Tin";
        }
      });
      const userInfos = await Promise.all(userInfoPromises);
      let listMessage = 'Danh sách người dùng bị cấm:\n';
      if (userInfos.length === 0) {
        listMessage += 'Hiện không có người dùng nào trong danh sách cấm.';
      } else {
        listMessage += userInfos.map((name, index) => `${index + 1}. ${name} (ID: ${bannedIDs[index]})`).join('\n');
      }
      api.sendMessage(listMessage, threadID);
      break;
    }
    default: {
      return api.sendMessage('Dùng ngu như con cac t, xem lại cách xử dụng đi', threadID);
    }
  }
};
module.exports.handleEvent = async ({ api, event }) => {
  const { senderID, threadID } = event;
  const threadFilePath = path.join(databanuserFolderPath, `${threadID}.json`);
  await createIfNotExist(threadFilePath);
  const bannedUsers = JSON.parse(await fs.promises.readFile(threadFilePath, 'utf8'));
  if (bannedUsers.includes(senderID)) {
    await api.removeUserFromGroup(senderID, threadID).catch(console.error);
    api.sendMessage(`Đã tự động kick người dùng có ID: ${senderID} vì nằm trong danh sách cấm.`, threadID);
  }
};