import * as React from 'react'

import { cn } from '@/lib/utils'

const InputError = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn('text-xs font-medium text-destructive mt-1', className)}
    {...props}
  />
))
InputError.displayName = 'InputError'

export default InputError
