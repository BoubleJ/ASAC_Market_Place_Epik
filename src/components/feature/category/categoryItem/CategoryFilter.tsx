'use client'

import React, { useEffect, useState } from 'react'

import { fetchCategoryFilterData } from '@/api/resource/category'
import Filters from '@/components/common/filters/Filters'

export default function CategoryFilter({
  itemLength,
  categoryNameParam,
}: {
  itemLength: number
  categoryNameParam: string
}) {
  const [filterData, setFilterData] = useState({ categoryCounts: {}, brandCounts: {}, priceRange: [] })

  useEffect(() => {
    fetchCategoryFilterData(categoryNameParam).then((data) => {
      setFilterData(data)
    })
  }, [categoryNameParam])

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
        stickyLocation={'top-28'}
      />
    </>
  )
}
