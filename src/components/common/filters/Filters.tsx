'use client'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import FilterButtons from '@/components/common/filters/FilterButtons'

import AppliedFilters from './AppliedFilters'
import FilterBottomSheet from './FilterBottomSheet'
import FilterButton from './FilterButton'
import SortButton from './SortButton'

export interface FilterType {
  카테고리: object
  브랜드: object
  가격: object
}

export interface AppliedFilterType {
  [key: string]: string[]
}

export default function Filters({
  totalEliments,
  categoryCounts,
  brandCounts,
  priceRange,
  stickyLocation,
}: {
  totalEliments: number
  categoryCounts: object
  brandCounts: object
  priceRange: object
  stickyLocation: string
}) {
  const filters: FilterType = {
    카테고리: categoryCounts,
    브랜드: brandCounts,
    가격: priceRange,
  }
  const searchParams = useSearchParams()

  const appliedFilters: AppliedFilterType = {
    카테고리: searchParams.get('카테고리')?.split(',') ?? [],
    브랜드: searchParams.get('브랜드')?.split(',') ?? [],
    가격: searchParams.get('가격')?.split(',') ?? [],
  }

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
  const [clickedFilter, setClickedFilter] = useState<keyof FilterType>('카테고리')

  const openFilterBottomSheet = (clickedFilter: keyof FilterType) => {
    setClickedFilter(clickedFilter)
    setIsBottomSheetOpen(true)
  }

  return (
    <>
      <div
        className={`sticky bg-white ${stickyLocation} z-10 flex justify-between px-4 py-2 text-body-xs text-gray-600`}
      >
        <div>총 {totalEliments}개</div>
        <div className="flex gap-3">
          <SortButton />
          <FilterButton onClick={() => openFilterBottomSheet('카테고리')} />
        </div>
      </div>

      {isBottomSheetOpen && (
        <>
          <div className="fixed inset-0 z-30 bg-black opacity-40" onClick={() => setIsBottomSheetOpen(false)}></div>
          <FilterBottomSheet
            filters={filters}
            appliedFilters={appliedFilters}
            clickedFilter={clickedFilter}
            onClose={() => setIsBottomSheetOpen(false)}
          />
        </>
      )}
      <FilterButtons filters={filters} openFilterBottomSheet={openFilterBottomSheet} />
      <AppliedFilters prevAppliedFilters={appliedFilters} />
    </>
  )
}
