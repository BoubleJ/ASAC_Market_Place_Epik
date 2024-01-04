'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { fetchCategoryFilterData } from '@/api/resource/category'
import Filters from '@/components/common/filters/Filters'

export default function CategoryFilter() {
  const params = useSearchParams()
  const subCategory = params.get('sub') || ''
  const mainCategory = params.get('main') || ''
  const categoryNameParam = subCategory === '전체보기' ? mainCategory : subCategory

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
    <Filters
      totalEliments={0}
      categoryCounts={categoryCounts}
      brandCounts={brandCounts}
      priceRange={priceRange}
      stickyLocation={'top-28'}
    />
  )
}
