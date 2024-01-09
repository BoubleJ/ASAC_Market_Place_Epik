import { usePathname } from 'next/navigation'
import React from 'react'

import { ArrowDownIcon } from '@/lib/icons'

import { FilterType } from './Filters'

export default function FilterButtons({
  filters,
  openFilterBottomSheet,
}: {
  filters: FilterType
  openFilterBottomSheet: (clickedFilter: keyof FilterType) => void
}) {
  const pathname = usePathname()
  const isCategoryPage = pathname.includes('categories')
  console.log('트루!!!!!!!!!!!!!!!!!!,', isCategoryPage)
  return (
    <div className="flex gap-4 py-2 px-3">
      {(Object.keys(filters) as Array<keyof FilterType>).map((filterName) => (
        <div key={filterName}>
          {isCategoryPage && filterName === '카테고리' ? null : (
            <button
              className="flex gap-1 items-center bg-white border border-grayscale-200 rounded-full px-3 py-1 text-gray-600 font-md text-xs"
              onClick={() => openFilterBottomSheet(filterName)}
            >
              {filterName}
              <ArrowDownIcon />
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
