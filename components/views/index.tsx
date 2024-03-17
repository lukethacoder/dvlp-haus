'use client'

import useSWR from 'swr'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { swrFetcher } from '@/lib/api/utils'

const numberFormat = new Intl.NumberFormat('en-AU')

export default function ViewsClient({ pathId }: { pathId: number }) {
  const { data, error, isLoading } = useSWR(
    `/api/hits/?path_id=${pathId}`,
    swrFetcher
  )

  return (
    <TooltipProvider delayDuration={180}>
      <Tooltip>
        <TooltipTrigger>
          🔍 {isLoading || error ? '?' : numberFormat.format(data?.hits || 0)}
        </TooltipTrigger>
        <TooltipContent>
          <p>Unique page views</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
