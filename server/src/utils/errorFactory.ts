import AppError from '@utils/appError';
import ERROR_MESSAGES from '@constants/errorMessages.js';
import ERROR_STATUS from '@constants/errorStatus.js';

const errorFactory = {
  userNotFound: () => new AppError(ERROR_MESSAGES.USER_NOT_FOUND, ERROR_STATUS.NOT_FOUND),
  userAlreadyRegistered: () => new AppError(ERROR_MESSAGES.USER_ALREADY_REGISTERED, ERROR_STATUS.CONFLICT),
  userAlreadyVerified: () => new AppError(ERROR_MESSAGES.USER_ALREADY_VERIFIED, ERROR_STATUS.CONFLICT),
  noOtpFound: () => new AppError(ERROR_MESSAGES.NO_OTP_FOUND, ERROR_STATUS.BAD_REQUEST),
  invalidOrExpiredOtp: () => new AppError(ERROR_MESSAGES.INVALID_OR_EXPIRED_OTP, ERROR_STATUS.BAD_REQUEST),
  invalidCredentials: () => new AppError(ERROR_MESSAGES.INVALID_CREDENTIALS, ERROR_STATUS.UNAUTHORIZED),
  wrongCredentials: () => new AppError(ERROR_MESSAGES.WRONG_PASSWORD, ERROR_STATUS.BAD_REQUEST),
  unauthorized: () => new AppError(ERROR_MESSAGES.UNAUTHORIZED, ERROR_STATUS.UNAUTHORIZED),
  forbidden: () => new AppError(ERROR_MESSAGES.FORBIDDEN, ERROR_STATUS.FORBIDDEN),
  badRequest: (message = ERROR_MESSAGES.BAD_REQUEST) =>new AppError(message, ERROR_STATUS.BAD_REQUEST),
  internalServerError: () => new AppError(ERROR_MESSAGES.INTERNAL_SERVER_ERROR, ERROR_STATUS.INTERNAL_SERVER_ERROR),

  generalError: (message = ERROR_MESSAGES.GENERAL_ERROR) =>new AppError(message, ERROR_STATUS.BAD_REQUEST),
  unexpectedError: (message = ERROR_MESSAGES.UNEXPECTED_ERROR) =>new AppError(message, ERROR_STATUS.BAD_REQUEST),
  fetchUserFailed: (message = ERROR_MESSAGES.FETCH_USERS_FAILED) =>new AppError(message, ERROR_STATUS.BAD_REQUEST),
};

export default errorFactory;
