import React from 'react'

import EventBanner from '@/components/feature/recommendations/EventBanner'
import LastSale from '@/components/feature/recommendations/LastSale'
import WeekendSale from '@/components/feature/recommendations/WeekendSale'

export default function RecommendationsPage() {
  return (
    <div className="flex flex-col">
      <EventBanner />
      <div className="px-5 py-7 gap-14 flex flex-col">
        <LastSale />
        <WeekendSale />
        <div className="border-2">home🏠</div>
      </div>
    </div>
  )
}
