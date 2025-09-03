import express from 'express';
import { register, verifyUser, login, listUsers } from '@controllers/auth/auth.controller';
import { requireAuth } from '@middlewares/auth.middleware';

const router = express.Router();

router.post('/register', register);
router.post('/verify', verifyUser);
router.post('/login', login);

router.get('/users', requireAuth ,listUsers);

export default router;
