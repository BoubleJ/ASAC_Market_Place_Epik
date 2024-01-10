'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { fetchSearchItemsData } from '@/api/resource/search'
import { fetchFilterData, fetchIsEmpty } from '@/api/resource/search'
import Filters from '@/components/common/filters/Filters'
import EmptySearchResult from '@/components/feature/search/searchResult/EmptySearchResult'
import SearchResultHeader from '@/components/feature/search/searchResult/SearchResultHeader'

export default function SearchResultLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { item: string }
}) {
  const decodedItem = decodeURIComponent(params.item)
  const [isSearchResultEmpty, setIsSearchResultEmpty] = useState(false)
  const [filterData, setFilterData] = useState<{ categoryCounts?: any; brandCounts?: any; priceRange?: any } | null>(
    null,
  )
  // --------------------------
  const searchParams = useSearchParams()

  const [productList, setProductList] = useState(0)
  const categoryParams = searchParams.get('카테고리')
  const brandParams = searchParams.get('브랜드')
  const priceParams = searchParams.get('가격')
  const searchword = decodeURIComponent(usePathname().split('/')[2])

  useEffect(() => {
    fetchSearchItemsData(searchword, categoryParams, brandParams, priceParams)
      .then((data) => {
        setProductList(data.items.content.length)
      })
      .catch((error) => {
        console.error('data fetch 실패', error)
      })
  }, [categoryParams, brandParams, priceParams, searchword])
  // -----------------------------

  useEffect(() => {
    const fetchData = async () => {
      const emptyResult = await fetchIsEmpty(decodedItem)
      setIsSearchResultEmpty(emptyResult)

      if (!emptyResult) {
        const data = await fetchFilterData(decodedItem)
        setFilterData(data)
      }
    }

    fetchData()
  }, [decodedItem])

  const categoryCounts = filterData?.categoryCounts || {}
  const brandCounts = filterData?.brandCounts || {}
  const priceRange = filterData?.priceRange || {}

  return (
    <>
      <SearchResultHeader searchedWord={decodedItem} />
      {!isSearchResultEmpty && (
        <>
          {filterData && (
            <Filters
              totalEliments={productList}
              categoryCounts={categoryCounts}
              brandCounts={brandCounts}
              priceRange={priceRange}
              stickyLocation={'top-16'}
            />
          )}

          {children}
        </>
      )}
      {isSearchResultEmpty && <EmptySearchResult />}
    </>
  )
}
