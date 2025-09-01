import AppError from './appError';
import ERROR_MESSAGES from '../constants/errorMessages.js';
import ERROR_STATUS from '../constants/errorStatus.js';

const errorFactory = {
  userNotFound: () => new AppError(ERROR_MESSAGES.USER_NOT_FOUND, ERROR_STATUS.NOT_FOUND),
  invalidCredentials: () => new AppError(ERROR_MESSAGES.INVALID_CREDENTIALS, ERROR_STATUS.UNAUTHORIZED),
  unauthorized: () => new AppError(ERROR_MESSAGES.UNAUTHORIZED, ERROR_STATUS.UNAUTHORIZED),
  forbidden: () => new AppError(ERROR_MESSAGES.FORBIDDEN, ERROR_STATUS.FORBIDDEN),
  badRequest: (message = ERROR_MESSAGES.BAD_REQUEST) => new AppError(message, ERROR_STATUS.BAD_REQUEST),
  internalServerError: () => new AppError(ERROR_MESSAGES.INTERNAL_SERVER_ERROR, ERROR_STATUS.INTERNAL_SERVER_ERROR),
};

export default errorFactory;
