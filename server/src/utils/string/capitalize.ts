/**
 * Capitalize the first letter of a string.
 * @param str - Input string.
 * @returns Capitalized string.
 */
export const capitalize = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};
