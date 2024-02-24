'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { fetchSearchItemsData } from '@/api/resource/search'
import CommonProductList from '@/components/common/product/commonProductList'
import { ContentType } from '@/types/product'

export default function SearchedItemList({}) {
  const searchParams = useSearchParams()
  const [productList, setProductList] = useState<ContentType>([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  const categoryParams = searchParams.get('카테고리')
  const brandParams = searchParams.get('브랜드')
  const priceParams = searchParams.get('가격')
  const searchword = decodeURIComponent(usePathname().split('/')[2])
  console.log(searchword)

  useEffect(() => {
    fetchSearchItemsData(searchword, categoryParams, brandParams, priceParams, page)
      .then(({ content, totalPages }) => {
        console.log('뭐가 바뀜??', searchword, categoryParams, brandParams, priceParams, page)
        console.log('콘텐트임ㅁㅁ!!!!!!!', content)
        console.log('콘텐트임ㅁㅁ!!!!!!!', totalPages)
        // 왜 같은거 두번????????/
        setProductList((prevProductList) => [...prevProductList, ...content])

        // console.log()
        setTotalPages(totalPages)
        // setIsLoading(false)
      })

      .catch((error) => {
        console.error('data fetch 실패', error)
      })
  }, [page])

  useEffect(() => {
    setPage(0)
    fetchSearchItemsData(searchword, categoryParams, brandParams, priceParams, page)
      .then(({ content, totalPages }) => {
        console.log('뭐가 바뀜??', searchword, categoryParams, brandParams, priceParams, page)
        console.log('콘텐트임ㅁㅁ!!!!!!!', content)
        console.log('콘텐트임ㅁㅁ!!!!!!!', totalPages)
        // 왜 같은거 두번????????/
        setProductList(content)

        // console.log()
        setTotalPages(totalPages)
        // setIsLoading(false)
      })

      .catch((error) => {
        console.error('data fetch 실패', error)
      })
  }, [categoryParams, brandParams, priceParams, searchword])

  const loadMore = () => {
    console.log('????????????엥loadmore')
    console.log(page, totalPages, '!!!!!!!!!')

    if (page < totalPages - 1) {
      console.log(page, totalPages, '!!!!!!!!!!!!')
      setPage((prevPage) => prevPage + 1)
    }
  }
  return (
    <>
      <div className="text-lg">
        {page}
        ㄴㅇㄹ
        {totalPages}
      </div>
      <CommonProductList productList={productList} loadMore={loadMore} />
    </>
  )
}
