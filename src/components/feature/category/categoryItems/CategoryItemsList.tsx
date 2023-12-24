'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { fetchCategoryItems } from '@/api/resource/category'
import CommonProductList from '@/components/common/product/commonProductList'

export default function CategoryItemsList() {
  const params = useSearchParams()
  const subCategory = params.get('sub') || ''
  const mainCategory = params.get('main') || ''
  const categoryNameParam = subCategory === '전체보기' ? mainCategory : subCategory
  const [productList, setProductList] = useState([])

  useEffect(() => {
    fetchCategoryItems(categoryNameParam)
      .then((data) => {
        setProductList(data.items.content)
      })
      .catch((error) => {
        console.error('상품들을 불러오기 실패', error)
      })
  }, [categoryNameParam])

  return (
    <div>
      {productList.length > 0 ? (
        <CommonProductList productList={productList} />
      ) : (
        <div className="p-4 text-grayscale-400">
          <p>해당 카테고리의 상품이 없습니다.</p>
        </div>
      )}
    </div>
  )
}
