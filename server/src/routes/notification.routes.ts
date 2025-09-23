import { Router } from 'express';
import { NotificationController } from '@controllers/notification/notification.controller';
import { authenticate } from '@middlewares/auth.middleware';

const router = Router();
router.use(authenticate);

router.get('/', NotificationController.getNotifications);
router.post('/:notificationId/read', NotificationController.markAsRead);

export default router;
