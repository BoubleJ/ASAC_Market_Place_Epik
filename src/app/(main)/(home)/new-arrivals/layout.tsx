import React from 'react'

import { fetchNewArrivalsFilterData } from '@/api/resource/home'
import Filters from '@/components/common/filters/Filters'
import EventBanner from '@/components/feature/newArrivals/EventBanner'
import NewArrivalButton from '@/components/feature/newArrivals/NewArrivalButton'

export default async function NewArrivalsLayout({ children }: { children: React.ReactNode }) {
  const filterData = await fetchNewArrivalsFilterData()
  const categoryCounts = filterData.categoryCounts
  const brandCounts = filterData.brandCounts
  const priceRange = filterData.priceRange
  return (
    <div className="relative flex flex-col">
      <EventBanner />
      <NewArrivalButton />
      <Filters
        totalEliments={0}
        categoryCounts={categoryCounts}
        brandCounts={brandCounts}
        priceRange={priceRange}
        stickyLocation={'top-24'}
      />
      {children}
    </div>
  )
}
