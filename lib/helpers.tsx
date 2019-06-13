export const CapitaliseFirstLetter = (text: String) =>
  text.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

export const Slugify = (text: String) => text.replace(/ /g, '_');
export const UnSlugify = (text: String) => text.replace(/_/g, ' ');

export const MaxLengthString = (string: string, max_length: number) =>
  string.length > max_length ? string.substring(0, max_length - 3) + '...' : string;

export const RepeatElement = (number: number, element: any) => {
  const allElements: Array<any> = [];
  Array.from({ length: number }).forEach(() => {
    allElements.push(element);
  });
  return allElements.join('');
};

// SVG specific helpers
export const encodeSVG = (data: any) => {
  const symbols = /[\r\n%#()<>?\[\\\]^`{|}]/g;
  // Use single quotes instead of double to avoid encoding.
  data = data.replace(/'/g, '"');

  data = data.replace(/>\s{1,}</g, '><');
  data = data.replace(/\s{2,}/g, ' ');

  return data.replace(symbols, encodeURIComponent);
}
export const checkIfValidSVG = (svg: string) => {
  return svg.includes('<svg>') && svg.includes('</svg>')
}