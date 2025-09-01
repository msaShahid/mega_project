import express from 'express';
import { register, login, listUsers } from '../controllers/auth/auth.controller';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/users', listUsers);

export default router;
