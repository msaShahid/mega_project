/**
 * Convert a string to a URL-friendly slug.
 * @param text - Input string.
 * @returns Slugified string.
 */
export const slugify = (text: string): string => {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')       // Remove non-word chars
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/--+/g, '-');          // Remove multiple dashes
};
