import Conversation, { IConversation } from '@models/chat/conversation.model';
import Message, { IMessage } from '@models/chat/message.model';
import { Types } from 'mongoose';

export class ChatService {
  static async getOrCreateConversation(userId: Types.ObjectId, friendId: Types.ObjectId): Promise<IConversation> {
    let conversation = await Conversation.findOne({
      participants: { $all: [userId, friendId], $size: 2 },
    });

    if (!conversation) {
      conversation = new Conversation({ participants: [userId, friendId] });
      await conversation.save();
    }

    return conversation;
  }

  static async sendMessage(conversationId: string, senderId: Types.ObjectId, text: string): Promise<IMessage> {
    const message = new Message({
      conversation: conversationId,
      sender: senderId,
      text,
      readBy: [senderId],
    });

    await message.save();
    return message;
  }

  static async getMessages(conversationId: string): Promise<IMessage[]> {
    return Message.find({ conversation: conversationId }).sort({ createdAt: 1 });
  }
}
