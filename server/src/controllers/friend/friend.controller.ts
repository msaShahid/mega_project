import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { FriendService } from '@services/friend/friend.service';

export class FriendController {
  
static async sendRequest(req: Request, res: Response) {
  try {
    console.log('✅ sendRequest controller hit');
    const requesterId = req.user!._id;
    const recipientId = req.params.recipientId;

    const recipientObjectId = new Types.ObjectId(recipientId); 

    const friendRequest = await FriendService.sendFriendRequest(requesterId, recipientObjectId);

    req.io?.to(recipientId).emit('friendRequestReceived', friendRequest);

    res.status(201).json(friendRequest);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

  static async respondRequest(req: Request, res: Response) {
    try {
      console.log('✅ respondRequest controller hit');
      const userId = req.user!._id;
      const { requestId } = req.params;
      const { accept } = req.body;

      const friendRequest = await FriendService.respondToFriendRequest(requestId, userId, accept);

      // Notify requester if accepted
      if (accept && friendRequest) {
        req.io?.to(friendRequest.requester.toString()).emit('friendRequestAccepted', friendRequest);
      }

      res.json(friendRequest);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

  static async getFriends(req: Request, res: Response) {
    try {
      const userId = req.user!._id;
      const friends = await FriendService.listFriends(userId);
      res.json(friends);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }
}
