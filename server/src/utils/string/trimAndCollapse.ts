/**
 * Trim leading/trailing spaces and collapse multiple internal spaces.
 * @param str - Input string.
 * @returns Cleaned string.
 */
export const trimAndCollapse = (str: string): string => {
  return str.replace(/\s+/g, ' ').trim();
};
