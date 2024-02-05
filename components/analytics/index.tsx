'use client'

import { ClarityScript } from './clarity'
import { GoatCounterScript } from './goat'

export const AnalyticsBlock = () => {
  return (
    <>
      {process.env.NEXT_PUBLIC_GOAT_COUNTER ? (
        <GoatCounterScript
          siteUrl={`https://${process.env.NEXT_PUBLIC_GOAT_COUNTER}/count`}
        />
      ) : null}
      {process.env.NEXT_PUBLIC_CLARITY_CODE && (
        <ClarityScript clarityKey={process.env.NEXT_PUBLIC_CLARITY_CODE} />
      )}
    </>
  )
}

export default AnalyticsBlock
