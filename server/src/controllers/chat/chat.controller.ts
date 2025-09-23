import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { ChatService } from '@services/chat/chat.service';

export class ChatController {

  static async getOrCreateConversation(req: Request, res: Response) {
    try {
      const userId = req.user!._id;
      const friendId = req.params.friendId;

      if (!Types.ObjectId.isValid(friendId)) {
        return res.status(400).json({ message: 'Invalid friend ID' });
      }

      const friendObjectId = new Types.ObjectId(friendId); 

      const conversation = await ChatService.getOrCreateConversation(userId, friendObjectId);
      res.json(conversation);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

  static async sendMessage(req: Request, res: Response) {
    try {
      const senderId = req.user!._id;
      const { conversationId } = req.params;
      const { text } = req.body;

      const message = await ChatService.sendMessage(conversationId, senderId, text);

      // Notify other participants in the conversation
      // Fetch conversation to get other participant
      const conversation = await ChatService.getOrCreateConversation(senderId, message.conversation as any);

      conversation.participants.forEach(participantId => {
        if (!participantId.equals(senderId)) {
          req.io?.to(participantId.toString()).emit('newMessage', message);
        }
      });

      res.status(201).json(message);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

  static async getMessages(req: Request, res: Response) {
    try {
      const userId = req.user!._id;
      const { conversationId } = req.params;

      // Optional: check if user is participant of conversation

      const messages = await ChatService.getMessages(conversationId);
      res.json(messages);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
  
}
