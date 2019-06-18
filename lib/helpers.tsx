export const CapitaliseFirstLetter = (text: string) =>
  text.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

export const Slugify = (text: string) => text.replace(/ /g, '_');
export const UnSlugify = (text: string) => text.replace(/_/g, ' ');

export const inverseQuoteType = (text: string, type: string) => {
  switch (type) {
    case 'single': {
      return text.replace(/"/g, "'");
    }
    case 'double': {
      return text.replace(/'/g, '"');
    }
    default: 
      // console.log('invalid type: valid types are "single" or "double"')
  }
};

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
  return svg.includes('<svg') && svg.includes('</svg>')
}

export const mathRound = (number: number, decimals: number) => +(Math.round(Number(number.toString() + "e+" + decimals.toString())) + "e-" + decimals)