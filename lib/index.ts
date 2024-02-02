export const copyToClipboard = (value: string) => {
  const el = document.createElement('input')
  el.value = value
  el.classList.add('sr-only')
  document.body.appendChild(el)
  el.focus()
  el.select()

  document.execCommand('copy')

  el.remove()

  console.log('Copied!')
}
