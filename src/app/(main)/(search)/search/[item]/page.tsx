'use client'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { fetchSearchItemsData } from '@/api/resource/search'
import FilterLoading from '@/components/common/loading/FilterLoading'
import ItemListLoading from '@/components/common/loading/ItemListLoading'
import Spinner from '@/components/common/loading/Spinner'
import EmptySearchResult from '@/components/feature/search/searchResult/EmptySearchResult'
import { ContentType } from '@/types/product'

const SearchFilter = dynamic(() => import('@/components/feature/search/SearchFilter'), {
  loading: () => <FilterLoading />,
})
const SearchedItemList = dynamic(() => import('@/components/feature/search/searchResult/SearchedItemList'), {
  loading: () => <ItemListLoading />,
})

export default function SearchResultPage({
  params,
  searchParams,
}: {
  params: { item: string }
  searchParams: {
    ['카테고리']: string | null
    ['브랜드']: string | null
    ['가격']: string | null
    ['page']: number | null
  }
}) {
  // const page = searchParams?.['page']
  const [productList, setProductList] = useState<ContentType>([])
  const [totalPage, setTotalPage] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const decodedItem = decodeURIComponent(params.item)
  //
  const brandParams = searchParams?.['브랜드']
  const priceParams = searchParams?.['가격']
  const categoryParams = searchParams?.['카테고리']
  const searchword = decodeURIComponent(usePathname().split('/')[2])

  useEffect(() => {
    console.log(categoryParams, '카테고리 파람 change -> 리패치')
    fetchSearchItemsData(searchword, categoryParams, brandParams, priceParams, 0)
      .then(({ content, totalPages }) => {
        setProductList(content)
        setTotalPage(totalPages)

        setIsLoading(false)
      })

      .catch((error) => {
        console.error('data fetch 실패', error)
      })
  }, [categoryParams, brandParams, priceParams, searchword])

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : productList.length === 0 ? (
        <EmptySearchResult />
      ) : (
        <div>
          <SearchFilter itemLength={productList.length} searchWord={decodedItem} />
          <SearchedItemList
            initialProductList={productList}
            params={{
              categoryParams,
              brandParams,
              priceParams,
              searchword,
            }}
            totalPage={totalPage}
          />
        </div>
      )}
    </>
  )
}
