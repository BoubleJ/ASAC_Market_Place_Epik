'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { fetchBestItemsData } from '@/api/resource/home'
import CommonProductList from '@/components/common/product/commonProductList'

export default function BestItemsList() {
  const searchParams = useSearchParams()
  const [productList, setProductList] = useState([])
  const categoryParams = searchParams.get('categoryCounts')
  const brandParams = searchParams.get('brandCounts')
  const priceParams = searchParams.get('priceRange')
  // const filterParam = useSearchParams().get('filter')

  useEffect(() => {
    fetchBestItemsData(categoryParams, brandParams, priceParams)
      .then((data) => {
        setProductList(data.items.content)
      })
      .catch((error) => {
        console.error('data fetch 실패', error)
      })
  }, [categoryParams, brandParams, priceParams])
  const loadMore = () => {}

  return <CommonProductList productList={productList} loadMore={loadMore} />
}
