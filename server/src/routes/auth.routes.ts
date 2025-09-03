import express from 'express';
import { register, login, listUsers } from '../controllers/auth/auth.controller';
import { requireAuth } from '../middleware/auth.middleware';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/users', requireAuth ,listUsers);

export default router;
