/**
 * Normalize an email by trimming whitespace and converting to lowercase.
 *
 * @param email - The email address to normalize.
 * @returns The normalized email address.
 */
export const normalizeEmail = (email: string) => email.trim().toLowerCase();

