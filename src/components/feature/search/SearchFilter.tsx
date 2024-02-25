'use client'

import React, { useEffect, useState } from 'react'

import { fetchFilterData } from '@/api/resource/search'
import Filters from '@/components/common/filters/Filters'

export default function CategoryFilter({ itemLength, searchWord }: { itemLength: number; searchWord: string }) {
  const [filterData, setFilterData] = useState({ categoryCounts: {}, brandCounts: {}, priceRange: [] })

  useEffect(() => {
    fetchFilterData(searchWord).then((data) => {
      setFilterData(data)
    })
  }, [searchWord])

  const categoryCounts = filterData.categoryCounts
  const brandCounts = filterData.brandCounts
  const priceRange = filterData.priceRange
  return (
    <>
      <Filters
        totalEliments={itemLength}
        categoryCounts={categoryCounts}
        brandCounts={brandCounts}
        priceRange={priceRange}
        stickyLocation={'top-16'}
      />
    </>
  )
}
