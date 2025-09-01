import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger.js';

interface CustomError extends Error {
  status?: number;
}

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.status || 500;

  // Log full error details
  logger.error({
    message: err.message,
    stack: err.stack,
    status: statusCode,
    method: req.method,
    url: req.originalUrl,
  });

  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
    error: statusCode === 500 ? 'Internal Server Error' : err.message,
  });
};

export default errorHandler;
