import { Router } from 'express';
import { ChatController } from '@controllers/chat/chat.controller';
import { authenticate } from '@middlewares/auth.middleware';

const router = Router();
router.use(authenticate);

router.post('/conversation/:friendId', ChatController.getOrCreateConversation);
router.post('/conversation/:conversationId/message', ChatController.sendMessage);
router.get('/conversation/:conversationId/messages', ChatController.getMessages);

export default router;
