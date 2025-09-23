import { Request, Response } from 'express';
import { NotificationService } from '@services/notification/notification.service';

export class NotificationController {
  static async getNotifications(req: Request, res: Response) {
    try {
      const userId = req.user!._id;
      const notifications = await NotificationService.getNotifications(userId);
      res.json(notifications);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  static async markAsRead(req: Request, res: Response) {
    try {
      const userId = req.user!._id;
      const { notificationId } = req.params;

      const notification = await NotificationService.markAsRead(notificationId, userId);

      if (!notification) {
        return res.status(404).json({ message: 'Notification not found' });
      }

      res.json(notification);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
