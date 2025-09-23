import Notification, { INotification } from '@models/notification/notification.model';
import { Types } from 'mongoose';

export class NotificationService {
  
  static async createNotification(userId: Types.ObjectId, type: string, message: string): Promise<INotification> {
    const notification = new Notification({ user: userId, type, message });
    return notification.save();
  }

  static async getNotifications(userId: Types.ObjectId): Promise<INotification[]> {
    return Notification.find({ user: userId }).sort({ createdAt: -1 });
  }

  static async markAsRead(notificationId: string, userId: Types.ObjectId): Promise<INotification | null> {
    return Notification.findOneAndUpdate(
      { _id: notificationId, user: userId },
      { read: true },
      { new: true }
    );
  }
}
