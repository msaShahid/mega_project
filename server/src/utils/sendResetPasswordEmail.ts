export const sendResetPasswordEmail = async (email: string, token: string): Promise<void> => {
  const resetLink = `${process.env.CLIENT_URL}/reset-password?token=${token}`;
  const message = `To reset your password, click the following link: ${resetLink}`;
  console.log(email, 'Password Reset Request', message);
};
