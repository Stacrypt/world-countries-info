export const baseUrl = "https://upload.wikimedia.org/wikipedia/commons";
/**
 * get
 */
const getFullSvgUrl = (svgUrl: string): string => `${baseUrl}${svgUrl}`;

export default getFullSvgUrl;
