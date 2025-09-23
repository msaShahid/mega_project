import { IUser } from '@models/auth/user.model';
import FriendRequest, { IFriendRequest } from '@models/friend/friendRequest.model';
import { Types } from 'mongoose';

export class FriendService {

  static async sendFriendRequest(requesterId: Types.ObjectId, recipientId: Types.ObjectId): Promise<IFriendRequest> {
    
    if (requesterId.equals(recipientId)) {
      throw new Error("You can't send a friend request to yourself");
    }

    const existing = await FriendRequest.findOne({
      $or: [
        { requester: requesterId, recipient: recipientId },
        { requester: recipientId, recipient: requesterId },
      ],
      status: { $in: ['pending', 'accepted'] },
    });

    if (existing) {
      throw new Error('Friend request already sent or already friends');
    }

    const friendRequest = new FriendRequest({ requester: requesterId, recipient: recipientId });
    return friendRequest.save();
  }

  static async respondToFriendRequest(requestId: string, userId: Types.ObjectId, accept: boolean): Promise<IFriendRequest | null> {
    const friendRequest = await FriendRequest.findById(requestId);

    console.log({
      friendRequestRecipient: friendRequest?.recipient.toString(),
      userTryingToRespond: userId.toString()
    });


    if (!friendRequest || !friendRequest.recipient.equals(userId)) {
      throw new Error('Friend request not found or unauthorized');
    }

    friendRequest.status = accept ? 'accepted' : 'rejected';
    return friendRequest.save();
  }

static async listFriends(userId: Types.ObjectId) {
  const friends = await FriendRequest.find({
    $or: [{ requester: userId }, { recipient: userId }],
    status: 'accepted',
  }).populate<{ requester: IUser; recipient: IUser }>('requester recipient', 'name email');

  return friends.map((fr) => {
    const friend = fr.requester._id.equals(userId) ? fr.recipient : fr.requester;
    return { _id: friend._id, name: friend.name, email: friend.email };
  });
}

}
