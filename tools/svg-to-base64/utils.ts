export const encodeSvg = (data: string) => {
  const symbols = /[\r\n%#()<>?\[\\\]^`{|}]/g
  // Use single quotes instead of double to avoid encoding.
  data = data.replace(/'/g, '"')

  data = data.replace(/>\s{1,}</g, '><')
  data = data.replace(/\s{2,}/g, ' ')

  return data.replace(symbols, encodeURIComponent)
}

export const checkIfValidSvg = (string: string) => {
  return string.startsWith('<svg') && string.endsWith('</svg>')
}
