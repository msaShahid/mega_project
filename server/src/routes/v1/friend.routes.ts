import { Router } from 'express';
import { FriendController } from '@controllers/friend/friend.controller';
import { authenticate } from '@middlewares/auth.middleware';

const router = Router();

router.use(authenticate);
console.log('✅ Friend routes loaded');

router.post('/request/:recipientId', FriendController.sendRequest);
router.post('/request/:requestId/respond', FriendController.respondRequest);
router.get('/list', FriendController.getFriends);

export default router;
