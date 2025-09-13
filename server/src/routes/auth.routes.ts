import express from 'express';
import { register, verifyUser, resendOtpToUser, login, listUsers } from '@controllers/auth/auth.controller';
import { requireAuth } from '@middlewares/auth.middleware';

const router = express.Router();

router.post('/register', register);
router.post('/verify', verifyUser);
router.post('/resend-otp', resendOtpToUser);
router.post('/login', login);

router.get('/users', requireAuth ,listUsers);

export default router;
