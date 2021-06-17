export const baseUrl = "https://upload.wikimedia.org/wikipedia/commons";
/**
 * Get the full url (wikimedia) from svg links
 */
const getFullSvgUrl = (svgUrl: string): string => `${baseUrl}${svgUrl}`;

export default getFullSvgUrl;
