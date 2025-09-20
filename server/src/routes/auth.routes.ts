import express from 'express';
import { register, verifyOtp, resendOtp, login, forgotPassword, resetPassword listUsers } from '@controllers/auth/auth.controller';
import { requireAuth } from '@middlewares/auth.middleware';

const router = express.Router();

router.post('/register', register);
router.post('/verify', verifyOtp);
router.post('/resend-otp', resendOtp);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

router.get('/users', requireAuth ,listUsers);

export default router;
