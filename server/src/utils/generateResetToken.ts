import crypto from 'crypto';

export const generateResetToken = (): { token: string; tokenExpires: Date } => {
  const token = crypto.randomBytes(32).toString('hex'); 
  const tokenExpires = new Date();
  tokenExpires.setHours(tokenExpires.getHours() + 1);

  return { token, tokenExpires };
};
