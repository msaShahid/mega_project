import { Router, Request, Response } from 'express';
import config from '@config/index';
import logger from '@utils/logger';

const router = Router();

/**
 * GET /api/health
 * Health check endpoint returning service status and API version
 */
router.get('/', async (_req: Request, res: Response) => {
  try {

    const healthPayload = {
      status: 'ok',
      version: config.apiVersion,
      environment: config.nodeEnv,
      uptime: process.uptime(), 
      timestamp: new Date().toISOString(),
    };

    logger.info('Health check success', healthPayload);

    res
      .status(200)
      .set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
      .json(healthPayload);
  } catch (error) {
    logger.error('Health check failed', { error });
    res.status(503).json({
      status: 'error',
      message: 'Service Unavailable',
      timestamp: new Date().toISOString(),
    });
  }
});


export default router;
