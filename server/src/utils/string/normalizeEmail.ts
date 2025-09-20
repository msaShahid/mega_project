/**
 * Normalize an email address by trimming and lowercasing.
 * @param email - The input email address.
 * @returns Normalized email.
 */
export const normalizeEmail = (email: string): string => {
  return email.trim().toLowerCase();
};
