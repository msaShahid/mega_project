const ERROR_MESSAGES = {
  USER_NOT_FOUND: 'User not found',
  USER_ALREADY_REGISTERED: 'User already registered and verified',
  USER_ALREADY_VERIFIED: 'User already verified',
  NO_OTP_FOUND: 'No OTP found',
  INVALID_OR_EXPIRED_OTP: 'Invalid or expired OTP',
  INVALID_CREDENTIALS: 'Invalid credentials or email not verified',
  WRONG_PASSWORD: 'Wrong password. try again.',
  UNAUTHORIZED: 'Unauthorized access',
  FORBIDDEN: 'Forbidden',
  BAD_REQUEST: 'Bad request',
  INTERNAL_SERVER_ERROR: 'Internal server error',
  GENERAL_ERROR: 'An error occurred',
  UNEXPECTED_ERROR: 'An unexpected error occurred.',
  FETCH_USERS_FAILED: 'Failed to fetch users',
};

export default ERROR_MESSAGES;
