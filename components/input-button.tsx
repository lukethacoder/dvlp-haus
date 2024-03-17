import { MouseEventHandler } from 'react'
import { IconCopy } from '@tabler/icons-react'

import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

export default function InputButton({
  suffix,
  buttonAriaLabel,
  className,
  onClick,
}: {
  suffix?: string
  buttonAriaLabel: string
  className?: string
  onClick: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <span
      className={cn('absolute right-1.5 h-full flex items-center', className)}
    >
      {suffix && (
        <span className='text-sm text-muted-foreground mr-1'>{suffix}</span>
      )}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type='button'
              variant='ghost'
              aria-label={buttonAriaLabel}
              size='icon'
              className='w-7 h-7'
              onClick={onClick}
            >
              <IconCopy />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{buttonAriaLabel}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </span>
  )
}
