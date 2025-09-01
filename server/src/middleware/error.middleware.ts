import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

interface CustomError extends Error {
  status?: number;
  isOperational?: boolean;
}

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
 
  const statusCode = err.status ?? 500;
  const isOperational = err.isOperational ?? false;

  if (statusCode >= 500) {
    logger.error({
      message: err.message,
      stack: err.stack,
      status: statusCode,
      method: req.method,
      url: req.originalUrl,
    });
  } else {
    logger.warn({
      message: err.message,
      status: statusCode,
      method: req.method,
      url: req.originalUrl,
    });
  }

  const message =
    process.env.NODE_ENV === 'production' && !isOperational
      ? 'Internal Server Error'
      : err.message;

  res.status(statusCode).json({
    message,
    error: statusCode === 500 && (!isOperational || process.env.NODE_ENV === 'production')
      ? 'Internal Server Error'
      : err.message,
  });
};

export default errorHandler;
