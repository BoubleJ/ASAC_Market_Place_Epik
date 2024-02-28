'use client'

import React, { useEffect, useState } from 'react'

import { fetchFilterData } from '@/api/resource/search'
import Filters, { FilterDataType } from '@/components/common/filters/Filters'

export default function SearchFilter({ itemLength, searchWord }: { itemLength: number; searchWord: string }) {
  const [filterData, setFilterData] = useState<FilterDataType>({
    categoryCounts: {},
    brandCounts: {},
    promotionCounts: {},
    priceRange: [],
  })
  useEffect(() => {
    fetchFilterData(searchWord).then((data) => {
      setFilterData(data)
    })
  }, [searchWord])

  return (
    <>
      <Filters totalEliments={itemLength} stickyLocation={'top-16'} filterData={filterData} />
    </>
  )
}
