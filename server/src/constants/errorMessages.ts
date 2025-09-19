const ERROR_MESSAGES = {
  // User & Auth-related
  USER_NOT_FOUND: 'User not found',
  USER_ALREADY_REGISTERED: 'User already registered and verified',
  USER_ALREADY_VERIFIED: 'User already verified',
  INVALID_CREDENTIALS: 'Invalid credentials or email not verified',
  WRONG_PASSWORD: 'Wrong password. Try again.',
  UNAUTHORIZED: 'Unauthorized access',
  FORBIDDEN: 'Forbidden',
  ACCOUNT_LOCKED: 'Account locked. Please contact support.',
  EMAIL_NOT_VERIFIED: 'Email not verified. Please verify to continue.',
  SESSION_EXPIRED: 'Session has expired. Please login again.',

  // OTP / Token
  NO_OTP_FOUND: 'No OTP found',
  INVALID_OR_EXPIRED_OTP: 'Invalid or expired OTP',
  INVALID_TOKEN: 'Invalid token',
  TOKEN_EXPIRED: 'Token has expired',
  TOKEN_REQUIRED: 'Authentication token is required',

  // Password Reset
  INVALID_OR_EXPIRED_RESET_TOKEN: 'Invalid or expired password reset token',
  INVALID_RESET_TOKEN: 'Invalid password reset token',

  // Validation / Request
  BAD_REQUEST: 'Bad request',
  VALIDATION_ERROR: 'Validation failed',
  MISSING_REQUIRED_FIELDS: 'Missing required fields',
  INVALID_INPUT: 'Invalid input data',
  UNSUPPORTED_MEDIA_TYPE: 'Unsupported media type',
  PAYLOAD_TOO_LARGE: 'Payload too large',

  // Resource / Data
  NOT_FOUND: 'Requested resource not found',
  ALREADY_EXISTS: 'Resource already exists',
  FETCH_USERS_FAILED: 'Failed to fetch users',
  FETCH_DATA_FAILED: 'Failed to fetch data',
  CREATE_FAILED: 'Failed to create resource',
  UPDATE_FAILED: 'Failed to update resource',
  DELETE_FAILED: 'Failed to delete resource',
  DB_CONNECTION_FAILED: 'Failed to connect to database',

  // File / Uploads
  FILE_UPLOAD_FAILED: 'File upload failed',
  FILE_TOO_LARGE: 'Uploaded file is too large',
  UNSUPPORTED_FILE_TYPE: 'Unsupported file type',

  // Server / Generic
  INTERNAL_SERVER_ERROR: 'Internal server error',
  GENERAL_ERROR: 'An error occurred',
  UNEXPECTED_ERROR: 'An unexpected error occurred.',
  SERVICE_UNAVAILABLE: 'Service temporarily unavailable',
  TIMEOUT_ERROR: 'Request timed out. Please try again.',
  RATE_LIMIT_EXCEEDED: 'Too many requests. Please try again later.',
};

export default ERROR_MESSAGES;
