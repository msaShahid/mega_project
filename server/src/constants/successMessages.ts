const SUCCESS_MESSAGES = {
  // Authentication / User Flow
  USER_REGISTERED: 'User registered successfully. Please verify the OTP sent to your email.',
  USER_VERIFIED: 'User verified successfully. You can now log in.',
  ACCOUNT_VERIFIED: 'Account verified successfully.',
  LOGIN_SUCCESS: 'Login successful.',
  LOGOUT_SUCCESS: 'Logout successful.',
  PASSWORD_RESET_EMAIL_SENT: 'Password reset email sent successfully.',   // <== Added here
  PASSWORD_RESET_SUCCESS: 'Password has been reset successfully.',
  EMAIL_VERIFIED: 'Email verified successfully.',
  TOKEN_REFRESHED: 'Access token refreshed successfully.',
  PROFILE_UPDATED: 'Profile updated successfully.',

  // CRUD Operations
  DATA_FETCHED: 'Data fetched successfully.',
  USER_FETCHED: 'User data fetched successfully.',
  USERS_FETCHED: 'Users fetched successfully.',
  DATA_CREATED: 'Resource created successfully.',
  DATA_UPDATED: 'Resource updated successfully.',
  DATA_DELETED: 'Resource deleted successfully.',

  // File Upload
  FILE_UPLOADED: 'File uploaded successfully.',
  FILE_DELETED: 'File deleted successfully.',

  // Misc
  OPERATION_SUCCESS: 'Operation completed successfully.',
  SETTINGS_UPDATED: 'Settings updated successfully.',
};

export default SUCCESS_MESSAGES;
