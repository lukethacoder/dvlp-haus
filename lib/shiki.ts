// `shiki/core` entry does not include any themes or languages or the wasm binary.
import { getHighlighterCore } from 'shiki/core'

// `shiki/wasm` contains the wasm binary inlined as base64 string.
import getWasm from 'shiki/wasm'

export const highlighter = async () => {
  const _highlighter = await getHighlighterCore({
    themes: [import('shiki/themes/one-dark-pro.mjs')],
    langs: [import('shiki/langs/typescript.mjs')],
    loadWasm: getWasm,
  })

  return _highlighter
}
