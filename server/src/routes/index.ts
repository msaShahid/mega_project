import express from 'express';
import v1Router from './v1';
import healthRoutes from './health.routes';

const router = express.Router();

router.use('/health', healthRoutes);
router.use('/v1', v1Router);

// Future versions go here:
// import v2Router from './v2';
// router.use('/v2', v2Router);

export default router;
