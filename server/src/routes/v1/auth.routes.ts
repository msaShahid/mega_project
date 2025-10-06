import express from 'express';
import AuthController from '@controllers/auth/auth.controller';
import { authenticate } from '@middlewares/auth.middleware';

const router = express.Router();

router.post('/register', AuthController.register);
router.post('/verify', AuthController.verifyOtp);
router.post('/resend-otp', AuthController.resendOtp);
router.post('/login', AuthController.login);
router.post('/forgot-password', AuthController.forgotPassword);
router.post('/reset-password', AuthController.resetPassword);

router.get('/users', authenticate, AuthController.listUsers);

export default router;
