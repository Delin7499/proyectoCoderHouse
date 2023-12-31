import { messagesModel } from "../models/messages.model.js";

class MessageManager {
  async getMessages() {
    return messagesModel.find();
  }

  async addMessage(data) {
    return await messagesModel.create(data);
  }
}

export default MessageManager;
