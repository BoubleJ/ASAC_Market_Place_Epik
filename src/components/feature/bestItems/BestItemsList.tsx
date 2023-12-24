'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { fetchBestItemsData } from '@/api/resource/home'
import CommonProductList from '@/components/common/product/commonProductList'

export default function BestItemsList() {
  const searchParams = useSearchParams()
  const [productList, setProductList] = useState([])
  const categoryParams = searchParams.get('카테고리')
  const brandParams = searchParams.get('브랜드')
  const priceParams = searchParams.get('가격')
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
  return <CommonProductList productList={productList} />
}
