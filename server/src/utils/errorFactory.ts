import AppError from '@utils/appError';
import ERROR_MESSAGES from '@constants/errorMessages.js';
import ERROR_STATUS from '@constants/errorStatus.js';

const errorFactory = {
  // User & Auth
  userNotFound: () => new AppError(ERROR_MESSAGES.USER_NOT_FOUND, ERROR_STATUS.NOT_FOUND),
  userAlreadyRegistered: () => new AppError(ERROR_MESSAGES.USER_ALREADY_REGISTERED, ERROR_STATUS.CONFLICT),
  userAlreadyVerified: () => new AppError(ERROR_MESSAGES.USER_ALREADY_VERIFIED, ERROR_STATUS.CONFLICT),
  invalidCredentials: () => new AppError(ERROR_MESSAGES.INVALID_CREDENTIALS, ERROR_STATUS.UNAUTHORIZED),
  wrongCredentials: () => new AppError(ERROR_MESSAGES.WRONG_PASSWORD, ERROR_STATUS.BAD_REQUEST),
  unauthorized: () => new AppError(ERROR_MESSAGES.UNAUTHORIZED, ERROR_STATUS.UNAUTHORIZED),
  forbidden: () => new AppError(ERROR_MESSAGES.FORBIDDEN, ERROR_STATUS.FORBIDDEN),
  accountLocked: () => new AppError(ERROR_MESSAGES.ACCOUNT_LOCKED, ERROR_STATUS.FORBIDDEN),
  emailNotVerified: () => new AppError(ERROR_MESSAGES.EMAIL_NOT_VERIFIED, ERROR_STATUS.UNAUTHORIZED),
  sessionExpired: () => new AppError(ERROR_MESSAGES.SESSION_EXPIRED, ERROR_STATUS.UNAUTHORIZED),

  // OTP / Token
  noOtpFound: () => new AppError(ERROR_MESSAGES.NO_OTP_FOUND, ERROR_STATUS.BAD_REQUEST),
  invalidOrExpiredOtp: () => new AppError(ERROR_MESSAGES.INVALID_OR_EXPIRED_OTP, ERROR_STATUS.BAD_REQUEST),
  invalidToken: () => new AppError(ERROR_MESSAGES.INVALID_TOKEN, ERROR_STATUS.UNAUTHORIZED),
  tokenExpired: () => new AppError(ERROR_MESSAGES.TOKEN_EXPIRED, ERROR_STATUS.UNAUTHORIZED),
  tokenRequired: () => new AppError(ERROR_MESSAGES.TOKEN_REQUIRED, ERROR_STATUS.UNAUTHORIZED),
  
  // Reset Password
  invalidOrExpiredResetToken: () => new AppError(ERROR_MESSAGES.INVALID_OR_EXPIRED_RESET_TOKEN, ERROR_STATUS.BAD_REQUEST),
  invalidResetToken: () => new AppError(ERROR_MESSAGES.INVALID_RESET_TOKEN, ERROR_STATUS.BAD_REQUEST),

  // Validation / Input
  badRequest: (message = ERROR_MESSAGES.BAD_REQUEST) => new AppError(message, ERROR_STATUS.BAD_REQUEST),
  validationError: (message = ERROR_MESSAGES.VALIDATION_ERROR) => new AppError(message, ERROR_STATUS.UNPROCESSABLE_ENTITY),
  missingFields: () => new AppError(ERROR_MESSAGES.MISSING_REQUIRED_FIELDS, ERROR_STATUS.BAD_REQUEST),
  invalidInput: () => new AppError(ERROR_MESSAGES.INVALID_INPUT, ERROR_STATUS.BAD_REQUEST),
  unsupportedMediaType: () => new AppError(ERROR_MESSAGES.UNSUPPORTED_MEDIA_TYPE, ERROR_STATUS.UNSUPPORTED_MEDIA_TYPE),
  payloadTooLarge: () => new AppError(ERROR_MESSAGES.PAYLOAD_TOO_LARGE, ERROR_STATUS.PAYLOAD_TOO_LARGE),

  // Resource / Data
  notFound: (message = ERROR_MESSAGES.NOT_FOUND) => new AppError(message, ERROR_STATUS.NOT_FOUND),
  alreadyExists: () => new AppError(ERROR_MESSAGES.ALREADY_EXISTS, ERROR_STATUS.CONFLICT),
  fetchUsersFailed: () => new AppError(ERROR_MESSAGES.FETCH_USERS_FAILED, ERROR_STATUS.BAD_REQUEST),
  fetchDataFailed: (message = ERROR_MESSAGES.FETCH_DATA_FAILED) => new AppError(message, ERROR_STATUS.BAD_REQUEST),
  createFailed: (message = ERROR_MESSAGES.CREATE_FAILED) => new AppError(message, ERROR_STATUS.BAD_REQUEST),
  updateFailed: (message = ERROR_MESSAGES.UPDATE_FAILED) => new AppError(message, ERROR_STATUS.BAD_REQUEST),
  deleteFailed: (message = ERROR_MESSAGES.DELETE_FAILED) => new AppError(message, ERROR_STATUS.BAD_REQUEST),
  dbConnectionFailed: () => new AppError(ERROR_MESSAGES.DB_CONNECTION_FAILED, ERROR_STATUS.INTERNAL_SERVER_ERROR),

  // File / Upload
  fileUploadFailed: () => new AppError(ERROR_MESSAGES.FILE_UPLOAD_FAILED, ERROR_STATUS.BAD_REQUEST),
  fileTooLarge: () => new AppError(ERROR_MESSAGES.FILE_TOO_LARGE, ERROR_STATUS.PAYLOAD_TOO_LARGE),
  unsupportedFileType: () => new AppError(ERROR_MESSAGES.UNSUPPORTED_FILE_TYPE, ERROR_STATUS.UNSUPPORTED_MEDIA_TYPE),

  // Server / General
  internalServerError: () => new AppError(ERROR_MESSAGES.INTERNAL_SERVER_ERROR, ERROR_STATUS.INTERNAL_SERVER_ERROR),
  serviceUnavailable: () => new AppError(ERROR_MESSAGES.SERVICE_UNAVAILABLE, ERROR_STATUS.SERVICE_UNAVAILABLE),
  timeoutError: () => new AppError(ERROR_MESSAGES.TIMEOUT_ERROR, ERROR_STATUS.GATEWAY_TIMEOUT),
  rateLimitExceeded: () => new AppError(ERROR_MESSAGES.RATE_LIMIT_EXCEEDED, ERROR_STATUS.TOO_MANY_REQUESTS),
  generalError: (message = ERROR_MESSAGES.GENERAL_ERROR) => new AppError(message, ERROR_STATUS.BAD_REQUEST),
  unexpectedError: (message = ERROR_MESSAGES.UNEXPECTED_ERROR) => new AppError(message, ERROR_STATUS.INTERNAL_SERVER_ERROR),
};

export default errorFactory;
