import { Toast } from '@/components/ui/use-toast'
import { MouseEvent } from 'react'

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

export const handleCopyTextEvent = (
  toast: ({ ...props }: Toast) => void,
  event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  value: string,
  valueMessage?: string
) => {
  event.preventDefault()
  event.stopPropagation()

  copyToClipboard(value)

  toast({
    title: 'Copied to clipboard',
    description: (
      <p>
        Copied <span className='text-primary'>{valueMessage || value}</span> to
        clipboard
      </p>
    ),
  })
}
